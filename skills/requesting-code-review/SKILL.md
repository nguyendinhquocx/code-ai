---
name: requesting-code-review
description: This skill should be used after completing tasks or before merging/archiving to verify work meets requirements. Combines verification (tests pass, build succeeds) with code review (quality, issues, edge cases). For OpenSpec projects, reads proposal files (tasks.md, spec deltas) and validates completion against requirements.
---

# Requesting Code Review

## Overview

Systematic review combining verification and code quality checks. Catches issues before they cascade. For OpenSpec projects, validates against proposal requirements.

**Core principle:** Review early, review often. Evidence before assertions.

## When to Use

Use when:
- After completing implementation tasks
- Before merging branches or creating PRs
- Before running `/openspec:archive`
- After significant code changes
- When task list shows "done" but not verified

Skip when:
- Trivial changes (typo fixes, comments)
- Work-in-progress explorations
- No code changes (docs only)

## The Process

### Phase 1: Context Discovery

**Detect project type:**

```bash
# Check for OpenSpec
ls openspec/changes/*/proposal.md 2>/dev/null

# Check for git repo
git status 2>/dev/null
```

**For OpenSpec projects:**
1. Find most recent active change: `openspec list`
2. Read `changes/<id>/proposal.md`, `tasks.md`, `design.md` (if exists)
3. Read spec deltas in `changes/<id>/specs/*/spec.md`
4. Understand requirements and scenarios

**For non-OpenSpec:**
1. Check git diff for changed files
2. Identify scope of changes

### Phase 2: Verification (Evidence-Based)

**CRITICAL:** Run actual commands. Never claim "looks good" without evidence.

**Basic verification:**

```bash
# Build check
[Run project build command]
# Examples: npm run build, cargo build, python -m pytest

# Test check
[Run test suite]
# Examples: npm test, pytest, cargo test

# Lint check (if applicable)
[Run linter]
# Examples: eslint ., cargo clippy, flake8
```

**Output analysis:**
- All tests PASS? (count failures)
- Build SUCCESS? (check exit code)
- Linter clean? (count warnings/errors)

**If ANY fail:**
- STOP immediately
- Report failures with details
- Do NOT proceed to Phase 3
- Tasks are NOT complete

### Phase 3: Task Completion Check

**For OpenSpec projects:**

Read `changes/<id>/tasks.md` and verify each task:

1. **Checklist vs Reality:**
   - How many tasks marked `[ ]` (pending)?
   - How many marked `[x]` (done)?
   - Do file changes match task descriptions?

2. **Spec Delta Validation:**
   - For each `## ADDED Requirements`: implemented?
   - For each `## MODIFIED Requirements`: changes applied?
   - For each `## REMOVED Requirements`: code removed?
   - For each `#### Scenario:`: test case exists?

3. **Cross-reference:**
   - Does code match design.md architecture?
   - Are all capabilities in spec deltas addressed?

**For non-OpenSpec:**

- Check git diff against commit messages
- Verify stated changes actually present
- Look for unfinished TODOs or FIXMEs

### Phase 4: Code Quality Review

**Scan for common issues:**

1. **Security:**
   - Hardcoded secrets? (API keys, passwords)
   - SQL injection risks?
   - XSS vulnerabilities?
   - Command injection?

2. **Error Handling:**
   - Uncaught exceptions?
   - Silent failures?
   - Missing validation at boundaries?

3. **Edge Cases:**
   - Null/undefined handling?
   - Empty array/string handling?
   - Boundary conditions?
   - Concurrent access issues?

4. **Code Quality:**
   - Duplicated code blocks?
   - Over-complicated logic?
   - Missing comments for non-obvious code?
   - Inconsistent naming?

**For each issue found:**
- Note file path and line number
- Severity: Critical / High / Medium / Low
- Recommendation

### Phase 5: Review Report

**Format:**

```
CODE REVIEW REPORT
==================

PROJECT: [OpenSpec change-id or project name]
DATE: [timestamp]

## Verification Results

Build: [PASS/FAIL with details]
Tests: [X passed, Y failed]
Lint: [Clean / X warnings]

## Task Completion

OpenSpec Tasks: [X/Y complete]
- [x] Task 1
- [ ] Task 2 (INCOMPLETE: [reason])

Spec Requirements: [X/Y implemented]
- [x] Requirement 1
- [ ] Requirement 2 (MISSING: [details])

## Issues Found

### CRITICAL
- [file:line] [description]

### HIGH
- [file:line] [description]

### MEDIUM
- [file:line] [description]

## Recommendations

1. [Action item with priority]
2. [Action item]

## Status

[APPROVED / NEEDS WORK / BLOCKED]

Reasoning: [explanation]
```

**Decision criteria:**

- **APPROVED:** All tests pass, no critical/high issues, requirements met
- **NEEDS WORK:** Tests pass but quality issues, or minor requirements missing
- **BLOCKED:** Tests fail, critical issues, or major requirements not implemented

### Phase 6: OpenSpec Handoff

**If APPROVED and OpenSpec project:**

```
Review APPROVED. Ready for archive.

Mày có thể chạy:
/openspec:archive <change-id>

Hoặc muốn tao làm luôn?
```

**If NEEDS WORK:**

```
Review complete nhưng có X issues cần fix.

Fix trước hay proceed anyway? (Not recommended)
```

**If BLOCKED:**

```
Review BLOCKED. Phải fix [critical issues] trước khi archive.

1. [Critical issue 1]
2. [Critical issue 2]

Muốn tao giúp fix không?
```

## Key Principles

- **Evidence before assertions** - Run commands, never assume
- **Fail fast** - Stop at first verification failure
- **Be specific** - File paths, line numbers, not vague "looks good"
- **Honest assessment** - Don't hide issues to make user happy
- **Actionable feedback** - Each issue has clear fix recommendation

## OpenSpec Spec Delta Patterns

**When reviewing spec deltas, check:**

```
## ADDED Requirements
### Requirement: [Name]
[Description]

#### Scenario: [Case]
- WHEN [condition]
- THEN [expected behavior]
```

**Verify:**
1. Code implementing the requirement exists
2. Test case covering the scenario exists
3. Test passes

**Common miss patterns:**
- Requirement added to spec but no implementation
- Implementation exists but no test
- Test exists but doesn't match scenario WHEN/THEN

## Example: OpenSpec Review

```
User: "Tao vừa implement xong, check giúp tao"

Assistant (detects openspec):
"Để tao check. Đang detect OpenSpec context..."

[Reads openspec/changes/add-user-auth/]

"Found change: add-user-auth
Đang run verification..."

$ npm run build
✓ Build passed

$ npm test
✓ 15 tests passed

Đang check tasks vs spec requirements...

## CODE REVIEW REPORT

PROJECT: add-user-auth

### Verification: PASS
- Build: PASS
- Tests: 15/15 passed
- Lint: Clean

### Task Completion: 4/4
- [x] Implement JWT auth
- [x] Add login endpoint
- [x] Add password reset
- [x] Write tests

### Spec Requirements: 3/3
- [x] User authentication (spec delta implemented)
- [x] JWT token generation (test covers scenario)
- [x] Password reset flow (test covers scenario)

### Issues: NONE

### Status: APPROVED

Ready for archive. Chạy /openspec:archive add-user-auth?"
```
