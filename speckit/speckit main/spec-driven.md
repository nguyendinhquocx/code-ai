# Phát triển Hướng Đặc tả (SDD)

## Sự Đảo Chiều Quyền Lực

Trong nhiều thập kỷ, mã nguồn luôn là vua. Các đặc tả phục vụ cho mã — chúng chỉ là giàn giáo mà ta dựng lên rồi vứt đi ngay khi “công việc thật sự” là viết code bắt đầu. Ta viết PRD (Tài liệu Yêu cầu Sản phẩm) để hướng dẫn phát triển, tạo tài liệu thiết kế để định hướng triển khai, vẽ sơ đồ để hình dung kiến trúc. Nhưng tất cả những thứ này luôn ở vị trí phụ thuộc so với mã. **Mã là chân lý**. Mọi thứ khác, tốt nhất cũng chỉ là ý định tốt đẹp. Mã là nguồn chân lý duy nhất, và khi nó tiến triển, đặc tả hiếm khi theo kịp. Vì tài sản (mã) và triển khai là một, nên việc có một triển khai song song mà không xây dựng lại từ mã là điều không dễ.

**Phát triển Hướng Đặc tả (SDD)** đảo ngược cấu trúc quyền lực này. Đặc tả **không phục vụ mã** — **mã phục vụ đặc tả**. Tài liệu Yêu cầu Sản phẩm (PRD) không còn là hướng dẫn để triển khai; nó là **nguồn sinh ra triển khai**. Kế hoạch kỹ thuật không còn là tài liệu để tham khảo khi viết code; chúng là **định nghĩa chính xác sinh ra mã**. Đây không phải là cải tiến tăng dần trong cách ta xây dựng phần mềm. Đây là **sự tái định nghĩa cơ bản** về thứ gì mới thật sự điều khiển quá trình phát triển.

Khoảng cách giữa đặc tả và triển khai đã làm khổ ngành phát triển phần mềm từ lúc khởi nguyên. Ta đã cố gắng bắc cầu bằng tài liệu tốt hơn, yêu cầu chi tiết hơn, quy trình nghiêm ngặt hơn. Những cách tiếp cận này thất bại vì chúng chấp nhận khoảng cách đó là điều không tránh khỏi. Chúng chỉ cố thu hẹp chứ không bao giờ loại bỏ nó. **SDD loại bỏ khoảng cách đó** bằng cách khiến đặc tả và kế hoạch triển khai cụ thể được sinh ra từ đặc tả trở nên **thực thi được**. Khi đặc tả và kế hoạch triển khai sinh ra mã, sẽ **không còn khoảng cách** — chỉ còn **sự chuyển hóa**.

Sự chuyển hóa này giờ đây là khả thi nhờ AI có thể hiểu và triển khai các đặc tả phức tạp, đồng thời tạo ra các kế hoạch triển khai chi tiết. Nhưng việc sinh mã thô từ AI mà không có cấu trúc sẽ tạo ra hỗn loạn. **SDD cung cấp cấu trúc đó** thông qua các đặc tả và kế hoạch triển khai tiếp theo — phải **chính xác, đầy đủ và không mơ hồ** đến mức có thể sinh ra hệ thống hoạt động được. **Đặc tả trở thành hiện vật chính**. Mã trở thành **biểu hiện của nó** (qua kế hoạch triển khai) trong một ngôn ngữ và framework cụ thể.

Trong thế giới mới này, **duy trì phần mềm nghĩa là phát triển đặc tả**. Ý định của nhóm phát triển được thể hiện bằng ngôn ngữ tự nhiên (“phát triển hướng ý định”), tài sản thiết kế, các nguyên tắc cốt lõi và các hướng dẫn khác. Ngôn ngữ chung của quá trình phát triển được nâng lên một cấp độ cao hơn, và mã chỉ là cách tiếp cận “dặm cuối”.

**Gỡ lỗi nghĩa là sửa đặc tả và kế hoạch triển khai** sinh ra mã sai. **Tái cấu trúc nghĩa là sắp xếp lại cho rõ ràng hơn**. Toàn bộ quy trình phát triển được tổ chức lại quanh đặc tả như **nguồn chân lý trung tâm**, với kế hoạch triển khai và mã là **kết quả được sinh lại liên tục**. Việc cập nhật ứng dụng với tính năng mới hoặc tạo triển khai song song mới vì ta là những sinh vật sáng tạo, nghĩa là **quay lại đặc tả và tạo kế hoạch triển khai mới**. Quy trình này do đó là **0 → 1, (1', ..), 2, 3, N**.

Nhóm phát triển tập trung vào **sự sáng tạo, thử nghiệm và tư duy phản biện** của họ.

## Quy trình SDD trong Thực tế

Quy trình bắt đầu bằng một ý tưởng — thường mơ hồ và chưa đầy đủ. Qua đối thoại lặp đi lặp lại với AI, ý tưởng này trở thành một PRD toàn diện. AI đặt câu hỏi làm rõ, xác định các trường hợp biên và giúp định nghĩa các tiêu chí chấp nhận chính xác. Điều mà trong phát triển truyền thống có thể mất vài ngày họp và viết tài liệu, giờ đây diễn ra trong vài giờ làm việc đặc tả tập trung. Điều này **chuyển đổi vòng đời phát triển phần mềm truyền thống (SDLC)** — yêu cầu và thiết kế trở thành **hoạt động liên tục** thay vì các giai đoạn rời rạc. Quy trình này hỗ trợ cách làm việc nhóm, nơi các đặc tả được nhóm xem xét, phiên bản hóa, tạo trên các nhánh và hợp nhất.

Khi product manager cập nhật tiêu chí chấp nhận, các kế hoạch triển khai sẽ tự động cảnh báo những quyết định kỹ thuật bị ảnh hưởng. Khi kiến trúc sư phát hiện ra mẫu thiết kế tốt hơn, PRD sẽ được cập nhật để phản ánh các khả năng mới.

Trong suốt quá trình đặc tả này, các **agent nghiên cứu** thu thập bối cảnh then chốt. Chúng điều tra tính tương thích thư viện, điểm chuẩn hiệu năng và các hệ quả bảo mật. Các ràng buộc tổ chức được phát hiện và áp dụng tự động — tiêu chuẩn cơ sở dữ liệu, yêu cầu xác thực và chính sách triển khai của công ty bạn được tích hợp liền mạch vào mọi đặc tả.

Từ PRD, AI sinh ra các kế hoạch triển khai ánh xạ yêu cầu sang các quyết định kỹ thuật. Mỗi lựa chọn công nghệ đều có lý do được ghi lại. Mỗi quyết định kiến trúc đều truy ngược về các yêu cầu cụ thể. Trong suốt quá trình này, **xác thực tính nhất quán** liên tục cải thiện chất lượng. AI phân tích đặc tả để phát hiện sự mơ hồ, mâu thuẫn và lỗ hổng — **không phải như một cổng kiểm tra một lần**, mà như một quá trình tinh chỉnh liên tục.

Việc sinh mã bắt đầu ngay khi đặc tả và kế hoạch triển khai đủ ổn định, nhưng **chúng không cần phải “hoàn chỉnh”**. Các lần sinh đầu tiên có thể mang tính khám phá — kiểm tra xem đặc tả có hợp lý trong thực tế hay không. Các khái niệm miền trở thành mô hình dữ liệu. Các câu chuyện người dùng trở thành endpoint API. Các kịch bản chấp nhận trở thành kiểm thử. Điều này **hợp nhất phát triển và kiểm thử thông qua đặc tả** — các kịch bản kiểm thử không được viết sau mã, mà là **một phần của đặc tả** sinh ra cả triển khai lẫn kiểm thử.

Vòng lặp phản hồi mở rộng ra ngoài giai đoạn phát triển ban đầu. Các số liệu và sự cố trong production không chỉ kích hoạt hotfix — chúng **cập nhật đặc tả cho lần sinh lại tiếp theo**. Các nút cổ chai hiệu năng trở thành yêu cầu phi chức năng mới. Các lỗ hổng bảo mật trở thành ràng buộc ảnh hưởng đến mọi lần sinh sau. **Điệu nhảy lặp đi lặp lại giữa đặc tả, triển khai và thực tế vận hành** chính là nơi hiểu biết thật sự xuất hiện và nơi SDLC truyền thống biến thành **sự tiến hóa liên tục**.

## Tại sao SDD Quan trọng Ngay Bây Giờ

Ba xu hướng khiến SDD không chỉ khả thi mà còn **cần thiết**:

**Thứ nhất**, khả năng AI đã đạt đến ngưỡng mà các đặc tả ngôn ngữ tự nhiên có thể **đáng tin cậy sinh ra mã hoạt động được**. Đây không phải là thay thế lập trình viên — mà là **khuếch đại hiệu quả của họ** bằng cách tự động hóa việc dịch cơ học từ đặc tả sang triển khai. Nó có thể khuếch đại sự khám phá và sáng tạo, hỗ trợ việc “bắt đầu lại” dễ dàng, và hỗ trợ việc thêm, bớt và tư duy phản biện.

**Thứ hai**, độ phức tạp phần mềm tiếp tục **tăng theo cấp số mũ**. Các hệ thống hiện đại tích hợp hàng chục dịch vụ, framework và phụ thuộc. Việc giữ cho tất cả các thành phần này **phù hợp với ý định ban đầu** thông qua quy trình thủ công ngày càng khó khăn. SDD cung cấp sự **căn chỉnh có hệ thống** thông qua việc sinh mã hướng đặc tả. Các framework có thể tiến hóa để hỗ trợ AI trước tiên, thay vì con người, hoặc được thiết kế quanh các thành phần có thể tái sử dụng.

**Thứ ba**, tốc độ thay đổi **tăng tốc**. Yêu cầu thay đổi nhanh hơn bao giờ hết. Việc xoay trục (pivot) không còn là ngoại lệ — mà là điều **được kỳ vọng**. Phát triển sản phẩm hiện đại đòi hỏi lặp nhanh dựa trên phản hồi người dùng, điều kiện thị trường và áp lực cạnh tranh. Phát triển truyền thống coi những thay đổi này là **sự gián đoạn**. Mỗi lần pivot đòi hỏi phải lan truyền thay đổi thủ công qua tài liệu, thiết kế và mã. Kết quả là hoặc **cập nhật chậm và cẩn thận** làm giới hạn tốc độ, hoặc **thay đổi nhanh và liều lĩnh** tích lũy nợ kỹ thuật.

SDD có thể hỗ trợ các thí nghiệm **what-if/mô phỏng**: “Nếu ta cần triển khai lại hoặc thay đổi ứng dụng để thúc đẩy nhu cầu kinh doanh bán thêm áo thun, ta sẽ triển khai và thử nghiệm như thế nào?”

SDD **biến các thay đổi yêu cầu từ trở ngại thành quy trình bình thường**. Khi đặc tả điều khiển triển khai, các lần pivot trở thành **sự sinh lại có hệ thống** thay vì viết lại thủ công. Thay đổi một yêu cầu cốt lõi trong PRD, và các kế hoạch triển khai bị ảnh hưởng sẽ tự động cập nhật. Sửa đổi một câu chuyện người dùng, và các endpoint API tương ứng sẽ được sinh lại. Đây không chỉ là về phát triển ban đầu — mà là về **duy trì tốc độ kỹ thuật** qua những thay đổi không tránh khỏi.

## Các Nguyên Tắc Cốt Lõi

- **Đặc tả là ngôn ngữ chung**: Đặc tả trở thành hiện vật chính. Mã trở thành biểu hiện của nó trong một ngôn ngữ và framework cụ thể. Duy trì phần mềm nghĩa là phát triển đặc tả.
- **Đặc tả thực thi được**: Đặc tả phải chính xác, đầy đủ và không mơ hồ đến mức có thể sinh ra hệ thống hoạt động được. Điều này loại bỏ khoảng cách giữa ý định và triển khai.
- **Tinh chỉnh liên tục**: Xác thực tính nhất quán diễn ra liên tục, không phải như một cổng kiểm tra một lần. AI phân tích đặc tả để phát hiện sự mơ hồ, mâu thuẫn và lỗ hổng như một quá trình liên tục.
- **Bối cảnh hướng nghiên cứu**: Các agent nghiên cứu thu thập bối cảnh then chốt trong suốt quá trình đặc tả, điều tra các lựa chọn kỹ thuật, hệ quả hiệu năng và các ràng buộc tổ chức.
- **Phản hồi hai chiều**: Thực tế vận hành thông báo cho sự tiến hóa đặc tả. Số liệu, sự cố và bài học vận hành trở thành đầu vào để tinh chỉnh đặc tả.
- **Phân nhánh để khám phá**: Sinh ra nhiều cách triển khai từ cùng một đặc tả để khám phá các mục tiêu tối ưu hóa khác nhau — hiệu năng, khả năng bảo trì, trải nghiệm người dùng, chi phí.

## Các Cách Tiếp Cận Triển Khai

Hiện nay, thực hành SDD đòi hỏi **lắp ráp các công cụ hiện có** và **duy trì kỷ luật** trong suốt quá trình. Phương pháp luận này có thể được thực hành với:

- Trợ lý AI để phát triển đặc tả lặp đi lặp lại
- Agent nghiên cứu để thu thập bối cảnh kỹ thuật
- Công cụ sinh mã để dịch đặc tả sang triển khai
- Hệ thống kiểm soát phiên bản được điều chỉnh cho quy trình hướng đặc tả
- Kiểm tra tính nhất quán thông qua phân tích AI trên các tài liệu đặc tả

Chìa khóa là **xem đặc tả là nguồn chân lý**, với mã là **kết quả được sinh ra** phục vụ đặc tả, chứ không phải ngược lại.

## Tối ưu SDD bằng Các Lệnh

Phương pháp luận SDD được tăng cường đáng kể thông qua **ba lệnh mạnh mẽ** tự động hóa quy trình **đặc tả → lập kế hoạch → phân nhiệm vụ**:

### Lệnh `/speckit.specify`

Lệnh này biến mô tả tính năng đơn giản (prompt người dùng) thành một đặc tả đầy đủ, có cấu trúc với quản lý kho tự động:

- **Đánh số tính năng tự động**: Quét các đặc tả hiện có để xác định số tính năng tiếp theo (ví dụ: 001, 002, 003)
- **Tạo nhánh**: Tạo tên nhánh ngữ nghĩa từ mô tả của bạn và tạo nhánh tự động
- **Sinh từ template**: Sao chép và tùy chỉnh template đặc tả tính năng với yêu cầu của bạn
- **Cấu trúc thư mục**: Tạo cấu trúc `specs/[tên-nhánh]/` phù hợp cho tất cả các tài liệu liên quan

### Lệnh `/speckit.plan`

Khi đặc tả tính năng đã tồn tại, lệnh này tạo ra kế hoạch triển khai toàn diện:

- **Phân tích đặc tả**: Đọc và hiểu yêu cầu tính năng, câu chuyện người dùng và tiêu chí chấp nhận
- **Tuân thủ hiến chương**: Đảm bảo phù hợp với hiến chương dự án và các nguyên tắc kiến trúc
- **Dịch sang kỹ thuật**: Chuyển đổi yêu cầu nghiệp vụ sang kiến trúc kỹ thuật và chi tiết triển khai
- **Tài liệu chi tiết**: Sinh các tài liệu hỗ trợ cho mô hình dữ liệu, hợp đồng API và kịch bản kiểm thử
- **Xác thực nhanh**: Tạo hướng dẫn khởi động nhanh ghi lại các kịch bản xác thực then chốt

### Lệnh `/speckit.tasks`

Sau khi có kế hoạch, lệnh này phân tích kế hoạch và các tài liệu thiết kế liên quan để sinh ra danh sách nhiệm vụ có thể thực hiện:

- **Đầu vào**: Đọc `plan.md` (bắt buộc) và, nếu có, `data-model.md`, `contracts/`, và `research.md`
- **Suy ra nhiệm vụ**: Chuyển đổi hợp đồng, thực thể và kịch bản thành các nhiệm vụ cụ thể
- **Song song hóa**: Đánh dấu các nhiệm vụ độc lập bằng `[P]` và phác thảo các nhóm song song an toàn
- **Đầu ra**: Ghi `tasks.md` vào thư mục tính năng, sẵn sàng để agent Nhiệm vụ thực thi

### Ví dụ: Xây dựng Tính năng Chat

Dưới đây là cách các lệnh này biến đổi quy trình phát triển truyền thống:

**Cách tiếp cận truyền thống:**

1. Viết PRD trong tài liệu (2–3 giờ)
2. Tạo tài liệu thiết kế (2–3 giờ)
3. Thiết lập cấu trúc dự án thủ công (30 phút)
4. Viết đặc tả kỹ thuật (3–4 giờ)
5. Tạo kế hoạch kiểm thử (2 giờ)

**Tổng cộng: ~12 giờ làm việc tài liệu**

**Cách tiếp cận SDD với các lệnh:**

```text
# Bước 1: Tạo đặc tả tính năng (5 phút)
/speckit.specify Hệ thống chat thời gian thực với lịch sử tin nhắn và trạng thái người dùng

# Điều này tự động:
# - Tạo nhánh "003-chat-system"
# - Sinh specs/003-chat-system/spec.md
# - Điền vào đó các yêu cầu có cấu trúc

# Bước 2: Sinh kế hoạch triển khai (5 phút)
/speckit.plan WebSocket cho nhắn tin thời gian thực, PostgreSQL cho lịch sử, Redis cho trạng thái

# Bước 3: Sinh nhiệm vụ có thể thực hiện (5 phút)
/speckit.tasks

# Điều này tự động tạo:
# - specs/003-chat-system/plan.md
# - specs/003-chat-system/research.md (so sánh thư viện WebSocket)
# - specs/003-chat-system/data-model.md (lược đồ Tin nhắn và Người dùng)
# - specs/003-chat-system/contracts/ (sự kiện WebSocket, endpoint REST)
# - specs/003-chat-system/quickstart.md (kịch bản xác thực then chốt)
# - specs/003-chat-system/tasks.md (danh sách nhiệm vụ suy ra từ kế hoạch)
```

**Trong 15 phút, bạn có:**

- Một đặc tả tính năng đầy đủ với câu chuyện người dùng và tiêu chí chấp nhận
- Một kế hoạch triển khai chi tiết với lựa chọn công nghệ và lý do
- Hợp đồng API và mô hình dữ liệu sẵn sàng để sinh mã
- Kịch bản kiểm thử toàn diện cho cả kiểm thử tự động và thủ công
- Tất cả tài liệu được phiên bản hóa đúng trong một nhánh tính năng

## Sức Mạnh của Tự Động Hóa Có Cấu Trúc

Các lệnh này không chỉ tiết kiệm thời gian — chúng **thực thi tính nhất quán và đầy đủ**:

- **Không bỏ sót chi tiết**: Template đảm bảo mọi khía cạnh được xem xét, từ yêu cầu phi chức năng đến xử lý lỗi
- **Quyết định có thể truy vết**: Mỗi lựa chọn kỹ thuật đều liên kết ngược về các yêu cầu cụ thể
- **Tài liệu sống**: Đặc tả luôn đồng bộ với mã vì chúng sinh ra mã
- **Lặp nhanh**: Thay đổi yêu cầu và sinh lại kế hoạch trong vài phút, không phải vài ngày

Các lệnh này hiện thực hóa các nguyên tắc SDD bằng cách **xem đặc tả là hiện vật thực thi được** thay vì tài liệu tĩnh. Chúng biến quá trình đặc tả từ **một điều ác cần thiết** thành **lực lượng điều khiển phát triển**.

## Chất Lượng Hướng Template: Cách Cấu Trúc Hạn Chế LLM để Có Kết Quả Tốt Hơn

Sức mạnh thật sự của các lệnh này không chỉ nằm ở tự động hóa, mà ở cách **các template hướng dẫn hành vi LLM** hướng tới các đặc tả chất lượng cao hơn. Các template đóng vai trò như **prompt tinh vi** hạn chế đầu ra của LLM theo những cách hiệu quả:

### 1. Ngăn chi tiết triển khai quá sớm

Template đặc tả tính năng **rõ ràng chỉ đạo**:

- ✅ Tập trung vào **NGƯỜI DÙNG CẦN GÌ** và **TẠI SAO**
- ❌ Tránh **CÁCH TRIỂN KHAI** (không đề cập stack công nghệ, API, cấu trúc mã)

Ràng buộc này buộc LLM **duy trì mức độ trừu tượng phù hợp**. Khi LLM có thể tự nhiên nhảy vào “triển khai bằng React với Redux”, template giữ nó tập trung vào “người dùng cần cập nhật dữ liệu thời gian thực”. Sự tách biệt này đảm bảo đặc tả **ổn định ngay cả khi công nghệ triển khai thay đổi**.

### 2. Ép buộc đánh dấu sự không chắc chắn rõ ràng

Cả hai template đều **bắt buộc sử dụng đánh dấu `[CẦN LÀM RÕ]`**:

Khi tạo đặc tả từ prompt người dùng:
1. **Đánh dấu mọi sự mơ hồ**: Dùng `[CẦN LÀM RÕ: câu hỏi cụ thể]`
2. **Không đoán**: Nếu prompt không nêu rõ điều gì, hãy đánh dấu nó

Điều này ngăn hành vi phổ biến của LLM là **đưa ra giả định hợp lý nhưng có thể sai**. Thay vì đoán “hệ thống đăng nhập” dùng xác thực email/mật khẩu, LLM phải đánh dấu `[CẦN LÀM RÕ: phương thức xác thực chưa được nêu – email/mật khẩu, SSO, OAuth?]`.

### 3. Tư duy có cấu trúc qua checklist

Các template bao gồm **checklist toàn diện** hoạt động như “unit test cho đặc tả”:

#### Tính đầy đủ yêu cầu
- [ ] Không còn đánh dấu `[CẦN LÀM RÕ]`
- [ ] Yêu cầu có thể kiểm thử và không mơ hồ
- [ ] Tiêu chí thành công có thể đo lường được

Các checklist này buộc LLM **tự rà soát đầu ra một cách có hệ thống**, phát hiện các lỗ hổng có thể bị bỏ qua. Nó giống như cung cấp cho LLM một **khung đảm bảo chất lượng**.

### 4. Tuân thủ hiến chương qua các cổng kiểm tra

Template kế hoạch triển khai **thực thi các nguyên tắc kiến trúc** qua các **cổng kiểm tra giai đoạn**:

#### Cổng Đơn giản (Điều VII)
- [ ] Dùng ≤3 dự án?
- [ ] Không “chuẩn bị cho tương lai”?

#### Cổng Chống Trừu tượng hóa (Điều VIII)
- [ ] Dùng trực tiếp tính năng framework?
- [ ] Biểu diễn mô hình đơn nhất?

Các cổng này **ngăn việc thiết kế quá mức** bằng cách buộc LLM **biện minh rõ ràng cho mọi độ phức tạp**. Nếu một cổng không đạt, LLM phải ghi lại lý do trong phần “Theo dõi Độ phức tạp”, tạo ra trách nhiệm giải trình cho các quyết định kiến trúc.

### 5. Quản lý chi tiết theo cấp bậc

Các template **thực thi kiến trúc thông tin phù hợp**:

**QUAN TRỌNG**: Kế hoạch triển khai này phải giữ ở mức tổng quan và dễ đọc.  
Mọi đoạn mã mẫu, thuật toán chi tiết hoặc đặc tả kỹ thuật mở rộng  
phải được đặt trong file `implementation-details/` phù hợp.

Điều này ngăn vấn đề phổ biến là đặc tả trở thành **mớ mã khó đọc**. LLM học cách **duy trì mức độ chi tiết phù hợp**, tách độ phức tạp ra các file riêng trong khi giữ tài liệu chính dễ điều hướng.

### 6. Tư duy kiểm thử trước

Template triển khai **thực thi phát triển kiểm thử trước**:

#### Thứ tự tạo file
1. Tạo `contracts/` với đặc tả API
2. Tạo file kiểm thử theo thứ tự: hợp đồng → tích hợp → e2e → unit
3. Tạo file nguồn để làm cho kiểm thử pass

Ràng buộc thứ tự này đảm bảo LLM **nghĩ về khả năng kiểm thử và hợp đồng trước khi triển khai**, dẫn đến các đặc tả **mạnh mẽ và có thể xác minh hơn**.

### 7. Ngăn các tính năng suy đoán

Các template **rõ ràng không khuyến khích suy đoán**:

- [ ] Không có tính năng suy đoán hoặc “có thể cần”
- [ ] Mọi giai đoạn đều có điều kiện tiên quyết và kết quả rõ ràng

Điều này ngăn LLM **thêm các tính năng “hay ho”** làm phức tạp triển khai. Mọi tính năng phải **truy ngược về một câu chuyện người dùng cụ thể** với tiêu chí chấp nhận rõ ràng.

## Hiệu Ứng Tổng Hợp

Các ràng buộc này **hoạt động cùng nhau** để tạo ra các đặc tả:

- **Đầy đủ**: Checklist đảm bảo không bỏ sót gì
- **Không mơ hồ**: Đánh dấu làm rõ ép buộc làm nổi bật sự không chắc chắn
- **Có thể kiểm thử**: Tư duy kiểm thử trước được tích hợp vào quy trình
- **Dễ bảo trì**: Mức độ trừu tượng và phân cấp thông tin phù hợp
- **Có thể triển khai**: Các giai đoạn rõ ràng với kết quả cụ thể

Các template **biến LLM từ một người viết sáng tạo thành một kỹ sư đặc tả có kỷ luật**, định hướng khả năng của nó hướng tới việc **sản xuất đặc tả thực thi được, chất lượng cao một cách nhất quán** — thật sự điều khiển phát triển.

## Nền Tảng Hiến Chương: Thực Thi Kỷ Luật Kiến Trúc

Ở trung tâm của SDD nằm một **hiến chương** — tập hợp các nguyên tắc bất biến điều khiển cách đặc tả trở thành mã. Hiến chương (`memory/constitution.md`) đóng vai trò như **ADN kiến trúc** của hệ thống, đảm bảo mọi triển khai được sinh ra đều duy trì tính nhất quán, đơn giản và chất lượng.

### Chín Điều của Phát Triển

Hiến chương định nghĩa chín điều định hình mọi khía cạnh của quy trình phát triển:

**Điều I: Nguyên tắc Thư viện Trước Tiên**  
Mọi tính năng phải bắt đầu như một thư viện độc lập — không có ngoại lệ. Điều này ép buộc thiết kế mô-đun ngay từ đầu:

> Mọi tính năng trong Specify PHẢI bắt đầu tồn tại như một thư viện độc lập.  
> Không tính năng nào được triển khai trực tiếp trong mã ứng dụng mà không  
> trước tiên được trừu tượng hóa thành một thành phần thư viện có thể tái sử dụng.

Nguyên tắc này đảm bảo đặc tả sinh ra mã **mô-đun, có thể tái sử dụng** thay vì ứng dụng đơn khối. Khi LLM sinh kế hoạch triển khai, nó phải cấu trúc tính năng như các thư viện với ranh giới rõ ràng và phụ thuộc tối thiểu.

**Điều II: Bắt buộc Giao diện CLI**  
Mọi thư viện phải phơi bày chức năng của nó qua giao diện dòng lệnh:

> Mọi giao diện CLI PHẢI:  
> - Nhận văn bản làm đầu vào (qua stdin, tham số hoặc file)  
> - Xuất văn bản làm đầu ra (qua stdout)  
> - Hỗ trợ định dạng JSON để trao đổi dữ liệu có cấu trúc

Điều này thực thi **khả năng quan sát và kiểm thử**. LLM không thể giấu chức năng bên trong các lớp mờ ám — mọi thứ phải **truy cập và xác minh được** qua giao diện dựa trên văn bản.

**Điều III: Nguyên tắc Kiểm thử Trước Tiên**  
Điều mang tính biến đổi nhất — **không có mã trước khi có kiểm thử**:

> Điều này KHÔNG THỂ THƯƠNG LƯỢNG: Mọi triển khai PHẢI tuân theo Phát triển Hướng Kiểm thử (TDD) nghiêm ngặt.  
> Không được viết mã triển khai trước khi:  
> 1. Kiểm thử unit được viết  
> 2. Kiểm thử được người dùng xác nhận  
> 3. Kiểm thử được xác nhận là THẤT BẠI (pha Đỏ)

Điều này **hoàn toàn đảo ngược** việc sinh mã AI truyền thống. Thay vì sinh mã và hy vọng nó hoạt động, LLM phải **trước tiên sinh ra các kiểm thử toàn diện** định nghĩa hành vi, **được phê duyệt**, và **chỉ sau đó** mới sinh triển khai.

**Điều VII & VIII: Đơn giản và Chống Trừu tượng hóa**  
Hai điều này kết hợp để **chống thiết kế quá mức**:

> Mục 7.3: Cấu trúc Dự án Tối thiểu  
> - Tối đa 3 dự án cho triển khai ban đầu  
> - Dự án bổ sung cần lý do được ghi lại

> Mục 8.1: Tin tưởng Framework  
> - Dùng trực tiếp tính năng framework thay vì bao bọc chúng

Khi LLM có thể tự nhiên tạo ra các lớp trừu tượng phức tạp, các điều này buộc nó **biện minh cho mọi lớp độ phức tạp**. Template kế hoạch triển khai có “Cổng Kiểm tra Giai đoạn -1” thực thi trực tiếp các nguyên tắc này.

**Điều IX: Kiểm thử Hướng Tích hợp Trước Tiên**  
Ưu tiên kiểm thử trong môi trường thực tế hơn kiểm thử unit cô lập:

> Kiểm thử PHẢI dùng môi trường thực tế:  
> - Ưu tiên cơ sở dữ liệu thật thay vì mock  
> - Dùng instance dịch vụ thật thay vì stub  
> - Kiểm thử hợp đồng bắt buộc trước khi triển khai

Điều này đảm bảo mã được sinh ra **hoạt động trong thực tế**, không chỉ trên lý thuyết.

### Thực thi Hiến chương qua Template

Template kế hoạch triển khai **vận hành hóa các điều này** qua các điểm kiểm tra cụ thể:

#### Giai đoạn -1: Các Cổng Trước Triển khai
##### Cổng Đơn giản (Điều VII)
- [ ] Dùng ≤3 dự án?
- [ ] Không “chuẩn bị cho tương lai”?

##### Cổng Chống Trừu tượng hóa (Điều VIII)
- [ ] Dùng trực tiếp framework?
- [ ] Biểu diễn mô hình đơn nhất?

##### Cổng Hướng Tích hợp (Điều IX)
- [ ] Hợp đồng được định nghĩa?
- [ ] Kiểm thử hợp đồng được viết?

Các cổng này hoạt động như **kiểm tra biên dịch cho các nguyên tắc kiến trúc**. LLM **không thể tiếp tục** nếu không vượt qua các cổng hoặc ghi lại các ngoại lệ được biện minh trong phần “Theo dõi Độ phức tạp”.

### Sức Mạnh của Các Nguyên Tắc Bất Biến

Sức mạnh của hiến chương nằm ở **tính bất biến** của nó. Trong khi chi tiết triển khai có thể tiến hóa, các nguyên tắc cốt lõi **vẫn không đổi**. Điều này cung cấp:

- **Nhất quán theo thời gian**: Mã được sinh hôm nay tuân theo cùng nguyên tắc với mã được sinh năm sau
- **Nhất quán qua các LLM**: Các mô hình AI khác nhau tạo ra mã **tương thích kiến trúc**
- **Toàn vẹn kiến trúc**: Mọi tính năng **củng cố chứ không làm suy yếu** thiết kế hệ thống
- **Đảm bảo chất lượng**: Các nguyên tắc kiểm thử trước, thư viện trước và đơn giản đảm bảo mã **dễ bảo trì**

### Tiến hóa Hiến chương

Mặc dù các nguyên tắc là bất biến, **việc áp dụng chúng có thể tiến hóa**:

> Mục 4.2: Quy trình Sửa đổi  
> Việc sửa đổi hiến chương này yêu cầu:  
> - Ghi lại rõ ràng lý do thay đổi  
> - Được người duy trì dự án xem xét và phê duyệt  
> - Đánh giá tính tương thích ngược

Điều này cho phép phương pháp luận **học hỏi và cải thiện** trong khi duy trì sự ổn định. Hiến chương cho thấy sự tiến hóa của chính nó qua các sửa đổi có ngày tháng, chứng minh cách các nguyên tắc có thể được tinh chỉnh dựa trên kinh nghiệm thực tế.

### Vượt Quá Quy Tắc: Một Triết Lý Phát Triển

Hiến chương không chỉ là **sách luật** — nó là **triết lý** định hình cách LLM nghĩ về việc sinh mã:

- **Khả năng quan sát hơn là mờ ám**: Mọi thứ phải kiểm tra được qua giao diện CLI
- **Đơn giản hơn là thông minh**: Bắt đầu đơn giản, chỉ thêm độ phức tạp khi được chứng minh là cần thiết
- **Tích hợp hơn là cô lập**: Kiểm thử trong môi trường thực, không phải môi trường nhân tạo
- **Mô-đun hơn là đơn khối**: Mọi tính năng là một thư viện với ranh giới rõ ràng

Bằng cách nhúng các nguyên tắc này vào quy trình đặc tả và lập kế hoạch, SDD đảm bảo mã được sinh ra **không chỉ hoạt động** — mà còn **dễ bảo trì, có thể kiểm thử và âm thanh về kiến trúc**. Hiến chương **biến AI từ một công cụ sinh mã thành một đối tác kiến trúc** tôn trọng và củng cố các nguyên tắc thiết kế hệ thống.

## Sự Biến Đổi

Đây không phải là về việc **thay thế lập trình viên** hay **tự động hóa sự sáng tạo**. Đây là về việc **khuếch đại năng lực con người** bằng cách tự động hóa việc dịch cơ học. Đây là về việc tạo ra **vòng lặp phản hồi chặt chẽ** nơi đặc tả, nghiên cứu và mã **tiến hóa cùng nhau**, mỗi lần lặp mang lại sự hiểu biết sâu sắc hơn và sự căn chỉnh tốt hơn giữa ý định và triển khai.

Phát triển phần mềm cần **các công cụ tốt hơn** để duy trì sự căn chỉnh giữa ý định và triển khai. **SDD cung cấp phương pháp luận** để đạt được sự căn chỉnh này thông qua các đặc tả thực thi được — **sinh ra mã** thay vì chỉ hướng dẫn nó.

---