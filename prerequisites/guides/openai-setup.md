# Hướng dẫn Setup OpenAI API

**Thời gian**: ~3 phút
**Chi phí**: PAY-AS-YOU-GO (Tính theo usage, ~$0.002/1K tokens cho GPT-3.5)
**Link**: https://platform.openai.com

---

## ⚡ Quick Summary

Mày cần:
- **OPENAI_API_KEY** - API key (format: `sk-...`)

---

## 📋 BƯỚC 1: Tạo Account

### 1.1. Truy cập OpenAI Platform
```
→ Vào https://platform.openai.com
→ Click "Sign up"
```

### 1.2. Sign Up
```
Có 3 options:
1. Continue with Google (Khuyến nghị - nhanh nhất)
2. Continue with Microsoft
3. Email/Password

→ Chọn một cách → Complete signup
→ Verify email nếu dùng email/password
```

### 1.3. Setup Billing (BẮT BUỘC)
```
⚠️ OpenAI YÊU CẦU BILLING ngay cả với free credits

→ Vào "Settings" → "Billing"
→ Click "Add payment method"
→ Nhập thẻ credit/debit card
→ Set usage limit (recommended: $10/month cho start)

💡 TIP: Mày sẽ có $5 free credits (hết hạn sau 3 tháng)
```

**✅ Checkpoint**: Billing setup complete

---

## 📋 BƯỚC 2: Tạo API Key

### 2.1. Vào API Keys
```
→ Click "API keys" trong sidebar trái
→ Hoặc: https://platform.openai.com/api-keys
```

### 2.2. Create New Key
```
→ Click "Create new secret key"
→ Popup hiện ra:
   - Name: [Đặt tên, ví dụ: "chat-app-dev"]
   - Permissions: "All" (hoặc custom nếu biết)
→ Click "Create secret key"
```

### 2.3. Copy Key
```
⚠️ QUAN TRỌNG: Key chỉ hiện MỘT LẦN DUY NHẤT

→ Copy ngay key: sk-proj-xxxxx...
→ Lưu vào text file tạm (hoặc paste cho AI ngay)

Nếu mất key:
→ Không thể recover
→ Phải delete key cũ và tạo key mới
```

**✅ Checkpoint**: Mày đã có `OPENAI_API_KEY=sk-proj-xxxxx...`

---

## 📋 BƯỚC 3: Cung cấp cho AI

### Paste vào chat:

```
OPENAI_API_KEY=sk-proj-xxxxx...
```

AI sẽ:
- ✅ Validate format (bắt đầu bằng `sk-`)
- ✅ Test connection (gọi API models endpoint)
- ✅ Lưu vào `.env.local`

---

## 💰 PRICING & USAGE

### Models và Giá

```
GPT-4 Turbo:
  Input: $0.01 / 1K tokens
  Output: $0.03 / 1K tokens

GPT-3.5 Turbo: (Khuyến nghị cho start)
  Input: $0.0005 / 1K tokens
  Output: $0.0015 / 1K tokens

Whisper (Speech-to-text):
  $0.006 / minute

DALL-E 3 (Image):
  $0.04 - $0.12 / image
```

### Estimate Chi phí

```
Example: Chat app với GPT-3.5
- 1000 messages/day
- Average 500 tokens/message
- Cost: ~$0.75/day = ~$22.5/month

💡 TIP: Bắt đầu với GPT-3.5, scale lên GPT-4 khi cần
```

### Set Usage Limits

```
→ Settings → Billing → Usage limits
→ Set "Hard limit": $10/month
→ Set "Soft limit": $5/month (email alert)

→ Save ✅
```

---

## 🔐 SECURITY NOTES

### Key Safety

```
✅ DO:
- Lưu key trong .env.local (KHÔNG commit)
- Add .env.local vào .gitignore
- Dùng environment variables
- Rotate keys định kỳ (3-6 tháng)

❌ DON'T:
- Hard-code key trong source code
- Commit key lên GitHub
- Share key publicly
- Dùng key trên client-side (expose được)
```

### Best Practice

```
Development: 1 key riêng
Production: 1 key riêng
CI/CD: 1 key riêng với permissions limited
```

---

## 🐛 TROUBLESHOOTING

### Issue: "You exceeded your current quota"
```
→ Hết free credits ($5)
→ Check billing: https://platform.openai.com/account/billing
→ Add payment method nếu chưa có
→ Top up hoặc đợi renewal
```

### Issue: "Invalid API key"
```
→ Check format: phải bắt đầu `sk-`
→ Check có typo không (copy lại)
→ Key có bị revoke không? Check API keys page
→ Tạo key mới nếu cần
```

### Issue: "Rate limit exceeded"
```
→ Free tier: 3 requests/minute
→ Paid tier: 3500 requests/minute

Solution:
- Implement retry với exponential backoff
- Reduce request frequency
- Upgrade tier nếu cần
```

### Issue: "Model not found"
```
→ Check model name đúng không:
   - gpt-3.5-turbo ✅
   - gpt-4-turbo ✅
   - chatgpt ❌ (không phải model name)

→ Check account có access model đó không
   (GPT-4 requires $1+ spent)
```

---

## 📊 MONITORING USAGE

### Check Usage
```
→ Settings → Usage
→ Xem:
   - Requests/day
   - Tokens used
   - Cost breakdown
   - By model
```

### Set Alerts
```
→ Billing → Usage limits → Email notifications
→ Set thresholds:
   - 25% usage: Low alert
   - 75% usage: High alert
   - 100% usage: Hard limit hit
```

---

## 🧪 TEST API KEY

### Quick Test

```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

Expect: JSON response với list models

### Test với Chat

```bash
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

Expect: JSON response với AI reply

---

## 🚀 NEXT STEPS

Sau khi setup xong:

1. **Validate**: AI test connection
2. **Store**: Key lưu `.env.local`
3. **Usage**: AI setup OpenAI client trong code
4. **Monitor**: Check usage daily first week

---

## 🔗 USEFUL LINKS

- API Keys: https://platform.openai.com/api-keys
- Docs: https://platform.openai.com/docs
- Pricing: https://openai.com/pricing
- Usage Dashboard: https://platform.openai.com/usage
- Examples: https://platform.openai.com/examples
- Rate Limits: https://platform.openai.com/docs/guides/rate-limits

---

**Gặp vấn đề?** Gõ "help openai [issue]" để được support.
