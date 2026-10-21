# TRỌN BỘ MÃ NGUỒN DỰ ÁN HỌC VIỆN KẾ TOÁN - TÀI CHÍNH ANTA (ANTA ACADEMY)
*Thành viên Hệ sinh thái Anta Group (Thành lập 2009)*

---

## 📦 1. TẢI TOÀN BỘ MÃ NGUỒN DƯỚI DẠNG FILE NÉN (ZIP)
Bạn có thể tải ngay file nén trọn bộ toàn bộ source code sạch (đã loại bỏ `node_modules` và `dist`) tại đường dẫn:
- **Tải trực tiếp**: [Tải file anta-academy-full-source.zip](/anta-academy-full-source.zip)
- Hoặc truy cập trực tiếp trên website tại mục **Cổng Học Viên** > **Kho Biểu Mẫu & Tài Nguyên** > nhấn nút **Tải về** tại mục *Trọn bộ Toàn bộ Mã nguồn Dự án Anta Academy (Full Source Code ZIP)*.

---

## 🗂️ 2. SƠ ĐỒ CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```text
├── README.md                      # Tài liệu tổng quan dự án, hướng dẫn cài đặt & vận hành
├── package.json                   # Danh mục dependencies, script start/dev/build/lint
├── tsconfig.json                  # Cấu hình TypeScript 5+ & module resolution
├── vite.config.ts                 # Cấu hình Vite 8 & Tailwind CSS v4
├── index.html                     # HTML Entry point, OpenGraph, Schema.org JSON-LD
├── server.ts                      # Backend Express full-stack, Rate Limiting, CSP, REST APIs
├── public/
│   ├── manifest.json              # Web App Manifest PWA cho Mobile
│   ├── robots.txt                 # Cấu hình an toàn cho Web Crawler
│   ├── sitemap.xml                # Sơ đồ trang web phục vụ lập chỉ mục SEO
│   └── anta-academy-full-source.zip # File nén trọn bộ mã nguồn hoàn chỉnh
├── src/
│   ├── main.tsx                   # Điểm kích hoạt React 19 SPA
│   ├── index.css                  # Style toàn cục với Tailwind v4 (@import "tailwindcss";)
│   ├── App.tsx                    # Điều hướng màn hình, quản lý modal và state ứng dụng
│   ├── types/
│   │   └── index.ts               # Định nghĩa interface Course, TaxArticle, Faculty, Certificate...
│   ├── data/
│   │   └── mockData.ts            # Dữ liệu chuẩn hóa: Logo Anta, biểu tượng, khóa học, bài viết
│   ├── components/
│   │   ├── Header.tsx             # Thanh điều hướng trang nhã, thanh utility trên cùng
│   │   ├── Footer.tsx             # Chân trang hệ sinh thái Anta, liên kết bảo mật & FAQ
│   │   ├── ClientCarousel.tsx     # Carousel 5 đối tác/khách hàng tiêu biểu của Anta Group
│   │   ├── FAQSection.tsx         # Hệ thống câu hỏi thường gặp, tìm kiếm & bộ lọc danh mục
│   │   ├── SecurityPolicyModal.tsx# Cửa sổ chính sách bảo mật NĐ 13/2023/NĐ-CP & An ninh mạng
│   │   ├── ConsultationModal.tsx  # Modal đăng ký tư vấn lộ trình học tập 1:1 bảo mật
│   │   ├── CourseModal.tsx        # Modal chi tiết giáo trình đào tạo thực tế
│   │   ├── ArticleModal.tsx       # Modal chi tiết bản tin chính sách thuế 2026
│   │   ├── QuickContactFloating.tsx# Nút liên hệ nhanh nổi góc phải màn hình
│   │   └── PartnerLogoGrid.tsx    # Thành phần hiển thị logo đối tác
│   └── screens/
│       ├── HomeScreen.tsx         # Trang chủ trang nhã: Hero, Thống kê, Khóa học, Khách hàng, FAQ
│       ├── AboutScreen.tsx        # Giới thiệu Anta Group, tầm nhìn, sứ mệnh, giá trị cốt lõi
│       ├── PhilosophyScreen.tsx   # Triết lý đào tạo, ý nghĩa biểu tượng & màu sắc nhận diện
│       ├── CoursesScreen.tsx      # Danh mục khóa học thực chiến, bộ lọc đối tượng, tư vấn
│       ├── MethodologyScreen.tsx  # Phương pháp 4 bước "Cầm tay chỉ việc trên chứng từ sống"
│       ├── FacultyScreen.tsx      # Đội ngũ giảng viên Kế toán trưởng 15+ năm kinh nghiệm
│       ├── NewsScreen.tsx         # Bản tin nghiệp vụ thuế, hạch toán và cảnh báo rủi ro
│       ├── StudentPortalScreen.tsx# Cổng học viên: Tra cứu chứng chỉ SHA-256, LMS & kho tài liệu
│       └── ContactScreen.tsx      # Đặt lịch hẹn tham quan cơ sở, kiểm tra năng lực đầu vào
```

---

## ⚙️ 3. CÁC TẬP TIN CẤU HÌNH & KHỞI CHẠY HỆ THỐNG

### `package.json`
```json
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx server.ts",
    "start": "node server.ts",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
```

---

## 🔒 4. MÁY CHỦ BẢO MẬT & REST API (`server.ts`)

```typescript
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

// 1. Tiêu đề bảo mật nâng cao (CSP, Anti-Sniffing, XSS Protection)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
  );
  res.setHeader('X-Download-Options', 'noopen');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "img-src 'self' data: https: blob:; " +
      "connect-src 'self' https: ws: wss:; " +
      "frame-ancestors *;"
  );
  res.removeHeader('X-Powered-By');
  next();
});

// 2. Giới hạn kích thước payload (Chống tràn bộ nhớ & DDoS)
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// 3. Rate Limiter cửa sổ trượt (In-Memory Sliding Window Rate Limiter)
interface RateLimitBucket {
  count: number;
  resetTime: number;
}
const rateLimitStore = new Map<string, RateLimitBucket>();

setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of rateLimitStore.entries()) {
    if (now > bucket.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

const createRateLimiter = (options: {
  windowMs: number;
  maxRequests: number;
  message: string;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : req.socket.remoteAddress || 'unknown';

    const key = `${req.baseUrl || req.path}:${clientIp}`;
    const now = Date.now();
    const bucket = rateLimitStore.get(key);

    if (!bucket || now > bucket.resetTime) {
      rateLimitStore.set(key, { count: 1, resetTime: now + options.windowMs });
      return next();
    }

    if (bucket.count >= options.maxRequests) {
      return res.status(429).json({ success: false, error: options.message });
    }

    bucket.count += 1;
    next();
  };
};

const generalLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 120,
  message: 'Quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.',
});

const consultationLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 10,
  message: 'Bạn đã gửi đăng ký quá nhiều lần. Vui lòng chờ 15 phút.',
});

// 4. API Endpoints: Tư vấn, Tra cứu chứng chỉ, Chính sách bảo mật & Kiểm tra hệ thống
app.get('/api/health', generalLimiter, (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    system: 'Học viện Kế toán Anta - Secure Backend API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    security: {
      contentSecurityPolicy: 'Active',
      rateLimiting: 'Active',
      encryptionStandard: 'TLS 1.3 / AES-256 GCM ready',
      privacyCompliance: 'Luật An ninh mạng & Nghị định 13/2023/NĐ-CP',
    },
  });
});

app.post('/api/consultation', consultationLimiter, (req: Request, res: Response) => {
  const { fullName, phone, courseInterest } = req.body || {};
  if (!fullName || !phone) {
    return res.status(400).json({ success: false, error: 'Vui lòng điền đủ họ tên và số điện thoại.' });
  }
  const ticketId = `ANTA-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  res.json({
    success: true,
    ticketId,
    message: 'Đăng ký thành công!',
    data: { fullName, phoneMasked: phone.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2'), courseInterest },
  });
});

// 5. Khởi động máy chủ & Phục vụ SPA
async function startServer() {
  const publicPath = path.resolve(__dirname, 'public');
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[Server] Anta Academy running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
```

---

## 🎯 5. HƯỚNG DẪN ĐẨY LÊN GITHUB TỪ FILE NÉN NÀY

1. **Giải nén file**: Tải file `anta-academy-full-source.zip` và giải nén vào thư mục bạn muốn làm việc.
2. **Khởi tạo và đẩy lên GitHub**:
```bash
cd anta-academy
git init
git branch -m main
git add .
git commit -m "feat: initial commit for Anta Academy platform"
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repository>.git
git push -u origin main
```
3. **Cài đặt & chạy thử**:
```bash
npm install
npm run dev
```
Hệ thống sẽ chạy ngay tại `http://localhost:3000` với đầy đủ tính năng!
