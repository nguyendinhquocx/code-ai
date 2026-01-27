---
name: brainstorming
description: This skill should be used when user proposes features but requirements are unclear, before creating OpenSpec proposals or implementation plans. Clarifies vague ideas through natural one-question-at-a-time dialogue, detects OpenSpec context automatically, and suggests appropriate workflow (proposal or design doc).
---

# Brainstorming Ideas Into Requirements

## Overview

Transform vague ideas into clear requirements through structured dialogue. Automatically detects OpenSpec context and guides appropriate workflow.

**Core principle:** Understand before building. One question at a time, validate incrementally.

## When to Use

Use when:
- User proposes feature but requirements unclear
- Architectural decisions need exploration
- Multiple approaches exist, trade-offs need discussion
- Before OpenSpec proposals or implementation plans
- User says "I want to add..." without full details

Skip when:
- Requirements crystal clear
- User provided detailed specs
- Simple bug fix with obvious solution

## The Process

### 1. Context Detection (Automatic)

Check OpenSpec context:

```bash
ls openspec/project.md openspec/specs/ 2>/dev/null
```

**If found:** Announce detection, tailor toward spec requirements, reference existing capabilities via `openspec list --specs`

**If not:** Generic brainstorming, offer design doc at end

### 2. Understanding (ONE question at a time)

**Purpose & Goal:**
- "Mày muốn giải quyết vấn đề gì?"
- "Ai sẽ dùng feature này?"
- "Success trông như thế nào?"

**Constraints:**
- "Có giới hạn kỹ thuật nào không?" (performance, compatibility)
- "Có deadline hay priority đặc biệt không?"

**Scope:**
- "Feature này có cần tương tác với hệ thống nào khác không?"
- "Có edge cases nào cần xử lý không?"

**Rules:** ONE question per message. Prefer multiple choice. Don't overwhelm.

### 3. Exploring Approaches

Present 2-3 approaches with trade-offs:

```
Tao thấy có 3 cách làm:

1. [Approach A] (Recommended)
   ✓ [pros]
   ✗ [cons]

2. [Approach B]
   ✓ [pros]
   ✗ [cons]

Tao recommend [A] vì [lý do]. Mày nghĩ sao?
```

Lead with recommendation, present alternatives honestly.

### 4. Incremental Validation

Present design in sections (200-300 words each):
- High-level architecture
- Data models / state
- Component breakdown
- Error handling
- Testing strategy (if complex)

After each section: "Phần này trông ổn chưa?"

### 5. Handoff

**For OpenSpec:**

```
Brainstorm xong. Tao đã hiểu:
- [summary bullet points]

Options:
1. /openspec:proposal - Formalize thành proposal
2. Start coding - Implement ngay

Muốn gì?
```

**For non-OpenSpec:**

```
Brainstorm xong. Tao đã hiểu:
- [summary]

1. Viết design doc (docs/) trước?
2. Start coding ngay?
```

## Key Principles

- **YAGNI ruthlessly** - Remove unnecessary complexity
- **One question at a time** - Don't overwhelm
- **Multiple choice preferred** - Easier to answer
- **Explore alternatives** - Show 2-3 approaches
- **Incremental validation** - Present sections, validate each
- **Be flexible** - Clarify when unclear

## OpenSpec Integration

When detected:

1. Reference existing specs: `openspec list --specs`, `openspec show <capability> --type spec`
2. Consider capability mapping: modify existing or add new?
3. Prepare for proposal: think requirements/scenarios, identify ADDED/MODIFIED/REMOVED

## Example

```
User: "Tao muốn add user authentication"

Assistant (detects openspec/):
"Phát hiện OpenSpec project. Sau brainstorm xong, tao sẽ suggest /openspec:proposal.

Mày muốn auth cho ai? (Admin / End-users / Cả hai)"

User: "End-users"

Assistant: "OK. Mày muốn JWT hay session-based?
(1) JWT - stateless, scalable
(2) Session - simple, easier to revoke"

[... continues through brainstorming process ...]

Assistant: "Brainstorm xong. Tao đã hiểu:
- End-user authentication
- JWT-based, stateless
- Email/password login
- Password reset flow

Muốn chạy /openspec:proposal hay start coding ngay?"
```
