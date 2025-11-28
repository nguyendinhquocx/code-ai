# Câu hỏi Thường gặp

## Bắt đầu

### Nên bắt đầu với tool nào?

**Bắt đầu với Gemini CLI** nếu mày muốn truy cập miễn phí. Nó hào phóng và hoàn hảo để học concepts.

**Nâng cấp lên Claude Code** nếu mày cần agents và nghiêm túc với terminal AI workflows.

### Mày có cần cả ba không?

Không! Chuck dùng cả ba vì chúng có strengths khác nhau:
- **Gemini**: Research và web search
- **Claude**: Deep work và agents  
- **Codex**: High-level analysis

Bắt đầu với một, thêm các tool khác khi cần.

### Đây chỉ dành cho developer không?

**Tuyệt đối không!** Chuck dùng những tools này cho YouTube video scriptwriting. Chúng hoạt động cho:
- Viết và tạo content
- Nghiên cứu và analysis
- Lập kế hoạch project
- Documentation
- Bất kỳ text-based work nào

Coding chỉ là MỘT use case.

## Chi phí & Subscriptions

### Cái này tốn bao nhiêu?

- **Gemini CLI**: MIỄN PHÍ (limits hào phóng)
- **Claude Code**: $20/tháng (Claude Pro)
- **Codex**: $20/tháng (ChatGPT Plus) hoặc trả theo token usage
- **opencode**: MIỄN PHÍ (Grok), hoặc dùng existing subscriptions

### Mày có thể dùng existing AI subscriptions không?

**Vâng!** 
- Có Claude Pro? Dùng nó với Claude Code
- Có ChatGPT Plus? Dùng nó với Codex
- Có Claude Pro? Dùng nó với opencode nữa!

### Subscription nào đáng giá nhất?

**Đề xuất của Chuck:** Claude Pro ($20/tháng)
- Truy cập Claude Code (terminal)
- Truy cập Claude web
- Hoạt động với opencode
- Agents feature là game-changing

## Câu hỏi Kỹ thuật

### Context file là gì?

Markdown file (gemini.md, claude.md, agents.md) nói cho AI biết project của mày là gì. Nó load tự động mỗi session để mày không bao giờ re-explain work của mình.

### Tại sao mày cần different context files?

Mỗi AI tool tìm file riêng của nó:
- Gemini CLI → gemini.md
- Claude Code → claude.md
- Codex/opencode → agents.md

Giữ chúng đồng bộ khi dùng multiple AIs!

### Agent là gì?

(Claude Code feature) AI instance riêng biệt với:
- Specialized instructions
- Fresh context window
- Custom tool access
- Independent từ main conversation

Nghĩ: delegate tasks đến specialized coworkers.

### AI có thể truy cập tất cả files của mày không?

Chỉ files trong directory mày mở nó.

**Mẹo bảo mật:** Bắt đầu AI tools trong project directories, không home folder của mày!

## Câu hỏi Workflow

### Làm sao để dùng multiple AI tools cùng nhau?

1. Khởi chạy tất cả tools trong cùng directory
2. Sync context files (claude.md = gemini.md = agents.md)
3. Mỗi AI có thể đọc/ghi cùng files
4. Không cần copy/paste!

### Làm sao để tránh mất work của mày?

Dùng git! Chuck commits projects của mình thường xuyên:
```bash
git init
git add .
git commit -m "Session summary"
```

Mọi thứ là local files, hoàn hảo cho version control.

### Mày có thể truy cập Obsidian vault của mình không?

**Vâng!** Chỉ khởi chạy AI trong vault directory của mày:
```bash
cd ~/Obsidian/MyVault
gemini
```

AI có thể đọc tất cả notes của mày (chúng chỉ là markdown files).

## Câu hỏi So sánh

### Browser AI vs Terminal AI?

**Browser AI:**
- Mất context sau khi scroll
- Phân tán qua multiple chats
- Copy/paste nightmare
- Vendor lock-in

**Terminal AI:**
- Context files liên tục
- Một project folder
- Truy cập file trực tiếp
- Mày sở hữu mọi thứ

### AI nào là "tốt nhất"?

Phụ thuộc vào task:
- **Claude**: Tốt nhất cho writing, deep work, agents
- **Gemini**: Tốt nhất cho web research, current info
- **ChatGPT**: Tốt nhất cho high-level analysis
- **opencode**: Tốt nhất cho flexibility, local models

Chuck dùng cả ba cho strengths khác nhau.

## Câu hỏi Triết lý

### Tại sao Chuck quan tâm đến việc sở hữu context?

**Vendor lock-in avoidance.** Browser AI giam work của mày trong platform của họ.

Với terminal AI:
- Mọi thứ là local files
- Copy folder bất cứ đâu
- Switch AI tools bất cứ lúc nào
- Full control

### "It's just a folder" triết lý là gì?

Project của mày = Một folder chứa:
- Context files
- Work products
- Research
- Mọi thứ

Portable, version-controlled, tool-agnostic. **Mày sở hữu nó.**

## Cần Giúp Thêm?

→ [Hướng dẫn Khắc phục sự cố](15-troubleshooting.md)

→ [Bảng Cheat Lệnh](14-cheat-sheet.md)

---

[← Quay lại README](../README.md)