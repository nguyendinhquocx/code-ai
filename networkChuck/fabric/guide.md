# Fabric Hướng Dẫn Sử Dụng

## Fabric là cái gì?

Fabric là framework AI giúp mày tăng cường khả năng làm việc với AI trong cuộc sống hàng ngày. Thay vì phải nhớ hàng trăm prompt khác nhau, mày chỉ cần dùng Fabric với các "patterns" có sẵn.

## Cài Đặt

### Cách 1: One-line install (khuyên dùng)

**Windows PowerShell:**
```powershell
iwr -useb https://raw.githubusercontent.com/danielmiessler/fabric/main/scripts/installer/install.ps1 | iex
```

**Linux/macOS:**
```bash
curl -fsSL https://raw.githubusercontent.com/danielmiessler/fabric/main/scripts/installer/install.sh | bash
```

### Cách 2: Download binary
Vào https://github.com/danielmiessler/fabric/releases/latest download về

### Cách 3: Go install
```bash
go install github.com/danielmiessler/fabric/cmd/fabric@latest
```

## Setup Lần Đầu

Sau khi cài xong, chạy lệnh này để setup:
```bash
fabric --setup
```

Nó sẽ hỏi mày:
1. API keys (OpenAI, Anthropic, Google, etc.)
2. Default model 
3. Các thư mục config

## Cách Dụng Cơ Bản

### 1. Xem tất cả patterns có sẵn
```bash
fabric --listpatterns
```

### 2. Dùng pattern để summarize text
```bash
# Copy text vào clipboard rồi chạy:
pbpaste | fabric --pattern summarize

# Hoặc nhập text trực tiếp:
echo "Đoạn text cần summarize" | fabric --pattern summarize
```

### 3. Xem tất cả models có sẵn
```bash
fabric --listmodels
```

### 4. Chọn model cụ thể
```bash
echo "Text cần xử lý" | fabric --pattern summarize --model gpt-4
```

## Các Use Cases Thực Tế

### 1. Phân Tích YouTube Video
```bash
# Lấy transcript và phân tích
fabric -y "https://youtube.com/watch?v=video_id" --pattern extract_wisdom --stream

# Lấy transcript có timestamp
fabric -y "https://youtube.com/watch?v=video_id" --transcript-with-timestamps --pattern summarize

# Lấy comments
fabric -y "https://youtube.com/watch?v=video_id" --comments --pattern analyze_claims
```

### 2. Phân Tích Website
```bash
# Phân tích toàn bộ website
fabric -u https://github.com/danielmiessler/fabric/ --pattern analyze_claims

# Tóm tắt bài viết
fabric -u https://example.com/article --pattern summarize
```

### 3. Viết Content
```bash
# Viết essay từ ý tưởng
echo "Ý tưởng về AI trong giáo dục" | fabric --pattern write_essay

# Tạo social media post
pbpaste | fabric --pattern create_social_media_post
```

### 4. Phân Tích Code
```bash
# Giải thích code
cat file.py | fabric --pattern explain_code

# Review code
cat file.py | fabric --pattern code_review
```

## Patterns Phổ Biến

### `summarize`
Tóm tắt bất kỳ text nào
```bash
pbpaste | fabric --pattern summarize
```

### `extract_wisdom`
Trích xuất điểm chính từ nội dung dài
```bash
pbpaste | fabric --pattern extract_wisdom
```

### `analyze_claims`
Phân tích các lập luận trong text
```bash
pbpaste | fabric --pattern analyze_claims
```

### `write_essay`
Viết essay từ ý tưởng
```bash
echo "Chủ đề" | fabric --pattern write_essay
```

### `explain_code`
Giải thích code
```bash
cat code.py | fabric --pattern explain_code
```

## Options Hữu Ích

### Streaming output
```bash
fabric --pattern summarize --stream
```

### Copy to clipboard
```bash
pbpaste | fabric --pattern summarize --copy
```

### Output ra file
```bash
pbpaste | fabric --pattern summarize --output result.txt
```

### Đổi temperature
```bash
fabric --pattern write_essay --temperature 0.9
```

## Custom Patterns

### Tạo pattern riêng
1. Tạo thư mục pattern:
```bash
mkdir -p ~/.config/fabric/patterns/my_analyzer
```

2. Tạo file system.md:
```bash
echo "Bạn là chuyên gia phân tích tài chính Việt Nam. Hãy phân tích text sau với góc nhìn thị trường Việt." > ~/.config/fabric/patterns/my_analyzer/system.md
```

3. Dùng pattern:
```bash
pbpaste | fabric --pattern my_analyzer
```

## Web Interface

Fabric cũng có web interface:
```bash
# Start server
fabric --serve

# Mở browser vào http://localhost:8080
```

## Tips & Tricks

### 1. Tạo aliases cho patterns
Thêm vào .bashrc hoặc .zshrc:
```bash
alias summarize='fabric --pattern summarize'
alias analyze='fabric --pattern analyze_claims'
alias explain='fabric --pattern explain_code'
```

### 2. Dùng với variables
```bash
fabric --pattern write_essay --variable="#role:chuyên gia giáo dục" --variable="#tone:thân thiện"
```

### 3. Kết hợp nhiều patterns
```bash
# Tóm tắt rồi phân tích
pbpaste | fabric --pattern summarize | fabric --pattern analyze_claims
```

### 4. Dùng contexts
```bash
# Tạo context về công ty của mày
echo "Thông tin công ty..." > ~/.config/fabric/contexts/my_company

# Dùng context
pbpaste | fabric --pattern summarize --context my_company
```

## Troubleshooting

### 1. Lỗi API key
```bash
fabric --setup
# Chọn lại API key
```

### 2. Lỗi model không tồn tại
```bash
fabric --listmodels
# Kiểm tra tên model chính xác
```

### 3. Update patterns
```bash
fabric --updatepatterns
```

## Advanced Usage

### 1. Dùng strategies
```bash
fabric --pattern summarize --strategy chain_of_thought
```

### 2. Dùng sessions
```bash
# Bắt đầu session
fabric --session my_session --pattern summarize

# Tiếp tục session
fabric --session my_session --pattern analyze_claims
```

### 3. REST API
```bash
# Start API server
fabric --serve --api-key your_key

# Gọi API
curl -X POST http://localhost:8080/api/chat \
  -H "Authorization: Bearer your_key" \
  -H "Content-Type: application/json" \
  -d '{"pattern": "summarize", "input": "text cần summarize"}'
```

## Kết Luận

Fabric là công cụ cực kỳ mạnh mẽ để tích hợp AI vào workflow hàng ngày. Bắt đầu với các patterns cơ bản, sau đó dần dần tạo custom patterns cho nhu cầu riêng của mày.

Điều quan trọng nhất là hiểu rằng Fabric giúp mày:
1. Tiết kiệm thời gian không phải nhớ prompt
2. Consistent trong chất lượng output
3. Dễ dàng chia sẻ và reuse patterns
4. Tích hợp AI vào mọi công việc

Chúc mày dùng Fabric hiệu quả!