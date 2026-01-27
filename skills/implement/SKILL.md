---
name: implement
description: This skill should be used when the user has finished discussing and agreed on an implementation approach, and wants to start coding. Triggers include "/implement", "implement this", "build this", "code this", or when transitioning from planning to execution phase.
---

# Implement

Execute the agreed implementation plan with task management, sub-agent orchestration, and verification.

## When to Use

- User calls `/implement` after finalizing approach
- Transition from planning/discussion to coding phase
- User says "implement this", "build this", "let's do it"

## Workflow

### Phase 1: Extract Plan

Identify the implementation scope from:
1. Current conversation context
2. Linked plan file (if user provided)
3. Previous discussion in same session

Output a brief summary of what will be implemented. Confirm with user if scope is ambiguous.

### Phase 2: Task Breakdown

Create tasks using TodoWrite tool:

1. Analyze scope and break into discrete tasks
2. Order tasks by dependency (what must finish before what)
3. Each task should be:
   - Specific and actionable
   - Completable in one focused effort
   - Testable/verifiable

Example task breakdown:
```
1. Create data model for X
2. Implement API endpoint for Y
3. Add validation logic
4. Write component Z
5. Connect frontend to API
6. Test full flow
```

### Phase 3: Execute

For each task:

1. Mark task `in_progress`
2. Implement the task
3. Verify it works (run, build, or quick test)
4. Mark task `completed`
5. Move to next task

**When to use sub-agents:**
- Complex file exploration: use Explore agent
- Multi-step bash operations: use Bash agent
- Research across codebase: use general-purpose agent

**When to load domain skills:**

If a task requires specialized knowledge, read the corresponding skill from `D:\.claude\skills\` before executing:

| Domain | Skill | When to load |
|--------|-------|--------------|
| Business analytics | `analyst` | Analyzing sales/revenue data, finding weak areas |
| Data visualization | `csv` | Creating charts, dashboards from CSV |
| KPI dashboards | `dashboard` | Designing metrics, monitoring layouts |
| Design principles | `design` | Architecture decisions, file structure, UI patterns |
| Word documents | `docx` | Creating/editing .docx files |
| Frontend/UI | `frontend-design` | Building web components, pages, interfaces |
| Document conversion | `markdown` | Converting files to markdown |
| Obsidian notes | `obsidian` | Working with Obsidian markdown syntax |
| PDF processing | `pdf` | Extract, merge, split, fill forms |
| PowerPoint | `pptx` | Creating/editing presentations |
| Data storytelling | `story` | Presenting analytics, executive reports |
| QA/Testing | `test` | Test strategies, test cases, bug tracking |
| Excel/Spreadsheets | `xlsx` | Creating/editing spreadsheets with formulas |

**How to use:**
1. Identify if task matches a skill domain
2. Read `D:\.claude\skills\{skill-name}\SKILL.md`
3. Follow skill's workflow/instructions for that specific task
4. Continue with implementation

**When task fails:**
- Diagnose the issue
- Fix and retry
- If blocked, note blocker and ask user

### Phase 4: Quality Check

After all tasks complete, run appropriate checks based on project:

1. **Build** - Ensure project compiles/builds
2. **Lint/Format** - If project has linter configured
3. **Type check** - If TypeScript/typed language
4. **Test** - Run existing tests if available

Fix any failures before proceeding.

### Phase 5: Verify Features

Test that implemented features work as originally discussed:

1. Run the application/feature
2. Verify expected behavior matches requirements
3. Check edge cases mentioned in discussion
4. If something doesn't work, fix it

### Phase 6: Complete

When all features work:

1. Clear completed todos
2. Summarize what was implemented
3. Note any follow-up items discovered

## State Management

When conversation gets long or context is filling up:

Save state to file (AI chooses location, typically project root or scratchpad):

```markdown
# Implementation State

## Scope
[What we're implementing]

## Tasks
- [x] Task 1
- [x] Task 2
- [ ] Task 3 (in progress)
- [ ] Task 4

## Current Status
[Where we are, what's next]

## Notes
[Any blockers, decisions made, etc.]
```

To resume: Read state file and continue from current task.

## Principles

- **Linh dong**: This is a flexible framework, not rigid checklist
- **AI tu quyet dinh**: AI chooses tools, agents, approach based on context
- **Fail thi fix**: If something breaks, fix it, don't skip
- **Done = works**: Implementation complete when features work as discussed, not just code written

## Error Handling

| Situation | Action |
|-----------|--------|
| Unclear requirement | Ask user to clarify |
| Build fails | Fix build errors |
| Test fails | Fix failing tests |
| Blocked by external dependency | Note blocker, ask user |
| Context running low | Save state, inform user |

## Examples

**Simple feature:**
```
User: [discusses adding login button]
User: /implement

AI:
1. Extracts: "Add login button to header"
2. Creates 3 tasks: component, styling, click handler
3. Implements each task
4. Verifies button appears and works
5. Done
```

**Complex feature:**
```
User: [discusses new API with multiple endpoints]
User: /implement

AI:
1. Extracts full API spec from discussion
2. Creates 8 tasks across routes, models, validation
3. Uses sub-agents for exploration when needed
4. Runs tests after each endpoint
5. Final integration test
6. Done
```
