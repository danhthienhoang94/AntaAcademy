# Học viện Kế toán - Tài chính Anta (Anta Academy)

> **Bệ phóng cho sự nghiệp Kế toán. Học thực chất • Làm vững vàng.**  
> Dự án cổng thông tin và hệ thống đào tạo kế toán - thuế - quản trị tài chính doanh nghiệp trực thuộc **Tập đoàn Anta Group**.

---

## 🌟 Tổng Quan Dự Án

Website chính thức của **Học viện Đào tạo Kế toán - Tài chính Anta** được xây dựng với kiến trúc Full-stack hiện đại, bảo mật cao cấp, tối ưu hóa trải nghiệm người dùng và giao diện trang nhã theo chuẩn nhận diện thương hiệu Anta Group.

### Các Tính Năng Nổi Bật:
1. **Khách hàng tiêu biểu Anta Group**:
   - Trình chiếu carousel 5 đối tác & khách hàng thực tế: EDX Corporation, Tiếng Trung Cẩm Xu (CAMXU Chinese), 1001 Startup Innovation, TSS Technology và Viện Bảo tồn Di tích (Institute for Conservation of Monuments).
   - Tự động chuyển slide, điều khiển linh hoạt trên Mobile và Desktop.
2. **Hệ thống Câu hỏi thường gặp (FAQ Section)**:
   - Tra cứu và lọc nhanh các thắc mắc về thủ tục nhập học, lịch học linh hoạt (tối/cuối tuần), chính sách bảo lưu 12 tháng, giá trị chứng chỉ pháp lý và hỗ trợ việc làm trọn đời.
3. **Cổng Học Viên & Tra cứu Chứng chỉ Điện tử**:
   - Xác thực văn bằng thời gian thực với mã băm chữ ký số **SHA-256**.
   - Cổng đăng nhập LMS mô phỏng an toàn có giới hạn thử mật khẩu chống brute-force.
   - Kho biểu mẫu, mẫu báo cáo lưu chuyển tiền tệ gián tiếp, checklist 65 điểm rủi ro thuế đã qua kiểm định an toàn mã độc.
4. **Hệ thống Đặt lịch & Tiếp nhận hồ sơ bảo mật**:
   - Form hero, modal tư vấn và đặt lịch hẹn tham quan phòng máy tính kết nối trực tiếp đến backend REST API (`/api/consultation`).
   - Tự động cấp mã hồ sơ (Ticket ID) và mã hóa số điện thoại.

---

## 🛡️ Kiến Trúc Bảo Mật & Pháp Lý

- **Tường lửa & Rate Limiting**: Ngăn chặn tấn công brute-force và DDoS trên toàn bộ API endpoints.
- **Bảo vệ dữ liệu cá nhân**: Tuân thủ nghiêm ngặt **Nghị định 13/2023/NĐ-CP (PDPD)** và **Luật An ninh mạng số 24/2018/QH14**.
- **Tiêu chuẩn mã hóa**: Hỗ trợ TLS 1.3 / AES-256 GCM, khử khuẩn dữ liệu đầu vào (Input Sanitization) và kiểm soát tiêu đề bảo mật (CSP, X-XSS-Protection, nosniff).
- **Cửa sổ Chính Sách Bảo Mật (Security Policy Modal)**: Cung cấp đầy đủ thông tin pháp lý và cam kết không tiết lộ dữ liệu kế toán thực hành.

---

## 🚀 Công Nghệ Sử Dụng

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Google Material Symbols, Plus Jakarta Sans.
- **Backend**: Node.js 22 LTS, Express, In-memory Sliding Window Rate Limiter.
- **SEO & Social**: Schema.org JSON-LD structured data (`EducationalOrganization`), OpenGraph, Twitter Card, Sitemap XML, Robots.txt, PWA Manifest.
- **Build Tool**: Vite 8, TypeScript `tsc --noEmit`.

---

## 💻 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy ở môi trường phát triển (Development)
```bash
npm run dev
```
Hệ thống sẽ khởi chạy tại: `http://localhost:3000`

### 3. Kiểm tra cú pháp (Lint)
```bash
npm run lint
```

### 4. Build sản phẩm (Production Build)
```bash
npm run build
```

### 5. Khởi chạy trên máy chủ Production
```bash
npm start
```

---

## 🏢 Liên Hệ & Đơn Vị Chủ Quản

- **Tổ chức**: Học viện Kế toán - Tài chính Anta (Thành viên Anta Group)
- **Địa chỉ**: Tòa nhà Anta, Số 6, Ngõ 71 Võ Chí Công, P. Nghĩa Đô, Q. Cầu Giấy, Hà Nội
- **Hotline đào tạo**: 091 987 6543 (Hỗ trợ 24/7)
- **Tổng đài Anta Group**: 024 3789 9999
- **Email tiếp nhận**: tuyensinh@hocvienanta.edu.vn
- **Website**: [https://hocvienanta.edu.vn](https://hocvienanta.edu.vn)

---
*© 2026 Học viện Kế toán - Tài chính Anta. All rights reserved.*
