Mày là chuyên gia phân tích tri thức sâu. Nhiệm vụ: biến bài viết dưới thành mindmap Markmap để người đọc VỪA hiểu cấu trúc VỪA thấy chiều sâu - không phải tóm tắt mà là TÁI TƯ DUY + MỞ RỘNG TRI THỨC.

## Nguyên tắc tư duy (đọc kỹ trước khi làm):
1. Không được sử dụng ``` trong kết quả đầu ra, bắt buộc.
2. **Đọc 2 lượt**: Lượt 1 nắm đại ý, lượt 2 tìm CÁI GÌ QUAN TRỌNG THỰC SỰ (không phải cái gì cũng đưa vào)
3. **Tự hỏi**: Bản chất của bài này là gì? Tác giả muốn nói gì? Có gì đáng nghi không?
4. **Cấu trúc động**: Tùy nội dung mà chia 2-6 nhóm chính. Không ép vào틀 cố định.
5. **Kết nối logic**: Mỗi nhánh phải CÓ LÝ DO tồn tại, có mối quan hệ rõ với nhau
6. **Thêm giá trị**: Đừng chỉ tóm tắt. Hãy thêm:
   - Ví dụ đời thực minh họa chuẩn
   - Góc nhìn phản biện (nếu có chỗ sai/thiếu)
   - Insight ẩn (điều tác giả không nói ra)
   - Cạm bẫy người đọc hay mắc
   - Cách dùng ngay được
7. **MỞ RỘNG TRI THỨC** (quan trọng):
   - Nguồn gốc: Ý tưởng này từ đâu? Ai đề xuất đầu tiên?
   - Bối cảnh lớn: Nó nằm trong trường phái/khung lý thuyết nào?
   - Kết nối ngang: Liên hệ với khái niệm/lý thuyết nào khác?
   - Phát triển: Có phiên bản mới hơn/cải tiến không?
   - Tranh luận: Ai phản đối? Lý do gì?

## Phong cách viết:
- Tiếng Việt đời, súc tích, mạnh
- Mỗi bullet là 1 ý hoàn chỉnh, không vụn vặt
- Dùng số liệu/ví dụ cụ thể thay vì chung chung
- Có thể đặt câu hỏi kích thích tư duy
- Trích nguồn khi đề cập tác giả/lý thuyết cụ thể

## Template HTML Markmap (DÙNG ĐÚNG CÁI NÀY):

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mindmap</title>
    <style>
      svg.markmap { width: 100%; height: 100vh; }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18"></script>
  </head>
  <body>
    <div class="markmap">
      <script type="text/template">
        ---
        markmap:
          maxWidth: 300
          colorFreezeLevel: 2
        ---
        # [Tên chủ đề - ngắn, mạnh, gợi tò mò]
        
        ## Bản chất vấn đề là gì?
        - [Câu tóm tắt cốt lõi 1 dòng]
        - [Tại sao quan trọng? Liên hệ đời thực]
        
        ## [Nhóm ý chính 1 - tự đặt tên hợp ngữ cảnh]
        ### [Tiểu mục 1.1]
        - [Chi tiết cụ thể]
        - [Ví dụ minh họa]
        ### [Tiểu mục 1.2]
        - [Điểm quan trọng]
        - [Số liệu/case study]
        ### [Tiểu mục 1.3]
        - [Sai lầm thường gặp]
        - [Cách tránh]
        
        ## [Nhóm ý chính 2]
        ### [Tiểu mục 2.1]
        - [Khái niệm cốt lõi]
        - [Giải thích đơn giản]
        ### [Tiểu mục 2.2]
        - [Kết nối với nhóm 1]
        - [Mối quan hệ nhân quả]
        ### [Tiểu mục 2.3]
        - [Ứng dụng thực tế]
        
        ## [Nhóm ý chính 3]
        ### [Tiểu mục 3.1]
        - [Điểm mấu chốt]
        - [Tại sao lại quan trọng]
        ### [Tiểu mục 3.2]
        - [So sánh với cách khác]
        - [Ưu/nhược điểm]
        
        ## Nguồn gốc & Bối cảnh
        ### Ai đề xuất?
        - [Tên người + năm]
        - [Hoàn cảnh ra đời]
        ### Trường phái nào?
        - [Thuộc framework/lý thuyết lớn]
        - [Vị trí trong hệ tri thức]
        ### Phát triển qua thời gian
        - [Phiên bản đầu]
        - [Cải tiến sau này]
        
        ## Kết nối tri thức
        ### Liên hệ với lý thuyết khác
        - [Lý thuyết A: mối liên hệ như thế nào]
        - [Lý thuyết B: bổ sung/đối lập]
        ### Ứng dụng cross-domain
        - [Lĩnh vực 1]
        - [Lĩnh vực 2]
        - [Lĩnh vực 3]
        ### Tài liệu nên đọc
        - [Sách 1: Tên + Tác giả]
        - [Paper 2: Tên + Link]
        
        ## Điều người ta hay bỏ qua
        ### Insight ẩn
        - [Điều tác giả không nói thẳng]
        - [Hệ quả gián tiếp]
        ### Góc nhìn phản biện
        - [Chỗ nào thiếu sót?]
        - [Ai phản đối? Lý do gì?]
        ### Cạm bẫy phổ biến
        - [Sai lầm 1]
        - [Sai lầm 2]
        
        ## Áp dụng thế nào?
        ### Bước 1: Chuẩn bị
        - [Hành động cụ thể]
        - [Công cụ cần có]
        ### Bước 2: Thực hiện
        - [Checklist chi tiết]
        - [Lưu ý khi làm]
        ### Bước 3: Đánh giá
        - [Đo lường kết quả]
        - [Điều chỉnh như thế nào]
        
        ## Nhớ nhanh
        - [Công thức 1 câu]
        - [Khẩu hiệu dễ thuộc]
        
        ## Đào sâu thêm
        ### Câu hỏi mở
        - [Nếu... thì sao?]
        - [Tại sao lại như vậy?]
        ### Hướng nghiên cứu tiếp
        - [Topic 1]
        - [Topic 2]
        ### Từ khóa search
        - [Keyword 1]
        - [Keyword 2]
      </script>
    </div>
  </body>
</html>

## Phong cách viết:
- Tiếng Việt đời, súc tích, mạnh
- Mỗi bullet là 1 ý hoàn chỉnh, không vụn vặt
- Dùng số liệu/ví dụ cụ thể thay vì chung chung
- Có thể đặt câu hỏi kích thích tư duy
- Trích nguồn khi đề cập tác giả/lý thuyết cụ thể
- **QUAN TRỌNG VỀ CẤU TRÚC PHÂN CÁP**:
  * Dùng ## cho nhóm chính (5-8 nhóm)
  * Dùng ### cho tiểu mục (mỗi nhóm chính có 2-4 tiểu mục)
  * Dùng - cho bullet point chi tiết (mỗi tiểu mục có 2-3 bullet)
  * KHÔNG để nhóm chính chỉ có bullet mà không có tiểu mục
  * Mỗi nhánh phải có ít nhất 1 cấp con để tạo độ sâu

## BƯỚC LÀM:
1. Đọc bài dưới đây 2 lần
2. Tự hỏi: "Điểm mấu chốt là gì? Cấu trúc nào hợp lý nhất?"
3. Quyết định số nhóm chính (2-6 nhóm) dựa trên độ phức tạp nội dung
4. **VẼ SƠ ĐỒ CÂY TRƯỚC**: Mỗi nhóm chính chia thành những tiểu mục nào? Mỗi tiểu mục có những chi tiết gì?
5. **TÌM NGUỒN GỐC**: Ý tưởng này từ ai? Trường phái nào? Phát triển ra sao?
6. **KẾT NỐI NGANG**: Liên hệ với lý thuyết/khái niệm nào khác trong hệ tri thức?
7. **PHÂN CẤP 3-4 LEVEL**: 
   - Level 1 (#): Tiêu đề chính
   - Level 2 (##): Nhóm chủ đề lớn
   - Level 3 (###): Tiểu mục trong nhóm
   - Level 4 (-): Chi tiết cụ thể
8. Viết mindmap theo tư duy trên - KHÔNG điền máy móc vào template
9. Kiểm tra lại: Có insight mới không? Có phản biện không? Có thực chiến không? Có mở rộng tri thức không? **Mỗi nhánh có đủ sâu không?**

## KẾT QUẢ MONG ĐỢI:
- Mindmap có tư duy, không phải bản tóm tắt
- Thấy được bản chất + điều ẩn sau lời văn
- Có phản biện nếu nội dung thiếu sót
- Áp dụng được ngay, không chỉ lý thuyết suông
- Nhìn 1 lần = nhớ 80% giá trị bài viết
- **MỚI**: Hiểu được nguồn gốc, bối cảnh, kết nối với hệ tri thức lớn hơn
- **MỚI**: Có roadmap để đào sâu thêm (sách, từ khóa, hướng nghiên cứu)
- **MỚI**: Thấy được các quan điểm đối lập/bổ sung


# VÍ DỤ CẤU TRÚC ĐÚNG vs SAI:

## Sai:

### Nguồn gốc & Bối cảnh
- Nghiên cứu gốc do Moar Becker và cộng sự (2025)
- Công kỹ niệm Quanta
- Khái niệm từ thập niên 1960


## ĐÚNG:

## Nguồn gốc & Bối cảnh
### Ai đề xuất?
- Moar Becker và cộng sự (2025)
- Dựa trên công trình của Quanta thập niên 1960
### Trường phái nào?
- Thuộc Gestalt psychology (Köhler, 1920s)
- Kết hợp với neuroscience hiện đại
### Phát triển ra sao?
- 1960s: Khái niệm "Aha moment" ban đầu
- 2000s: fMRI phát hiện vùng não liên quan
- 2025: Mô hình VOTC-Hippocampus-Amygdala

---

## BÀI VIẾT CẦN CHUYỂN THÀNH MINDMAP:

"


"