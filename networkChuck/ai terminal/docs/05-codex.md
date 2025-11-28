# Hướng dẫn Codex (ChatGPT CLI)

**Video đề cập:** 18:07-18:28, 18:54-19:13

Codex là công cụ terminal của OpenAI mang ChatGPT đến command line.

## Tổng quan

**Sử dụng của Chuck:**
> "Tao thấy ChatGPT rất tốt ở phân tích things từ high view. Gemini và Claude rất tốt ở work, deep work."

**Tốt nhất cho:**
- High-level analysis
- Strategic thinking
- Quality review
- Different perspective từ Claude/Gemini

## Cài đặt

```bash
npm install -g @openai/codex-cli

# Hoặc theo OpenAI documentation chính thức
```

## Sử dụng Cơ bản

### Khởi chạy

```bash
cd your-project
codex
```

### Context File

Sử dụng **agents.md** (giống như opencode)

```bash
> /init
```

Tạo `agents.md` trong project directory của mày.

## Workflow của Chuck

**Trong multi-tool setup:**

```bash
# Terminal 1: Claude (viết)
claude
> Viết hook cho video này, authority angle

# Terminal 2: Gemini (nghiên cứu)
gemini
> Viết hook trên discovery angle

# Terminal 3: Codex (review)
codex
> Review cả hai hooks và so sánh strengths của chúng
```

**Quan sát của Chuck:**
> "Chúng đều dùng cùng context, different roles."

## Vai trò trong Multi-Tool Workflow

### Khi nào Dùng Codex

**Dùng Codex cho:**
- Review output của Claude
- High-level strategy
- So sánh approaches
- Đảm bảo clarity
- Bắt issues Claude/Gemini miss

**Đừng dùng Codex cho:**
- Deep technical writing (Claude tốt hơn)
- Current web research (Gemini tốt hơn)
- Long-form content creation

### Workflow Thông thường

```bash
# 1. Claude tạo
claude
> Viết technical blog post về ZFS

# 2. Gemini nghiên cứu
gemini
> Verify technical accuracy và tìm recent benchmarks

# 3. Codex review
codex
> Review blog post tại blog.md
  Kiểm tra: clarity, flow, technical accuracy, audience fit
```

## Context File Syncing

**Quan trọng:** Codex dùng `agents.md`

**Sync với các tools khác:**

```bash
# Trong Claude terminal
claude
> Sync claude.md content đến gemini.md và agents.md
```

**Bây giờ cả ba tools chia sẻ context!**

## Giá cả

**Yêu cầu:** ChatGPT Plus ($20/tháng) hoặc API key

- ChatGPT Plus: Dùng existing subscription
- API key: Trả theo token usage

## So sánh

| Feature | Codex | Claude Code | Gemini CLI |
|---------|-------|-------------|------------|
| **Strength** | Analysis | Deep work | Research |
| **Context File** | agents.md | claude.md | gemini.md |
| **Chi phí** | $20/tháng | $20/tháng | Miễn phí |
| **Tốt nhất cho** | Review | Creating | Research |

## Mẹo từ Chuck

### 1. Dùng cho High-Level Analysis

> "ChatGPT rất tốt ở phân tích things từ high view."

**Prompts tốt:**
```bash
> Review architecture này và identify weaknesses
> Explanation này clear cho beginners không?
> So sánh hai approaches này một cách chiến lược
```

### 2. Bước Cuối cùng trong Pipeline

```
Claude viết → Gemini verify → Codex review
```

### 3. Different Perspective

Khi Claude và Gemini đồng ý, hỏi Codex cho ý kiến thứ ba:

```bash
> Claude và Gemini đều recommend approach A.
  Mày nghĩ gì? Bất kỳ risks nào chúng ta đang bỏ sót?
```

## Documentation Chính thức

[OpenAI Codex Documentation](https://platform.openai.com/docs/tools/codex)

## Tiếp theo là gì?

**Hiểu multi-tool workflows:**

➡️ [Hướng dẫn Multi-Tool Workflow](08-multi-tool-workflow.md)

➡️ [Context Files Giải thích](07-context-files.md)

---

[← Quay lại Claude Code](04-claude-code.md) | [Tiếp theo: opencode →](06-opencode.md)