# Todo App Constitution

<!--
Sync Impact Report:
Version change: [NEW] → 1.0.0
Modified principles: N/A (initial creation)
Added sections:
  - I. Code Clarity (Clean & Readable)
  - II. Test Coverage (Test-First)
  - III. Simplicity First (YAGNI)
  - IV. UI Minimalism (User-Centric Design)
  - V. Design Philosophy (Dieter Rams Principles)
  - Quy tắc Kỹ thuật (Technology Stack, Performance Standards, Accessibility)
  - Quy trình Phát triển (Development Workflow, Quality Gates, Code Review Focus)
  - Quản trị (Constitution Authority, Amendment Process, Compliance Review, Enforcement)
Templates requiring updates:
  ✅ .specify/templates/plan-template.md (validated - aligned with constitution check requirements)
  ✅ .specify/templates/spec-template.md (validated - aligned with quality gates)
  ✅ .specify/templates/tasks-template.md (validated - aligned with test-first and simplicity principles)
Commands requiring updates:
  ✅ .claude/commands/speckit.plan.md (validated - includes constitution check enforcement)
  ✅ .claude/commands/speckit.specify.md (validated - includes validation quality gates)
  ✅ .claude/commands/speckit.tasks.md (validated - includes test coverage guidelines)
Follow-up TODOs: None - all templates and commands are aligned with constitution
-->

## Nguyên tắc Cốt lõi

### I. Code Clarity (Clean & Readable)

Code phải dễ đọc hơn là dễ viết. Mỗi function, variable, class phải có tên rõ ràng thể hiện đúng mục đích. Không viết tắt bừa bãi, không logic lồng nhau quá 3 tầng, không function dài quá 30 dòng trừ khi có lý do chính đáng.

**Rationale**: Code được đọc nhiều hơn được viết. Maintainability quan trọng hơn việc save vài dòng code. Team member mới phải hiểu được code trong vòng 5 phút xem file.

**Non-negotiable rules**:
- Tên biến/function phải mô tả đúng chức năng, không viết tắt không cần thiết
- Comment giải thích "tại sao", không giải thích "cái gì" (code tự giải thích)
- Mỗi function chỉ làm một việc duy nhất (Single Responsibility)
- Không duplicate code - DRY principle

### II. Test Coverage (Test-First)

Mọi feature phải có test. Không có test = không merge. Test phải cover happy path, edge cases, và error scenarios. Integration test cho user workflows quan trọng.

**Rationale**: Test là documentation sống, là safety net cho refactoring, và là proof rằng feature hoạt động đúng. Sửa bug mà không có test là mời bug quay lại.

**Non-negotiable rules**:
- Unit test cho mọi business logic function
- Integration test cho user workflows (create todo, complete todo, delete todo)
- Test phải pass trước khi merge PR
- Bug fix phải kèm regression test để đảm bảo bug không tái diễn

### III. Simplicity First (YAGNI)

Ưu tiên đơn giản, không phức tạp hóa. Implement những gì cần thiết hôm nay, không implement "cho tương lai có thể cần". Mỗi abstraction, mỗi pattern phải justify được giá trị ngay lập tức.

**Rationale**: Premature optimization và over-engineering là nguồn gốc của complexity debt. Simple code dễ maintain, dễ debug, dễ extend hơn clever code.

**Non-negotiable rules**:
- Bắt đầu với giải pháp đơn giản nhất có thể work
- Chỉ refactor/abstract khi có ít nhất 3 cases tương tự (Rule of Three)
- Không dùng design pattern chỉ vì "nghe hay" - phải có lý do cụ thể
- Reject feature không có clear use case ngay lập tức

### IV. UI Minimalism (User-Centric Design)

UI phải thân thiện với người dùng, tối giản, không phức tạp. Mỗi element phải có mục đích rõ ràng. Không có decoration vô nghĩa, không có màu sắc/icon không cần thiết.

**Rationale**: Attention của user là limited. Mỗi pixel thừa thãi đánh cắp năng lượng tinh thần. Good design "biến mất" - user hoàn thành task mà không phải suy nghĩ.

**Non-negotiable rules**:
- Màu chính: White (#FFFFFF), Black (#000000), Light Gray (#F5F5F5)
- Không icon trừ khi absolutely necessary và có clear purpose
- Font: IBM Plex Mono (code/technical) hoặc Calibri/Mulish (content)
- Mỗi screen chỉ có một primary action, rõ ràng và dễ tìm

### V. Design Philosophy (Dieter Rams Principles)

Thiết kế phải theo triết lý "Ít hơn nhưng tốt hơn" (Weniger aber besser). Mỗi feature, mỗi interaction phải self-justify. Nếu phải giải thích thì đã fail.

**Rationale**: Dieter Rams' 10 principles of good design là timeless. Simple, intuitive, unobtrusive design tồn tại lâu hơn trendy design. User không nợ chúng ta thời gian để học cách dùng app.

**Non-negotiable rules**:
- Innovative: Giải quyết vấn đề theo cách mới, không copy mindlessly
- Useful: Mọi feature phải có clear user value
- Aesthetic: Đẹp từ trong ra ngoài - form follows function
- Understandable: Tự giải thích, không cần manual
- Unobtrusive: Không gây nhiễu, không gây phiền
- Honest: Không manipulate user (no dark patterns)
- Long-lasting: Thiết kế cho 5-10 năm, không chỉ trend hôm nay
- Thorough: Chú ý detail, nothing is arbitrary
- Environmentally friendly: Performance-conscious, không lãng phí resources
- As little design as possible: Loại bỏ mọi thứ không absolutely necessary

## Quy tắc Kỹ thuật

**Technology Stack**:
- Chọn technology đã proven và stable, không experimental
- Ưu tiên built-in solutions trước khi add dependencies
- Mỗi dependency phải justify được giá trị > cost (bundle size, maintenance, security)

**Performance Standards**:
- Initial load < 3 seconds
- Interaction response < 100ms
- Mọi operation phải có loading state cho UX tốt

**Accessibility**:
- Keyboard navigation phải hoạt động đầy đủ
- ARIA labels cho screen readers
- Color contrast đạt WCAG AA minimum

## Quy trình Phát triển

**Development Workflow**:
1. Hiểu requirement thật kỹ trước khi code
2. Design đơn giản nhất có thể work
3. Viết test trước (hoặc ngay sau) khi implement
4. Code review bắt buộc trước merge
5. Manual test user flow trước khi deploy

**Quality Gates**:
- All tests pass
- No linting errors
- Code reviewed và approved
- UI manually tested cho critical flows
- Performance không regress (no slower than previous version)

**Code Review Focus**:
- Có đơn giản hơn được không?
- Test coverage có đủ không?
- UI có intuitive không?
- Performance impact có acceptable không?
- Code có maintainable không?

## Quản trị

**Constitution Authority**: Constitution này supersedes mọi coding practices, style guides, và personal preferences khác. Khi có conflict, constitution luôn thắng.

**Amendment Process**:
- Amendments require team discussion và consensus
- Phải có clear justification cho mọi thay đổi
- Version bump theo semantic versioning
- Migration plan nếu breaking changes

**Compliance Review**:
- Mọi PR phải self-check compliance với constitution
- Reviewer phải verify compliance trước approve
- Violations phải được justify explicitly hoặc reject
- Complexity additions phải documented với clear rationale

**Enforcement**:
- Constitution được check tại Phase 0 (spec) và Phase 1 (plan)
- Violations block progression trừ khi có explicit justification
- Repeated violations trigger constitution review meeting

**Version**: 1.0.0 | **Ratified**: 2025-10-25 | **Last Amended**: 2025-10-25
