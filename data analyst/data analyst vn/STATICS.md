# Hướng Dẫn Đọc Biểu Đồ Thống Kê & Chỉ Số

**Ngày tạo**: 2025-11-14
**Đối tượng**: Leadership, Analysts, Non-technical users

---

## 🎯 Mục Đích Document Này

Giúp mày hiểu **TỪNG BIỂU ĐỒ** trong `../charts/` - đọc như thế nào, nhìn vào đâu, và rút ra insight gì.

**Nguyên tắc**: Giải thích cho người **KHÔNG CHUYÊN TECHNICAL** cũng hiểu được.

---

## 📊 Danh Sách 7 Biểu Đồ

| # | Tên File | Mục Đích | Độ Khó |
|---|----------|----------|--------|
| 1 | `01_boxplots_outliers.png` | Phát hiện giá trị bất thường | ⭐⭐ |
| 2 | `02_histograms_distribution.png` | Xem phân bố doanh thu | ⭐⭐ |
| 3 | `03_correlation_heatmap.png` | Tìm mối liên hệ giữa kênh | ⭐⭐⭐ |
| 4 | `04_violin_plots.png` | Xem độ tập trung dữ liệu | ⭐⭐⭐ |
| 5 | `05_timeseries_confidence.png` | Xu hướng theo tháng | ⭐ |
| 6 | `06_cv_comparison.png` | Đo độ biến động | ⭐⭐ |
| 7 | `07_descriptive_stats_table.png` | Bảng tóm tắt số liệu | ⭐ |

---

# 📖 CHI TIẾT TỪNG BIỂU ĐỒ

---

## 1️⃣ Boxplots - Phát Hiện Giá Trị Bất Thường

**File**: `01_boxplots_outliers.png`

### Cái này cho mày biết gì?

**Mục đích**: Tìm những tháng có doanh thu "KHÁC THƯỜNG" so với trung bình - có thể cao đột biến hoặc thấp bất thường.

### Cách đọc Boxplot

```
        ×  ← Outlier (giá trị ngoại lệ)
        │
    ┌───┴───┐
    │   │   │  ← Hộp (Box): 50% dữ liệu nằm trong này
    │   ━   │  ← Vạch đỏ giữa: MEDIAN (giá trị giữa)
    └───┬───┘
        │
        ×  ← Outlier
```

**Các thành phần**:
- **Hộp xám** (Box): Chứa 50% dữ liệu ở giữa
- **Vạch đỏ** (Red line): MEDIAN - giá trị giữa (không phải mean!)
- **Râu** (Whiskers): Phạm vi bình thường
- **Chấm xanh** (Blue dots): OUTLIERS - giá trị bất thường

### Cách phân tích

#### ✅ Tình huống 1: Không có chấm xanh
```
Ý nghĩa: Doanh thu đều đặn, không có tháng bất thường
Action: Tốt! Dễ dự đoán, dễ lập kế hoạch
```

#### ⚠️ Tình huống 2: Có chấm xanh phía TRÊN
```
Ý nghĩa: Có tháng doanh thu CỰC CAO (cao hơn bình thường rất nhiều)
Ví dụ: REF tháng 1, CHC tháng 6-9
Action:
  - Check xem tháng nào? Tại sao?
  - Có phải mùa vụ không?
  - Chuẩn bị resources cho tháng đó
```

#### 🚨 Tình huống 3: Có chấm xanh phía DƯỚI
```
Ý nghĩa: Có tháng doanh thu CỰC THẤP (thấp bất thường)
Action:
  - Điều tra nguyên nhân: Vấn đề gì đã xảy ra?
  - Có thể fix không?
  - Nếu là mùa vụ → Chấp nhận và plan accordingly
```

### Ví dụ Thực tế

**Kênh CHC**:
```
Nếu thấy 3-4 chấm xanh phía TRÊN ở tháng 6, 7, 8, 9:
→ Đây là MÙA TUYỂN SINH
→ Hợp lý, không phải lỗi
→ Action: Reserve nhân sự & ngân sách cho Q2-Q3
```

**Kênh Digital**:
```
Nếu thấy chấm xanh rải rác cả trên lẫn dưới:
→ Biến động KHÔNG ỔN ĐỊNH
→ Chưa có pattern rõ ràng
→ Action: Cần tìm hiểu, standardize campaigns
```

### Key Takeaway

**Nhìn vào đâu**: Số lượng và vị trí chấm xanh
**Rút ra gì**:
- Nhiều outliers = Biến động cao = Khó dự đoán
- Outliers phía trên = Mùa vụ đỉnh
- Outliers phía dưới = Có vấn đề hoặc low season

---

## 2️⃣ Histograms - Phân Bố Doanh Thu

**File**: `02_histograms_distribution.png`

### Cái này cho mày biết gì?

**Mục đích**: Xem doanh thu **THƯỜNG RƠI VÀO KHOẢNG NÀO** - tập trung hay phân tán?

### Cách đọc Histogram

```
Tần suất
    │     █
    │     █
    │  █  █  █
    │  █  █  █  █
    └──────────────── Doanh thu
     Thấp → Cao
```

**Trục X (ngang)**: Khoảng doanh thu (chia thành 8 bins)
**Trục Y (dọc)**: Số tháng rơi vào khoảng đó

**Các đường**:
- **Đỏ đứt nét**: MEAN (trung bình)
- **Xanh đứt nét**: MEDIAN (giá trị giữa)

### Các Pattern Phổ Biến

#### Pattern 1: Hình Chuông (Normal Distribution)
```
      █
    █ █ █
  █ █ █ █ █
────────────────
```
**Ý nghĩa**: Dữ liệu CÂN ĐỐI, đa số tháng gần trung bình
**Ví dụ**: PACKAGE, PHI
**Action**: Dùng MEAN để forecast, tin cậy cao

#### Pattern 2: Lệch Phải (Right Skewed)
```
█
█ █
█ █ █
█ █ █ █   █
────────────────
```
**Ý nghĩa**: Đa số tháng THẤP, có vài tháng CỰC CAO kéo lên
**Ví dụ**: REF (tháng 1 đỉnh), CHC (tháng 6-9 đỉnh)
**Action**:
- Dùng MEDIAN thay MEAN (vì mean bị kéo lên)
- Chuẩn bị cho tháng đỉnh

#### Pattern 3: Lệch Trái (Left Skewed)
```
        █
      █ █
    █ █ █
  █   █ █ █ █
────────────────
```
**Ý nghĩa**: Đa số tháng CAO, có vài tháng CỰC THẤP
**Ví dụ**: Hiếm thấy trong business (thường là lỗi data)
**Action**: Điều tra tháng thấp bất thường

#### Pattern 4: Phân Tán (Flat Distribution)
```
█     █
█ █   █ █
█ █ █ █ █ █
────────────────
```
**Ý nghĩa**: Doanh thu RẢI ĐỀU, không có pattern rõ
**Ví dụ**: Digital (đang thử nghiệm)
**Action**: Khó forecast, cần tìm pattern

### So Sánh Mean vs Median

**Quan trọng**: Nhìn khoảng cách giữa vạch đỏ và vạch xanh!

#### Trường hợp 1: Mean ≈ Median (gần nhau)
```
    |  |
    ↓  ↓
  █ █ █ █
```
**Ý nghĩa**: Phân phối CÂN ĐỐI
**Action**: Dùng mean để forecast OK

#### Trường hợp 2: Mean > Median (mean cao hơn)
```
       |
       ↓ mean
  |
  ↓ median
█ █ █   █
```
**Ý nghĩa**: Bị kéo lên bởi outliers cao
**Action**:
- Dùng MEDIAN để forecast (an toàn hơn)
- Mean sẽ overestimate

#### Trường hợp 3: Mean < Median (mean thấp hơn)
```
  |
  ↓ mean
      |
      ↓ median
  █   █ █ █
```
**Ý nghĩa**: Bị kéo xuống bởi outliers thấp
**Action**: Điều tra outliers thấp

### Ví dụ Thực tế

**REF 2025**:
```
Giả sử:
- Mean = 15 tỷ (vạch đỏ)
- Median = 10 tỷ (vạch xanh)
- Histogram lệch phải

Giải thích:
→ Đa số tháng ~10 tỷ
→ Tháng 1 = 50 tỷ (kéo mean lên)
→ Dùng forecast 15 tỷ/tháng = SAI (quá cao)
→ Nên dùng median 10 tỷ + riêng tháng 1 = 50 tỷ
```

### Key Takeaway

**Nhìn vào đâu**: Hình dạng histogram + khoảng cách mean/median
**Rút ra gì**:
- Hình chuông = Ổn định, dùng mean OK
- Lệch phải = Có tháng đỉnh, dùng median
- Phân tán = Biến động cao, khó forecast

---

## 3️⃣ Correlation Heatmap - Ma Trận Tương Quan

**File**: `03_correlation_heatmap.png`

### Cái này cho mày biết gì?

**Mục đích**: Tìm ra **KÊNH NÀO LIÊN QUAN VỚI NHAU** - kênh này tăng thì kênh kia cũng tăng?

### Cách đọc Heatmap

**Màu sắc**:
- **Đen đậm**: Correlation = 1.0 (tương quan hoàn hảo)
- **Xám**: Correlation gần 0 (không liên quan)
- **Trắng**: Correlation âm (nghịch biến)

**Số trong ô**: Hệ số tương quan (r)
- **r = 1.0**: Hoàn toàn cùng chiều (kênh A lên → kênh B lên)
- **r = 0.0**: Không liên quan
- **r = -1.0**: Hoàn toàn ngược chiều (kênh A lên → kênh B xuống)

### Ngưỡng Đánh Giá

| Hệ số r | Màu | Ý Nghĩa | Action |
|---------|-----|---------|--------|
| 0.9 - 1.0 | Đen đậm | Tương quan RẤT CAO | Có thể cùng team/customer |
| 0.7 - 0.9 | Xám đậm | Tương quan CAO | Xem xét cross-sell |
| 0.4 - 0.7 | Xám trung | Tương quan VỪA | Có liên quan nhưng không mạnh |
| 0.0 - 0.4 | Xám nhạt | Tương quan THẤP | Hoạt động độc lập |
| < 0.0 | Trắng | Tương quan ÂM | Cannibalization? |

### Các Pattern Quan Trọng

#### Pattern 1: Tương Quan Cao (r > 0.7)
```
        PACKAGE  CHC
PACKAGE  1.00    0.82  ← Xám đậm
CHC      0.82    1.00
```

**Ý nghĩa**: PACKAGE tăng → CHC cũng tăng (hoặc ngược lại)

**Giải thích có thể**:
- Cùng team sales
- Cùng customer base (bệnh viện mua cả package lẫn CHC)
- Cùng chịu ảnh hưởng seasonality

**Action**:
- ✅ **Cross-sell**: Bán PACKAGE → suggest CHC
- ✅ **Bundle deal**: Gói combo PACKAGE + CHC
- ✅ **Shared resources**: Dùng chung sales team

#### Pattern 2: Tương Quan Thấp (r < 0.3)
```
        REF    Digital
REF     1.00   0.15   ← Xám nhạt
Digital 0.15   1.00
```

**Ý nghĩa**: REF và Digital HOẠT ĐỘNG ĐỘC LẬP

**Giải thích có thể**:
- Khác customer segment
- Khác kênh phân phối
- Khác pricing model

**Action**:
- ✅ **Diversification**: Tốt! Không phụ thuộc lẫn nhau
- ✅ **Separate strategy**: Mỗi kênh cần chiến lược riêng
- ❌ **Cross-sell**: Không hiệu quả

#### Pattern 3: Tương Quan Âm (r < 0)
```
        PACKAGE  REF
PACKAGE  1.00   -0.35  ← Trắng/xám nhạt
REF     -0.35    1.00
```

**Ý nghĩa**: PACKAGE tăng → REF giảm (và ngược lại)

**Giải thích có thể**:
- **Cannibalization**: Customer chọn PACKAGE thay vì REF
- **Budget constraint**: Ngân sách chuyển từ kênh này sang kênh khác

**Action**:
- 🚨 **Điều tra ngay**: Tại sao ăn thịt lẫn nhau?
- 🚨 **Reposition**: Tách biệt value proposition
- 🚨 **Target khác nhau**: Tránh cạnh tranh nội bộ

### Cách Phân Tích Từng Kênh

#### Bước 1: Nhìn hàng của kênh đó
Ví dụ xem PACKAGE:
```
        PACKAGE  CHC   REF   PHI   Digital
PACKAGE  1.00    0.82  0.15  0.45  0.20
```

**Đọc**:
- PACKAGE ↔ CHC: 0.82 (cao) → Liên quan mạnh
- PACKAGE ↔ REF: 0.15 (thấp) → Độc lập
- PACKAGE ↔ PHI: 0.45 (trung bình) → Có liên quan nhẹ

#### Bước 2: Sắp xếp từ cao → thấp
```
1. CHC (0.82) - Liên quan mạnh nhất
2. PHI (0.45) - Liên quan trung bình
3. Digital (0.20) - Gần như độc lập
4. REF (0.15) - Hoàn toàn độc lập
```

#### Bước 3: Rút insight & action
- **Với CHC**: Cross-sell, bundle
- **Với PHI**: Có thể thử cross-sell nhẹ
- **Với Digital/REF**: Chiến lược riêng

### Ví dụ Thực tế

**Case Study: PACKAGE ↔ CHC = 0.85**

```
Tháng  PACKAGE  CHC   Note
1      10       8     Cả 2 thấp (off-season)
6      25       22    Cả 2 cao (peak season)
9      28       24    Cả 2 tiếp tục cao
12     15       12    Cả 2 xuống (end of year)

→ Chứng minh: Move together (r=0.85)
```

**Action Plan**:
1. **Cross-sell program**:
   - Khách mua PACKAGE → offer discount CHC
   - Target: Tăng conversion 15%

2. **Bundle pricing**:
   - PACKAGE + CHC combo giảm 10%
   - Expected: Tăng revenue 20%

3. **Shared campaign**:
   - Chung budget marketing
   - Focus vào cùng customer base

### Key Takeaway

**Nhìn vào đâu**: Ô màu xám đậm (r > 0.7) và ô trắng (r < 0)
**Rút ra gì**:
- Xám đậm = Cross-sell opportunity
- Xám nhạt = Diversification tốt
- Trắng = Cannibalization risk

---

## 4️⃣ Violin Plots - Phân Bố Chi Tiết

**File**: `04_violin_plots.png`

### Cái này cho mày biết gì?

**Mục đích**: Kết hợp **Boxplot + Histogram** - vừa thấy outliers, vừa thấy phân phối.

### Cách đọc Violin Plot

```
      ═══  ← Phần rộng: Nhiều tháng có doanh thu này
     ═════
    ═══════
     ═════  ← Phần hẹp: Ít tháng có doanh thu này
      ═══
      ━━━  ← Vạch giữa: Median
```

**Hình dạng "cái bình"** (violin):
- **Phần PHỒng**: Nhiều data points (nhiều tháng rơi vào khoảng này)
- **Phần Hẹp**: Ít data points
- **Vạch ngang giữa**: Median
- **Hộp nhỏ bên trong**: Quartiles (Q1, Q3)

### So Sánh với Boxplot

| Feature | Boxplot | Violin Plot |
|---------|---------|-------------|
| Median | ✅ Có | ✅ Có |
| Outliers | ✅ Rõ ràng | ⚠️ Khó nhìn hơn |
| Distribution shape | ❌ Không thấy | ✅ Thấy rõ |
| Density | ❌ Không có | ✅ Có (độ rộng) |

**Khi nào dùng Violin**:
- Muốn thấy chi tiết distribution
- Muốn so sánh shape giữa các kênh
- Presentation cho technical audience

**Khi nào dùng Boxplot**:
- Chỉ cần thấy outliers
- Presentation cho non-technical

### Các Shape Patterns

#### Shape 1: Chuông Cân Đối
```
      ═══
     ═════
    ═══════
     ═════
      ═══
```
**Ý nghĩa**: Distribution cân đối, ổn định
**Ví dụ**: PACKAGE, PHI
**Action**: Dễ forecast, tin cậy

#### Shape 2: Top-Heavy (Phình Trên)
```
    ═══════
     ═════
      ═══
       ═
```
**Ý nghĩa**: Đa số tháng cao, vài tháng thấp
**Action**: Điều tra tháng thấp

#### Shape 3: Bottom-Heavy (Phình Dưới)
```
       ═
      ═══
     ═════
    ═══════
```
**Ý nghĩa**: Đa số tháng thấp, vài tháng cao (giống lệch phải)
**Ví dụ**: REF, CHC (có mùa vụ)
**Action**: Chuẩn bị cho tháng đỉnh

#### Shape 4: Hai Đỉnh (Bimodal)
```
    ═══ ═══
     ═   ═
      ═ ═
```
**Ý nghĩa**: Có 2 nhóm tháng khác nhau (peak season vs off-season)
**Ví dụ**: CHC (mùa tuyển sinh vs bình thường)
**Action**: Phân chia forecast theo mùa

### Ví dụ Thực tế

**CHC Violin Plot**:
```
Hình dạng:
    ═══     ← Tháng 6-9: 20-25 tỷ (phình to)
     ═
     ═
    ═══     ← Tháng 1-5, 10-12: 8-12 tỷ (phình to)

Giải thích:
→ 2 đỉnh rõ rệt (bimodal)
→ Peak: Tháng 6-9 (tuyển sinh)
→ Off-peak: Các tháng khác
```

**Action**:
- Forecast riêng 2 seasons
- Peak season: 22 tỷ/tháng
- Off-peak: 10 tỷ/tháng

### Key Takeaway

**Nhìn vào đâu**: Hình dạng "cái bình"
**Rút ra gì**:
- Hình chuông = Ổn định
- Phình dưới = Có mùa vụ đỉnh
- 2 đỉnh = 2 seasons khác nhau

---

## 5️⃣ Time Series with Confidence Bands

**File**: `05_timeseries_confidence.png`

### Cái này cho mày biết gì?

**Mục đích**: Xem **XU HƯỚNG THEO THÁNG** - tháng nào cao, tháng nào thấp, pattern ra sao?

### Cách đọc Chart

**Các thành phần**:
- **Đường xám (●)**: Doanh thu 2025 (tháng 1-12)
- **Đường đen (■)**: Doanh thu 2026 (plan)
- **Vạch đứt xám**: Mean 2025
- **Vạch đứt đen**: Mean 2026
- **Vùng xám nhạt**: Confidence band (Mean ± 1 Std)

### Confidence Band Là Gì?

**Định nghĩa**: Vùng "AN TOÀN" mà doanh thu THƯỜNG rơi vào (Mean ± Std)

```
      ╔═══════════╗  ← Upper bound (Mean + Std)
      ║           ║
━━━━━━║━━━━━━━━━━━║━━  ← Mean
      ║           ║
      ╚═══════════╝  ← Lower bound (Mean - Std)
```

**Giải thích**:
- **68%** tháng sẽ rơi trong vùng này
- Nếu tháng nào **RA NGOÀI** → Bất thường (tốt hoặc xấu)

### Pattern Phổ Biến

#### Pattern 1: Flat (Phẳng)
```
Doanh thu
    ━━━━━━━━━━━━
────────────────────
  1 2 3 4 5 6...12
```
**Ý nghĩa**: Không có seasonality, ổn định
**Ví dụ**: PHI, PACKAGE
**Action**: Forecast đơn giản, dùng mean

#### Pattern 2: Spike (Đột biến)
```
Doanh thu
            ╱╲
━━━━━━━━━━╱  ╲━━━━
────────────────────
  1 2 3 4 5 6...12
```
**Ý nghĩa**: Có tháng đỉnh rõ rệt
**Ví dụ**: REF tháng 1, CHC tháng 6-9
**Action**:
- Reserve resources cho tháng đỉnh
- Push campaigns trước tháng đó

#### Pattern 3: Trend Up (Tăng dần)
```
Doanh thu
                  ╱
              ╱
          ╱
      ╱
────────────────────
  1 2 3 4 5 6...12
```
**Ý nghĩa**: Tăng trưởng đều qua các tháng
**Action**: Tốt! Maintain momentum

#### Pattern 4: Trend Down (Giảm dần)
```
Doanh thu
  ╲
    ╲
      ╲
        ╲
────────────────────
  1 2 3 4 5 6...12
```
**Ý nghĩa**: Suy giảm
**Action**: 🚨 Điều tra ngay, find root cause

### Cách Phân Tích

#### Step 1: Identify Pattern
Nhìn tổng thể → Thuộc loại nào trong 4 patterns trên?

#### Step 2: Compare 2025 vs 2026
```
Nếu đường đen (2026) luôn Ở TRÊN đường xám (2025):
→ ✅ Tăng trưởng tốt, keep going

Nếu đường đen THẤP HƠN:
→ 🚨 Plan quá thấp hoặc có vấn đề
```

#### Step 3: Check Confidence Band
```
Nếu có tháng RA NGOÀI confidence band:
→ Đánh dấu tháng đó
→ Tìm hiểu tại sao (campaign? mùa vụ? event?)
→ Note lại để năm sau không bất ngờ
```

#### Step 4: Find Lead Time
```
Ví dụ REF đỉnh tháng 1:
→ Lead time = 2-3 tháng
→ Cần push campaigns từ tháng 10-11 năm trước
→ Reserve budget từ Q4
```

### Ví dụ Thực tế

**REF Time Series**:
```
Tháng  2025  2026  Note
1      45    50    ⭐ ĐỈNH - Ra ngoài confidence band
2      12    15    Giảm mạnh sau đỉnh
3      10    12    Tiếp tục thấp
...
6      8     10    Thấp điểm
...
11     15    18    Bắt đầu tăng (prep cho tháng 1)
12     20    25    Tăng mạnh (campaigns)
```

**Insights**:
- Pattern: SPIKE tháng 1
- Lead time: 2-3 tháng (bắt đầu push từ tháng 11-12)
- Confidence band: 8-20 tỷ, tháng 1 = 45 tỷ → RA NGOÀI

**Action Plan**:
1. **Q4 năm trước** (Oct-Dec):
   - Bắt đầu campaigns
   - Reserve budget 50 tỷ
   - Tuyển temp staff

2. **Tháng 1**:
   - All hands on deck
   - Maximize conversion

3. **Tháng 2-5**:
   - Chấp nhận low season
   - Focus maintain relationship

### Key Takeaway

**Nhìn vào đâu**: Đường đen so với đường xám + vùng confidence
**Rút ra gì**:
- Tháng nào đỉnh → Reserve resources
- Trend up/down → Adjust strategy
- Tháng ra ngoài confidence → Điều tra

---

## 6️⃣ CV Comparison - Hệ Số Biến Động

**File**: `06_cv_comparison.png`

### Cái này cho mày biết gì?

**Mục đích**: Đo lường **ĐỘ BIẾN ĐỘNG** của từng kênh - kênh nào ỔN ĐỊNH, kênh nào RISK CAO.

### CV (Coefficient of Variation) Là Gì?

**Công thức**:
```
CV = (Std / Mean) × 100
```

**Giải thích cho người không technical**:
```
Std (Standard Deviation) = Độ lệch chuẩn
    → Đo "độ xa" của các tháng so với trung bình
    → Std cao = Các tháng chênh lệch nhiều

Mean = Trung bình cộng
    → Doanh thu trung bình/tháng

CV = Std / Mean × 100
    → Độ biến động TƯƠNG ĐỐI (%)
    → CV cao = Khó dự đoán
```

**Tại sao dùng CV thay vì Std?**

Ví dụ:
```
Kênh A: Mean = 100, Std = 20 → CV = 20%
Kênh B: Mean = 10, Std = 5   → CV = 50%

Std của A (20) > B (5), nhưng...
CV của B (50%) > A (20%)

→ Kênh B biến động NHIỀU HƠN so với quy mô của nó
→ CV chuẩn hóa, so sánh được các kênh khác size
```

### Ngưỡng Đánh Giá

| CV | Màu | Đánh Giá | Ý Nghĩa Business | Action |
|----|-----|----------|------------------|--------|
| < 20% | Xanh | ✅ ỔN ĐỊNH | Dễ forecast, tin cậy | Maintain, optimize cost |
| 20-35% | Vàng | ⚠️ TRUNG BÌNH | Có biến động nhẹ | Monitor monthly |
| 35-50% | Cam | ⚠️ CAO | Biến động đáng kể | Buffer 15-20% |
| > 50% | Đỏ | 🚨 RẤT CAO | Khó dự đoán, risk cao | Buffer 30%+, investigate |

**Vạch đứt xanh**: Threshold 20% (ổn định)
**Vạch đứt đỏ**: Threshold 50% (biến động cao)

### Cách Đọc Chart

**Các thanh**:
- **Thanh trái** (xám nhạt): CV 2025
- **Thanh phải** (xám đậm): CV 2026

**Số trên thanh**: Giá trị CV (%)

### Case Studies

#### Case 1: PHI (CV = 15%)
```
CV = 15% (dưới vạch xanh)
→ ✅ Kênh ỔN ĐỊNH NHẤT

Ví dụ dữ liệu:
Tháng  Doanh thu
1      95
2      100
3      105
...
Mean   100
Std    15
CV     15%

Insight:
→ Các tháng gần nhau (95-105)
→ Dễ forecast
→ Risk thấp
```

**Action**:
- ✅ Tin cậy vào forecast
- ✅ Có thể commit revenue với leadership
- ✅ Xem xét optimize cost (vì stable)
- ❌ Không cần buffer lớn

#### Case 2: PACKAGE (CV = 25%)
```
CV = 25% (giữa 2 vạch)
→ ⚠️ Biến động TRUNG BÌNH

Ví dụ:
Mean   100
Std    25
CV     25%

Doanh thu có thể dao động: 75 - 125

Insight:
→ Có biến động nhưng chấp nhận được
→ Cần monitor
```

**Action**:
- ⚠️ Monitor hàng tháng
- ⚠️ Buffer 10-15%
- ✅ Forecast OK nhưng adjust quarterly

#### Case 3: REF (CV = 60%)
```
CV = 60% (vượt vạch đỏ)
→ 🚨 BIẾN ĐỘNG RẤT CAO

Ví dụ:
Mean   20
Std    12
CV     60%

Tháng 1: 45 tỷ  ← +125% so với mean!
Tháng 6: 8 tỷ   ← -60% so với mean!

Insight:
→ Chênh lệch CỰC LỚN giữa các tháng
→ Khó dự đoán
→ Risk cao nếu dựa vào mean
```

**Action**:
- 🚨 KHÔNG dùng mean để forecast
- 🚨 Phải forecast riêng từng tháng
- 🚨 Buffer 30-50%
- 🚨 Chuẩn bị plan B cho tháng thấp
- ✅ Focus vào tháng đỉnh (maximize ROI)

### So Sánh 2025 vs 2026

**Nếu CV 2026 < CV 2025**:
```
→ ✅ TỐT! Đang ổn định hơn
→ Strategy đang work
→ Keep doing what we're doing
```

**Nếu CV 2026 > CV 2025**:
```
→ 🚨 XẤU! Biến động tăng
→ Investigate nguyên nhân:
   - Thị trường thay đổi?
   - Strategy không consistent?
   - Competitor impact?
```

**Nếu CV 2026 ≈ CV 2025**:
```
→ ⚠️ Không cải thiện
→ Nếu CV cao: Cần action để stabilize
→ Nếu CV thấp: OK, maintain
```

### Kết Hợp với Các Chỉ Số Khác

#### CV Cao + Mean Cao = HIGH RISK, HIGH REWARD
```
Ví dụ: REF
- Mean = 20 tỷ/tháng (cao)
- CV = 60% (rất cao)

Insight:
→ Potential lớn NHƯNG không ổn định
→ Cần quản lý risk tốt
```

**Strategy**:
- Maximize tháng đỉnh (tháng 1)
- Accept low months
- Diversify sang kênh khác

#### CV Thấp + Mean Thấp = LOW RISK, LOW REWARD
```
Ví dụ: Digital (giả sử)
- Mean = 5 tỷ/tháng (thấp)
- CV = 18% (thấp)

Insight:
→ Ổn định NHƯNG nhỏ
→ Có thể scale up
```

**Strategy**:
- Invest để tăng mean
- Maintain CV thấp (đừng sacrifice stability)

### Key Takeaway

**Nhìn vào đâu**: Thanh nào vượt vạch đỏ (50%)
**Rút ra gì**:
- < 20% = Tin cậy, forecast với confidence
- 20-50% = Monitor, có buffer nhẹ
- > 50% = Risk cao, cần plan chi tiết

---

## 7️⃣ Descriptive Stats Table - Bảng Tóm Tắt

**File**: `07_descriptive_stats_table.png`

### Cái này cho mày biết gì?

**Mục đích**: Tóm tắt TẤT CẢ chỉ số quan trọng trong 1 bảng - dùng cho **PRESENTATIONS**.

### Cách Đọc Bảng

**Các cột**:

| Cột | Ý Nghĩa | Cách Dùng |
|-----|---------|-----------|
| **Kênh** | Tên kênh | - |
| **Mean** | Trung bình cộng | Dùng để forecast (nếu CV thấp) |
| **Std** | Độ lệch chuẩn | Đo độ phân tán |
| **Min** | Giá trị nhỏ nhất | Worst case scenario |
| **25%** | Quartile 1 | 25% tháng dưới mức này |
| **50%** | Median (giữa) | Dùng để forecast (nếu CV cao) |
| **75%** | Quartile 3 | 75% tháng dưới mức này |
| **Max** | Giá trị lớn nhất | Best case scenario |
| **CV (%)** | Hệ số biến động | Đo độ tin cậy |

### Quartiles (25%, 50%, 75%) Là Gì?

**Giải thích đơn giản**:

Sắp xếp 12 tháng từ THẤP → CAO:
```
Tháng:  1   2   3  | 4   5   6  | 7   8   9  | 10  11  12
Giá:    5   7   9  | 11  12  14 | 16  18  20 | 22  25  30
        ↑          ↑            ↑            ↑
       Min        25%          50%          75%         Max
                  (Q1)       (Median)      (Q3)
```

**Ý nghĩa**:
- **25% (Q1)**: 25% tháng ≤ giá trị này → LOW months
- **50% (Median)**: Giá trị GIỮA → Typical month
- **75% (Q3)**: 75% tháng ≤ giá trị này → Chỉ 25% tháng cao hơn

### Cách Sử Dụng Từng Chỉ Số

#### Mean (Trung Bình)
**Khi nào dùng**:
- ✅ CV < 20% (ổn định)
- ✅ Distribution cân đối (không lệch)
- ✅ Không có outliers mạnh

**Ví dụ**:
```
PHI: Mean = 10 tỷ, CV = 15%
→ Forecast: 10 tỷ/tháng × 12 = 120 tỷ/năm
→ Confidence: Cao (CV thấp)
```

#### Median (50%)
**Khi nào dùng**:
- ✅ CV > 35% (biến động cao)
- ✅ Distribution lệch (skewed)
- ✅ Có outliers

**Ví dụ**:
```
REF: Mean = 15 tỷ, Median = 10 tỷ, CV = 60%
→ Forecast: Dùng MEDIAN (10 tỷ) cho most months
→ Riêng tháng đỉnh (tháng 1): 45 tỷ
→ Total: 10×11 + 45 = 155 tỷ/năm
```

#### Std (Standard Deviation)
**Dùng để**:
- Tính confidence interval: Mean ± Std
- Đánh giá risk
- So với mean để tính CV

**Ví dụ**:
```
PACKAGE: Mean = 12, Std = 3
→ 68% tháng sẽ rơi trong: 9-15 tỷ
→ 95% tháng sẽ rơi trong: 6-18 tỷ
```

#### Min & Max
**Dùng để**:
- **Min**: Worst case planning
- **Max**: Best case / stretch goal

**Ví dụ**:
```
CHC: Min = 8, Max = 25, Mean = 14
→ Worst case budget: 8 tỷ/tháng
→ Best case: 25 tỷ/tháng
→ Realistic: 14 tỷ/tháng
```

#### Q1 (25%) & Q3 (75%)
**Dùng để**:
- Xác định IQR (Interquartile Range) = Q3 - Q1
- Phát hiện outliers
- Conservative forecast (Q1) vs Optimistic (Q3)

**Ví dụ**:
```
PACKAGE: Q1 = 10, Q3 = 15
→ IQR = 5
→ 50% tháng nằm trong 10-15 tỷ
→ Conservative forecast: 10 tỷ (safe)
→ Optimistic forecast: 15 tỷ (stretch)
```

### Cách Đọc 1 Row (Ví dụ REF)

```
Kênh  Mean  Std  Min  25%  50%  75%  Max  CV(%)
REF   15.0  9.0  6.0  8.0  10.0 18.0 45.0 60.0
```

**Phân tích**:

1. **Mean = 15 tỷ**
   - Trung bình/tháng
   - ⚠️ Nhưng CV = 60% → Không tin cậy lắm

2. **Std = 9 tỷ**
   - Biến động lớn (gần bằng mean!)
   - Range: 15 ± 9 = 6-24 tỷ

3. **Min = 6, Max = 45**
   - Chênh lệch CỰC LỚN (6 → 45 = 7.5x!)
   - Chứng minh có mùa vụ mạnh

4. **Median = 10 tỷ**
   - Khác mean (15) nhiều
   - → Distribution lệch phải
   - → Nên dùng median thay mean

5. **Q1 = 8, Q3 = 18**
   - 50% tháng: 8-18 tỷ
   - 25% tháng < 8 (low season)
   - 25% tháng > 18 (high season)

6. **CV = 60%**
   - 🚨 Rất cao!
   - Khó dự đoán
   - Cần forecast riêng từng tháng

**Kết luận**: REF có pattern mùa vụ rất rõ, KHÔNG thể dùng mean để forecast tổng quát.

### Cách So Sánh Giữa Các Kênh

**Bước 1**: Sort theo CV (thấp → cao)
```
PHI     (15%)  ← Ổn định nhất
PACKAGE (25%)
CHC     (40%)
Digital (45%)
REF     (60%)  ← Biến động nhất
```

**Bước 2**: Identify pattern
```
PHI & PACKAGE: Low CV → Reliable
CHC & Digital: Medium CV → Monitor
REF: High CV → Need special attention
```

**Bước 3**: Match strategy
```
Low CV → Standard forecast (mean)
Medium CV → Monthly monitoring
High CV → Custom forecast per month
```

### Key Takeaway

**Nhìn vào đâu**: Cột CV (%) + So sánh Mean vs Median
**Rút ra gì**:
- Mean ≈ Median + Low CV = Dùng mean forecast
- Mean ≠ Median + High CV = Dùng median + riêng outliers
- Min/Max cho range planning

---

# 🎓 TỔNG KẾT - Framework Đọc Tất Cả Biểu Đồ

## Workflow Phân Tích Hoàn Chỉnh

### Step 1: Overview (5 phút)
```
1. Xem Chart 7 (Descriptive Stats Table)
   → Identify kênh nào CV cao, kênh nào thấp

2. Xem Chart 6 (CV Comparison)
   → Confirm lại + so sánh 2025 vs 2026

3. Preliminary conclusion:
   - Kênh A, B: Ổn định
   - Kênh C, D: Cần chú ý
```

### Step 2: Deep Dive vào Kênh Risk Cao (10 phút)
```
Với mỗi kênh CV > 50%:

1. Chart 1 (Boxplot): Tháng nào có outliers?
2. Chart 2 (Histogram): Phân phối lệch kiểu gì?
3. Chart 5 (Time Series): Pattern cụ thể ra sao?
4. Chart 4 (Violin): Double-check distribution

→ Rút insight: Seasonality? Campaigns? Structural issue?
```

### Step 3: Relationship Analysis (5 phút)
```
1. Chart 3 (Correlation Heatmap):
   - Kênh nào correlation cao? → Cross-sell
   - Kênh nào independent? → Separate strategy
   - Kênh nào negative? → Cannibalization risk
```

### Step 4: Action Plan (10 phút)
```
Cho mỗi kênh:

Low CV (<20%):
- Strategy: Standard forecast, optimize cost
- Buffer: 5-10%
- Monitoring: Quarterly

Medium CV (20-50%):
- Strategy: Monthly monitoring
- Buffer: 15-20%
- Monitoring: Monthly

High CV (>50%):
- Strategy: Custom forecast per month
- Buffer: 30%+
- Monitoring: Weekly tháng đỉnh
- Action: Investigate root cause
```

## Checklist Khi Present

### Cho Leadership (Non-technical)
✅ Dùng Chart 7 (Table) - Overview
✅ Dùng Chart 6 (CV) - Risk assessment
✅ Dùng Chart 5 (Time Series) - Trends
✅ Highlight: Kênh nào ổn định, kênh nào risk
❌ Tránh Chart 3, 4 (quá technical)

### Cho Analysts (Technical)
✅ Dùng tất cả 7 charts
✅ Deep dive vào correlation, distribution
✅ Discuss methodology
✅ Share CSV files để họ tự analyze

### Cho Sales/Operations
✅ Chart 5 (Time Series) - Seasonality
✅ Chart 1 (Boxplot) - Outlier months
✅ Focus: Tháng nào cần chuẩn bị resources
❌ Skip statistics phức tạp

---

## 🚨 Red Flags Cần Chú Ý

### 1. CV Tăng Đột Ngột
```
2025: CV = 25%
2026: CV = 55%

→ 🚨 Có vấn đề! Investigate ngay:
   - Strategy thay đổi?
   - Market volatility?
   - Data quality issue?
```

### 2. Correlation Âm Bất Ngờ
```
Trước: PACKAGE ↔ CHC = +0.8
Sau: PACKAGE ↔ CHC = -0.3

→ 🚨 Cannibalization! Tại sao?
   - Pricing conflict?
   - Sales team incentive issue?
```

### 3. Outliers Không Giải Thích Được
```
Tháng 8: REF = 60 tỷ (không phải mùa vụ)

→ 🚨 Investigate:
   - One-time deal?
   - Data error?
   - New product launch?
```

### 4. Distribution Thay Đổi Hình Dạng
```
2025: Normal distribution (chuông)
2026: Bimodal (2 đỉnh)

→ 🚨 Structure change:
   - New customer segment?
   - Market split?
```

---

## 💡 Pro Tips

### Tip 1: Luôn Cross-check
```
Nếu Chart A nói X, check lại với Chart B, C
Ví dụ:
- Boxplot thấy outlier tháng 6
- → Check Time Series: Có phải mùa vụ?
- → Check Histogram: Distribution shape confirm?
```

### Tip 2: Context is King
```
CV = 60% không phải lúc nào cũng XẤU
Nếu là kênh seasonality rõ (REF, CHC):
→ Chấp nhận được, có thể manage
Nếu là kênh should be stable (PHI):
→ Có vấn đề nghiêm trọng
```

### Tip 3: Storytelling
```
Khi present, đừng chỉ show numbers:

❌ "REF có CV = 60%"
✅ "REF biến động rất lớn vì tháng 1 là đỉnh.
    Chúng ta cần reserve 50 tỷ cho tháng 1,
    và chấp nhận 6-10 tỷ các tháng khác."
```

### Tip 4: Action-Oriented
```
Mỗi insight phải có action:

Insight: "CHC có 2 seasons rõ rệt"
Action:
  1. Tuyển temp staff Q2
  2. Reserve budget 900M cho Q2-Q3
  3. Marketing campaigns bắt đầu tháng 4
```

---

## 📚 Glossary - Thuật Ngữ Giải Thích

| Thuật Ngữ | Tiếng Việt | Giải Thích Đơn Giản |
|-----------|------------|---------------------|
| **Mean** | Trung bình | Cộng tất cả chia cho 12 |
| **Median** | Giá trị giữa | Sắp xếp 12 tháng, lấy tháng thứ 6-7 |
| **Std** | Độ lệch chuẩn | Đo "độ xa" so với mean |
| **CV** | Hệ số biến động | Std/Mean × 100 - đo biến động % |
| **Outlier** | Giá trị ngoại lệ | Tháng khác thường, xa mean |
| **Quartile** | Tứ phân vị | Chia data thành 4 phần |
| **IQR** | Khoảng tứ phân vị | Q3 - Q1 |
| **Correlation** | Tương quan | Mức độ liên quan giữa 2 kênh |
| **Skewness** | Độ lệch | Phân phối lệch trái/phải |
| **Distribution** | Phân phối | Dữ liệu rải ra như thế nào |
| **Seasonality** | Tính mùa vụ | Tháng nào cao, tháng nào thấp |
| **Confidence Band** | Vùng tin cậy | Mean ± Std |

---

## 📞 Hỗ Trợ

**Nếu vẫn không hiểu**:
1. Đọc lại phần "Cách đọc" của chart đó
2. Xem ví dụ thực tế
3. Cross-reference với insights.md
4. Hỏi analyst team

**Documents liên quan**:
- `insights.md` - Insights chi tiết
- `README.md` - Workflow tổng quan
- CSV files - Raw numbers

---

**Tạo bởi**: Claude Code Assistant
**Ngày**: 2025-11-14
**Version**: 1.0

🎉 **Chúc mày đọc biểu đồ thuần thục!**
