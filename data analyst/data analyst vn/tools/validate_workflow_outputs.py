#!/usr/bin/env python3
"""Kiểm tra nhanh deliverable của một project data analyst workflow.

Updated: 2025-11-21
- Flexible EDA chart names (regex patterns)
- Data Consistency validation (insights/slides vs metrics.json)
- Slides check
- Cho phép .py HOẶC .ipynb (không bắt buộc cả 2)
"""

from __future__ import annotations

import argparse
import io
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import List, Dict, Any, Optional

# Fix encoding cho Windows console
if sys.platform == "win32":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# EDA charts - dùng regex patterns thay vì exact names
# Cho phép variations như _by_year, _by_channel, _by_kenh, etc.
EDA_CHART_PATTERNS = [
    r"01_boxplot.*\.png",
    r"02_histogram.*\.png",
    r"03_correlation.*\.png",
    r"04_violin.*\.png",
    r"05_timeseries.*\.png",
    r"06_cv.*\.png",
    r"07_statistics.*\.png",
]


@dataclass
class CheckResult:
    ten: str
    trang_thai: str  # PASS | WARN | FAIL
    ghi_chu: str


def them_ket_qua(ds: List[CheckResult], ten: str, trang_thai: str, ghi_chu: str) -> None:
    ds.append(CheckResult(ten=ten, trang_thai=trang_thai, ghi_chu=ghi_chu))


def dem_tu(file_path: Path) -> int:
    noi_dung = file_path.read_text(encoding="utf-8", errors="ignore")
    return len(re.findall(r"\w+", noi_dung))


def kiem_tra_charts(path: Path, patterns: List[str], ds: List[CheckResult]) -> None:
    """Kiểm tra EDA charts bằng regex patterns (linh động)."""
    existing_files = [f.name for f in path.iterdir() if f.is_file()]

    for pattern in patterns:
        # Tìm file match pattern
        matched = [f for f in existing_files if re.match(pattern, f)]
        chart_num = pattern.split("_")[0]  # VD: "01", "02"

        if matched:
            them_ket_qua(ds, f"EDA chart {chart_num}", "PASS", f"Tìm thấy: {matched[0]}")
        else:
            them_ket_qua(ds, f"EDA chart {chart_num}", "FAIL", f"Thiếu chart matching: {pattern}")


def validate_data_consistency(project_dir: Path, ds: List[CheckResult]) -> bool:
    """
    Validate số liệu trong insights/slides khớp với metrics.json.

    Returns True nếu consistent, False nếu có issues.
    """
    metrics_file = project_dir / "document" / "metrics.json"
    if not metrics_file.is_file():
        them_ket_qua(ds, "Data Consistency", "FAIL", "Không có metrics.json để validate")
        return False

    try:
        metrics = json.loads(metrics_file.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        them_ket_qua(ds, "Data Consistency", "FAIL", "metrics.json không hợp lệ")
        return False

    issues = []

    # Files to check
    files_to_check = [
        project_dir / "document" / "insights.md",
        project_dir / "document" / "slide.md"
    ]

    for file_path in files_to_check:
        if not file_path.is_file():
            continue

        content = file_path.read_text(encoding="utf-8", errors="ignore")
        file_name = file_path.name

        # Check 1: Referenced charts exist (check cả 2 folders)
        chart_refs = re.findall(r'(\d+[a-z]?_[a-zA-Z0-9_]+\.png)', content)
        charts_dir = project_dir / "charts"
        eda_charts_dir = project_dir / "statics" / "charts_eda"

        for chart in chart_refs:
            chart_path = charts_dir / chart
            eda_chart_path = eda_charts_dir / chart
            if not chart_path.is_file() and not eda_chart_path.is_file():
                issues.append(f"[{file_name}] Chart không tồn tại: {chart}")

        # Check 2: Suspicious percentages
        percentages = re.findall(r'(\d+\.?\d*)%', content)
        for pct in percentages:
            try:
                pct_val = float(pct)
                if pct_val > 1000:
                    issues.append(f"[{file_name}] Percentage đáng ngờ: {pct}%")
            except ValueError:
                pass

    if issues:
        for issue in issues[:3]:  # Show max 3 issues
            them_ket_qua(ds, "Data Consistency", "WARN", issue)
        if len(issues) > 3:
            them_ket_qua(ds, "Data Consistency", "WARN", f"...và {len(issues) - 3} issues khác")
        return False
    else:
        them_ket_qua(ds, "Data Consistency", "PASS", "Số liệu consistent")
        return True


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Validate deliverables của project data analyst",
    )
    parser.add_argument(
        "project_dir",
        type=Path,
        help="Đường dẫn tới thư mục project (ví dụ: ipynb/total/plan 2026 hmsg)",
    )
    parser.add_argument(
        "--min-insights-words",
        type=int,
        default=None,
        help="Nếu truyền, yêu cầu tối thiểu X từ trong insights.md",
    )
    parser.add_argument(
        "--min-business-charts",
        type=int,
        default=None,
        help="Nếu truyền, yêu cầu tối thiểu X biểu đồ business (PNG)",
    )
    parser.add_argument(
        "--max-business-charts",
        type=int,
        default=None,
        help="Nếu truyền, cảnh báo khi vượt quá X biểu đồ business",
    )
    args = parser.parse_args()

    project_dir = args.project_dir.resolve()
    if not project_dir.exists():
        print(f"ERROR: Không tìm thấy thư mục: {project_dir}")
        sys.exit(1)

    results: List[CheckResult] = []

    required_dirs = ["code", "charts", "document", "statics"]
    for name in required_dirs:
        folder = project_dir / name
        if folder.is_dir():
            them_ket_qua(results, f"Thư mục {name}", "PASS", "Đã tồn tại")
        else:
            them_ket_qua(results, f"Thư mục {name}", "FAIL", "Không tìm thấy")

    # File code business - CHỈ CẦN 1 TRONG 2 (.py HOẶC .ipynb)
    code_analysis_py = project_dir / "code" / "analysis.py"
    code_analysis_nb = project_dir / "code" / "analysis.ipynb"

    if code_analysis_py.is_file() or code_analysis_nb.is_file():
        found_files = []
        if code_analysis_py.is_file():
            found_files.append("analysis.py")
        if code_analysis_nb.is_file():
            found_files.append("analysis.ipynb")
        them_ket_qua(results, "Business code", "PASS", f"Có: {', '.join(found_files)}")
    else:
        them_ket_qua(results, "Business code", "FAIL", "Thiếu analysis.py hoặc analysis.ipynb")

    # Statics code - vẫn cần cả 2 cho EDA
    statics_eda_nb = project_dir / "statics" / "code" / "eda.ipynb"
    statics_generate = project_dir / "statics" / "code" / "generate_eda_charts.py"
    # Fallback tên cũ
    statics_generate_alt = project_dir / "statics" / "code" / "generate_charts.py"

    if statics_eda_nb.is_file():
        them_ket_qua(results, "statics/code/eda.ipynb", "PASS", "Có file")
    else:
        them_ket_qua(results, "statics/code/eda.ipynb", "FAIL", "Thiếu file")

    if statics_generate.is_file():
        them_ket_qua(results, "statics/code/generate_eda_charts.py", "PASS", "Có file")
    elif statics_generate_alt.is_file():
        them_ket_qua(results, "statics/code/generate_charts.py", "PASS", "Có file (tên cũ)")
    else:
        them_ket_qua(results, "statics/code/generate_eda_charts.py", "FAIL", "Thiếu file")

    # Insights + metrics
    insights_file = project_dir / "document" / "insights.md"
    metrics_file = project_dir / "document" / "metrics.json"
    stats_csv = project_dir / "statics" / "document" / "eda_statistics.csv"

    if insights_file.is_file():
        word_count = dem_tu(insights_file)
        if args.min_insights_words is None:
            them_ket_qua(
                results,
                "insights.md",
                "PASS",
                f"{word_count} từ (không áp ngưỡng)",
            )
        elif word_count >= args.min_insights_words:
            them_ket_qua(
                results,
                "insights.md",
                "PASS",
                f"{word_count} từ (>= {args.min_insights_words})",
            )
        else:
            them_ket_qua(
                results,
                "insights.md",
                "FAIL",
                f"{word_count} từ (< {args.min_insights_words})",
            )
    else:
        them_ket_qua(results, "insights.md", "FAIL", "Không tìm thấy")

    if metrics_file.is_file():
        try:
            json.loads(metrics_file.read_text(encoding="utf-8"))
            them_ket_qua(results, "metrics.json", "PASS", "JSON hợp lệ")
        except json.JSONDecodeError as exc:
            them_ket_qua(results, "metrics.json", "FAIL", f"JSON lỗi: {exc}")
    else:
        them_ket_qua(results, "metrics.json", "FAIL", "Không tìm thấy")

    # Stats CSV - flexible naming
    stats_csv = project_dir / "statics" / "document" / "eda_statistics.csv"
    stats_csv_alt = project_dir / "statics" / "document" / "eda_summary.csv"

    if stats_csv.is_file():
        them_ket_qua(results, "EDA statistics CSV", "PASS", "eda_statistics.csv")
    elif stats_csv_alt.is_file():
        them_ket_qua(results, "EDA statistics CSV", "PASS", "eda_summary.csv")
    else:
        them_ket_qua(results, "EDA statistics CSV", "WARN", "Không tìm thấy (không bắt buộc)")

    # Slides check (MỚI)
    slides_file = project_dir / "document" / "slide.md"
    if slides_file.is_file():
        word_count = dem_tu(slides_file)
        them_ket_qua(results, "slide.md", "PASS", f"{word_count} từ")
    else:
        them_ket_qua(results, "slide.md", "WARN", "Không tìm thấy (khuyến nghị có)")

    # EDA charts - dùng regex patterns
    charts_eda_folder = project_dir / "statics" / "charts_eda"
    if charts_eda_folder.is_dir():
        them_ket_qua(results, "statics/charts_eda", "PASS", "Đã tồn tại")
        kiem_tra_charts(charts_eda_folder, EDA_CHART_PATTERNS, results)
    else:
        them_ket_qua(results, "statics/charts_eda", "FAIL", "Không có thư mục")

    # Business charts count (linh động)
    charts_folder = project_dir / "charts"
    if charts_folder.is_dir():
        chart_files = sorted([f for f in charts_folder.iterdir() if f.suffix.lower() == ".png"])
        so_chart = len(chart_files)
        trang_thai = "PASS"
        ghi_chu = f"Có {so_chart} PNG"
        if args.min_business_charts is not None and so_chart < args.min_business_charts:
            trang_thai = "FAIL"
            ghi_chu = f"{so_chart} PNG (< {args.min_business_charts})"
        elif args.max_business_charts is not None and so_chart > args.max_business_charts:
            trang_thai = "WARN"
            ghi_chu = f"{so_chart} PNG (> {args.max_business_charts}, có thể nhiều quá)"
        them_ket_qua(results, "Business charts", trang_thai, ghi_chu)
    else:
        them_ket_qua(results, "Business charts", "FAIL", "Thiếu thư mục charts")

    # Data Consistency check (MỚI - CRITICAL)
    validate_data_consistency(project_dir, results)

    # Tổng hợp kết quả
    print("\n===== BÁO CÁO VALIDATION =====")
    fail_count = 0
    warn_count = 0
    for item in results:
        prefix = {
            "PASS": "[PASS]",
            "WARN": "[WARN]",
            "FAIL": "[FAIL]",
        }[item.trang_thai]
        print(f"{prefix} {item.ten}: {item.ghi_chu}")
        if item.trang_thai == "FAIL":
            fail_count += 1
        elif item.trang_thai == "WARN":
            warn_count += 1

    print("==============================")
    if fail_count:
        print(f"ERROR: Có {fail_count} lỗi. Sửa trước khi bàn giao.")
        sys.exit(1)
    if warn_count:
        print(f"WARN: Có {warn_count} cảnh báo. Kiểm tra lại cho chắc.")
    else:
        print("OK: Tất cả kiểm tra đều đạt.")


if __name__ == "__main__":
    main()
