# Paper Notes — Cẩm nang in hộp giấy

Microsite 4 trang dành cho GitHub Pages: thiết kế editorial, responsive, có minh họa SVG riêng, bộ lọc lựa chọn hộp, checklist tương tác và liên kết biên tập đến dịch vụ Tân Hoa Mai.

## Các tệp
- `index.html` — trang chủ / landing cẩm nang.
- `chon-giay-hop.html` — phân biệt Ivory, Duplex, Kraft.
- `kieu-hop-giay.html` — phân biệt nắp gài, âm dương, nam châm, ngăn kéo.
- `checklist-dat-in.html` — checklist 12 mục và mẫu yêu cầu sao chép.
- `assets/css/style.css`, `assets/js/main.js` — giao diện và tương tác.
- `assets/img/*.svg` — bộ 6 hình minh họa vector gốc và favicon; không phụ thuộc hosting ảnh ngoài.

## Đăng GitHub Pages
1. Đăng nhập tài khoản GitHub bạn muốn sử dụng.
2. Tạo repository **public** mới có thể đặt tên `cam-nang-hop-giay` (không thay đổi repo bao lì xì đang chạy).
3. Giải nén ZIP, upload TOÀN BỘ NỘI DUNG thư mục này vào **thư mục gốc của repo** (không upload một thư mục mẹ bọc ngoài). Giữ nguyên đường dẫn `assets/`.
4. Vào **Settings → Pages → Build and deployment** chọn **Deploy from a branch**, nhánh **main**, thư mục **/(root)**, Save.
5. Khi được GitHub Pages công bố, mở liên kết trang web được GitHub cấp trong mục Pages. Trang phụ có thể mở trực tiếp bằng `.../chon-giay-hop.html`.
6. Nếu muốn đặt `canonical`, `og:url`, sitemap.xml chuẩn tuyệt đối, chỉ thêm chúng **sau khi xác định URL xuất bản**. Không sao chép canonical của tanhoamai.com.vn sang microsite; mỗi trang là nội dung riêng.

## QA sau khi lên mạng
- Kiểm tra bản desktop và mobile; mở 4 trang, menu, điều hướng, các ảnh SVG.
- Bấm các nút lựa chọn sản phẩm, checklist 12 mục và nút sao chép; thử trên HTTPS.
- Kiểm tra từng link về `https://tanhoamai.com.vn/in-hop-giay/` thực sự bấm được.
- Xem HTML nguồn để xác nhận nội dung và link tồn tại trong HTML (không phụ thuộc JavaScript để được thu thập).
- Kiểm tra `curl -I` / HTTP 200, robots không chặn, và kiểm tra noindex nếu có ở cấp Pages. Không thể hứa chắc trang hay backlink sẽ được Google index.
- Sau khi có URL thật, ghi link homepage vào cột **In hộp giấy** của dòng **Github** trong file Backlink hiện tại.

## Lưu ý
- Website này là tài liệu hướng dẫn, không sử dụng hoặc mạo nhận danh tính/đánh giá của một khách hàng thật. Hình ảnh là minh họa, không phải ảnh sản phẩm Tân Hoa Mai.
- Các liên kết đến Tân Hoa Mai được trình bày minh bạch như nguồn dịch vụ tham khảo.
- Không ghi tài khoản/mật khẩu GitHub hoặc thông tin truy cập vào repository.
- Không sửa trang chính của Tân Hoa Mai.
