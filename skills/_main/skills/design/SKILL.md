---
name: design
description: Triết lý thiết kế tối giản, tinh tế, có hệ thống. Áp dụng cho BẤT CỨ thứ gì: file structure, code architecture, system design, UI/UX, tool, web, app, document. Dùng khi xây dựng hoặc đánh giá thiết kế - từ một file markdown đến hệ thống phức tạp. Nguyên tắc: ít hơn nhưng tốt hơn, mọi thứ都有 mục đích, tôn trọng người dùng.
keywords_vi: [thiết kế, design, minimalism, tối giản, ui/ux, system design, architecture, file structure, code organization, best practices]
---

# Design Philosophy: Ít Hơn Nhưng Tốt Hơn

Skill này áp dụng triết lý thiết kế cho MỌI THỨ - không chỉ UI, mà cả code structure, file organization, system architecture, tool design, document format.

## Nguyên tắc cốt lõi

**1. Ít hơn nhưng tốt hơn (Dieter Rams)**
- Bắt đầu với 10, giữ lại 3
- Mỗi thứ phải tự biện minh cho sự tồn tại của nó
- Nếu phải giải thích, đã thất bại
- Đơn giản là KẾT QUẢ của hiểu sâu, không phải lược bừa

**2. Mọi thứ hướng tới mục đích**
- Mỗi file, biến, function, component đều có lý do tồn tại
- Không có code "để sau này dùng"
- Không có folder rỗng "cho đẹp"
- Không có config "phòng hờ"

**3. Tôn trọng người dùng**
- Người dùng không nợ bạn thời gian
- Thiết kế tốt biến mất - người dùng không cần suy nghĩ
- Nếu không tự giải thích trong 5 giây, thất bại
- Error message phải đưa giải pháp, không dump stack trace

**4. Tính bền vững**
- Xây cho 10 năm, không phải 10 tuần
- Mỗi abstraction thêm vào = nợ kỹ thuật
- Refactor sớm, đừng đợi technical debt tích quá
- Documentation là code, code là documentation

---

## Áp dụng cho mọi thứ

### File structure
```
project/
├── src/              # Code chính
├── tests/            # Tests
├── docs/             # Docs
├── scripts/          # Scripts
└── README.md         # Entry point
```

**Nguyên tắc:**
- Flat khi có thể, nested khi cần
- Tên folder tự giải thích mục đích
- Không phân tán cùng loại file nhiều nơi
- `index` hoặc `main` là entry point duy nhất

### Code architecture

**Module size:**
- 200-500 dòng: lý tưởng
- 500-1000 dòng: cần cân nhắc split
- 1000+ dòng: split ngay

**Function size:**
- 1-20 dòng: tốt
- 20-50 dòng: cần xem xét
- 50+ dòng: extract

**Naming:**
- Variable: noun -> `userCount`, `isLoading`
- Function: verb -> `getUser()`, `calculateTotal()`
- Class/Type: noun -> `UserService`, `Calculator`
- File: PascalCase cho class, kebab-case cho utilities

**Abstraction:**
- Don't Repeat Yourself (DRY)
- Nhưng cũng đừng over-abstract
- 3 lần lặp lại mới đáng extract
- 1-2 lần lặp lại: có thể chấp nhận

### UI/UX design

**Grid system:**
- Base grid: 4px hoặc 8px
- Spacing: 4, 8, 12, 16, 24, 32, 48px
- Không dùng số lẻ như 5, 7, 13px

**Typography scale:**
- 11px, 12px, 13px, 14px (base), 16px, 18px, 24px, 32px
- Không dùng nhiều hơn 3 sizes trong cùng màn hình
- Line-height: 1.4-1.6 cho body text

**Color:**
- 1 accent color, không nhiều hơn
- Gray scale cho structure: 4-5 levels
- Semantic colors: success (xanh lá), warning (vàng), error (đỏ)
- Không dùng color cho decoration

**Component:**
- Reusable là yêu cầu, không phải option
- Props minimum required, optional reasonable defaults
- Mỗi component 1 responsibility
- Nested max 3 levels depth

**Spacing:**
- Padding: symmetrical -> `16px` thay vì `12px 16px 8px 16px`
- Margin: dùng spacing unit từ grid system
- Gap giữa elements: 8px minimum
- Section separation: 24-48px

### System design

**Service boundaries:**
- Mỗi service 1 domain concern
- API surface minimum required
- Internal implementation hidden
- Versioned breaking changes

**Data flow:**
- Unidirectional khi có thể
- Event-driven cho loose coupling
- Avoid shared mutable state
- Immutability là default

**Error handling:**
- Fail fast, fail loud
- Error messages có action items
- Log with context
- Graceful degradation cho user-facing

### Tool & CLI design

**Command structure:**
```bash
tool <command> <subcommand> [options]
# Example: git remote add origin <url>
```

**Output format:**
- Success: silent hoặc minimal
- Error: clear, actionable
- Verbose: optional flag
- Structured output: JSON flag cho automation

**Flags:**
- Short: `-v`, `-h`
- Long: `--verbose`, `--help`
- Boolean default: positive action -> `--force`, không phải `--no-confirm`

### Document design

**Structure:**
1. What (là gì) - 1 câu
2. Why (tại sao) - 1-2 câu
3. How (như thế nào) - steps hoặc examples
4. References - links

**Format:**
- Heading hierarchy max 3 levels
- Code blocks cho examples
- Tables cho comparison
- Lists cho steps
- Bold cho emphasis, italic lắm lượt

**Length:**
- Short: 1 screen scroll
- Medium: 2-3 screens
- Long: split thành nhiều documents

---

## Process

### Bắt đầu project mới

1. **Định nghĩa scope**
   - Mục tiêu là gì?
   - Người dùng là ai?
   - Success metrics?

2. **Chọn technology stack**
   - Don't reinvent wheel
   - Use boring technology cho core business
   - Innovation chỉ nơi cần thiết
   - Team có thể maintain không?

3. **Design architecture**
   - Modules, services, components
   - Data flow
   - Error handling strategy
   - Testing approach

4. **Setup structure**
   - Folder structure
   - Naming conventions
   - Config files
   - Documentation skeleton

5. **Implement iteratively**
   - MVP first
   - Validate early
   - Refactor thường xuyên
   - Document as you go

### Review thiết kế

**Questions to ask:**
1. Cái này có THỰC SỰ cần thiết không?
2. Có thể đơn giản hơn không?
3. Người dùng hiểu ngay không?
4. 6 tháng nữa còn maintain được không?
5. Có violation bất kỳ nguyên tắc nào không?

**Review checklist:**
- [ ] Mọi thứ都有 mục đích
- [ ] Naming rõ nghĩa, consistent
- [ ] No duplication (DRY)
- [ ] No over-abstraction
- [ ] Error handling có action items
- [ ] Performance acceptable
- [ ] Accessibility được consider
- [ ] Documentation hiện tại

---

## Anti-patterns

### Không bao giờ làm

**Code:**
- Copy-paste code với modifications nhẹ -> extract function
- Comment code chết -> delete nó
- TODO/FIXME trong production -> fix ngay hoặc issue tracker
- Magic numbers -> constants với descriptive names
- Nested > 3 levels -> flatten hoặc extract

**UI:**
- Padding lẻ (5px, 7px, 13px) -> dùng grid units
- Multiple accent colors -> 1 accent, gray scale
- Heavy shadows -> subtle hoặc none
- Spring animations -> ease curves
- Decorative gradients -> solid colors

**System:**
- God classes/services -> split responsibilities
- Circular dependencies -> refactor architecture
- Shared mutable state -> immutability
- Try-catch swallow errors -> fail fast
- Version numbers in file names -> use version control

### Always question

- "Đây là best practice hay thói quen?"
- "Code này test được không?"
- "6 tháng nữa tôi có hiểu không?"
- "Có thể đơn giản hơn không?"
- "Người dùng thực sự cần gì?"

---

## Standards

### Quality bar

Mọi thứ phải:
1. **Rõ nghĩa** - Tên, structure, layout đều tự giải thích
2. **Nhất quán** - Convention được follow throughout
3. **Đơn giản** - Không có complexity dư thừa
4. **Có thể test** - Testable là design requirement
5. **Có thể maintain** - Documentation present, abstraction reasonable

### Performance targets

**Code:**
- Function runtime: < 100ms cho common operations
- API response: < 500ms (p95)
- Bundle size: minimum viable, tree-shakeable
- Memory leak: zero tolerance

**UI:**
- First paint: < 1s
- Time to interactive: < 3s
- Interaction response: < 16ms (60fps)
- Animation: 60fps minimum

### Accessibility

**WCAG 2.1 AA minimum:**
- Color contrast: 4.5:1 cho text
- Keyboard navigation: all interactive elements
- Screen reader: semantic HTML, ARIA labels
- Focus indicators: visible và clear
- Text sizing: zoom 200% vẫn usable

---

## Examples

### Good file structure
```
src/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Modal.tsx
├── services/
│   ├── api.ts
│   └── auth.ts
├── utils/
│   ├── format.ts
│   └── validation.ts
└── types/
    └── index.ts
```

### Bad file structure
```
src/
├── Components/
├── component/
├── utils/
├── helper/
├── services/
├── api/
└── stuff/
```

**Problems:**
- Inconsistent naming (Components vs component)
- Duplicate purposes (utils vs helper)
- Ambiguous (stuff)
- No clear entry point

### Good function
```typescript
function calculateDiscount(price: number, discount: number): number {
  return price * (1 - discount / 100);
}
```

### Bad function
```typescript
function calc(p: number, d: number): number {
  return p * (1 - d / 100);
}
```

**Problems:**
- Abbreviated names (calc, p, d)
- No type safety for discount range (0-100)
- No validation for negative inputs

### Good UI component
```typescript
function Button({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Bad UI component
```typescript
function Button(props: any) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}
```

**Problems:**
- `any` type loses type safety
- No variant system
- No size options
- `text` instead of `children` limits flexibility

---

## Values

- **People over technology** - Tech phục vụ people, không phải ngược lại
- **Simplicity over complexity** - Complexity là nợ, simplicity là asset
- **Evolution over revolution** - Refactor thường, rewrite hiếm
- **Evidence over opinion** - Measure, test, validate
- **Users over ego** - Design là service, không phải self-expression

---

## Activation

Khi được hỏi về thiết kế, bạn sẽ:

1. **Hiểu context** - Question assumptions, clarify goals
2. **Áp dụng nguyên tắc** - Use principles, not taste
3. **Đưa ra giải pháp** - Specific, actionable, reasoned
4. **Explain rationale** - Why this approach, not just what
5. **Provide examples** - Show, don't just tell

Bạn là **lương tâm của product**, người **bảo vệ người dùng**, người **dám nói NO với complexity**.

**Thiết kế tốt không khiến người dùng "wow", mà khiến họ không cần suy nghĩ.**
