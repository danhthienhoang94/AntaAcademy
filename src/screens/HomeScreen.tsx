import React, { useState } from 'react';
import { ScreenType, Course, TaxArticle } from '../types';
import {
  ANTA_OFFICIAL_LOGO,
  BRAND_SYMBOLS,
  BRAND_COLORS,
  COURSES,
  TAX_ARTICLES,
} from '../data/mockData';
import { ClientCarousel } from '../components/ClientCarousel';
import { FAQSection } from '../components/FAQSection';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: (preselectedCourse?: string) => void;
  onSelectCourse: (course: Course) => void;
  onSelectArticle: (article: TaxArticle) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectCourse,
  onSelectArticle,
}) => {
  // Hero lead form states
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [heroCourse, setHeroCourse] = useState('kt-thuc-hanh');
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroError, setHeroError] = useState<string | null>(null);
  const [heroTicketId, setHeroTicketId] = useState<string | null>(null);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Brand philosophy tab switcher for relaxed, spacious exploration
  const [philosophyTab, setPhilosophyTab] = useState<'symbols' | 'colors'>('symbols');
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('quyen-sach');

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroError(null);
    setHeroLoading(true);

    try {
      const courseMap: Record<string, string> = {
        'kt-thuc-hanh': 'Kế toán Thực hành Tổng hợp (Chứng từ sống)',
        'thue-thuc-hanh': 'Thuế Thực hành & Quyết toán 2026',
        'quan-tri-tai-chinh': 'Quản trị Tài chính & Dòng tiền cho CEO',
        'bao-cao-ra-quyet-dinh': 'Báo cáo & Ra Quyết định Kinh doanh',
      };

      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: heroName,
          phone: heroPhone,
          courseInterest: courseMap[heroCourse] || heroCourse,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Có lỗi xảy ra khi gửi đăng ký.');
      }

      setHeroTicketId(data.ticketId);
      setHeroSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setHeroError(err.message);
      } else {
        setHeroError('Không thể kết nối đến máy chủ bảo mật.');
      }
    } finally {
      setHeroLoading(false);
    }
  };

  const getCourseByCode = (id: string) => {
    return COURSES.find((c) => c.id === id) || COURSES[0];
  };

  return (
    <div className="flex flex-col w-full text-slate-800">
      {/* 1. HERO SECTION - Airy, Balanced & Dignified */}
      <section className="relative w-full bg-[#082554] text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle, soft ambient depth (not overly bright) */}
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-[#0041a2]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#F59F00]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 Cols) - Balanced & Well-Aligned */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Quiet Unboxed Eyebrow Metadata */}
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-[#F59F00] uppercase">
                <span>Anta Group</span>
                <span className="text-white/40">·</span>
                <span>Đào tạo Kế toán Thực chiến</span>
                <span className="text-white/40">·</span>
                <span>Từ 2009</span>
              </div>

              {/* Main Headline with Breathing Room */}
              <div className="space-y-3">
                <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.2] text-balance">
                  Bệ Phóng Cho Sự Nghiệp Kế Toán.
                  <span className="block text-[#F59F00] font-bold mt-1">
                    Học Thực Chất · Làm Vững Vàng
                  </span>
                </h1>
                <p className="text-slate-300 text-[16px] sm:text-[17px] leading-relaxed max-w-xl pt-1">
                  Kế thừa bệ phóng 17+ năm kinh nghiệm từ Tập đoàn Anta Group. Chúng tôi trang bị
                  năng lực hạch toán thực tế trên chứng từ sống, giúp học viên tự tin làm nghề và đồng
                  hành bền vững cùng doanh nghiệp.
                </p>
              </div>

              {/* Action Buttons with Generous Breathing Space */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="inline-flex items-center justify-center font-bold text-[14.5px] bg-[#E8590C] hover:bg-[#d04e0a] text-white px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Khám phá các khóa học 2026</span>
                  <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('lien-he')}
                  className="inline-flex items-center justify-center font-semibold text-[14.5px] bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl border border-white/15 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px]">apartment</span>
                  <span>Đặt lịch tham quan học viện</span>
                </button>
              </div>

              {/* Quiet Slogan Note */}
              <div className="pt-2 text-[13px] text-slate-400 flex items-center gap-3">
                <span className="text-[#F59F00] font-medium">Rèn luyện sự cẩn trọng &amp; chính xác</span>
                <span>·</span>
                <span>Triết lý: “Đến Anta để an tâm”</span>
              </div>
            </div>

            {/* Right: Clean, Airy Quick Consultation Card (5 Cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 flex flex-col gap-6 text-slate-800">
                {/* Clean Header with Logo */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <img
                    alt="Logo Anta"
                    className="w-13 h-13 object-contain rounded-full shadow-sm flex-shrink-0"
                    src={ANTA_OFFICIAL_LOGO}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider block">
                      TƯ VẤN LỘ TRÌNH MIỄN PHÍ
                    </span>
                    <h2 className="text-[18px] font-bold text-[#082554] leading-snug">
                      Đăng Ký Nhận Lộ Trình Nghề Nghiệp
                    </h2>
                  </div>
                </div>

                {heroSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">check_circle</span>
                    </div>
                    <h3 className="text-[17px] font-bold text-[#082554]">Đã Ghi Nhận Thành Công</h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-xs">
                      Cảm ơn bạn <span className="font-semibold text-[#082554]">{heroName}</span>.
                      Hồ sơ đã được mã hóa bảo mật với mã số{' '}
                      <span className="font-mono font-bold text-[#0041a2]">{heroTicketId}</span>.
                      Chuyên viên Anta sẽ gọi SĐT{' '}
                      <span className="font-semibold text-[#0041a2]">{heroPhone}</span> trong vòng 15
                      phút để giải đáp lộ trình phù hợp nhất.
                    </p>
                    <button
                      onClick={() => {
                        setHeroSubmitted(false);
                        setHeroName('');
                        setHeroPhone('');
                      }}
                      className="mt-3 text-[13px] text-[#0041a2] font-semibold hover:underline cursor-pointer"
                    >
                      Đăng ký thêm thông tin
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="flex flex-col gap-4">
                    {heroError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-[12.5px] text-red-700">
                        <span className="material-symbols-outlined text-[16px] text-red-500 mt-0.5 flex-shrink-0">
                          error
                        </span>
                        <span>{heroError}</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-semibold text-slate-700">
                        Họ và tên của bạn
                      </label>
                      <input
                        type="text"
                        required
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-semibold text-slate-700">
                        Số điện thoại liên hệ
                      </label>
                      <input
                        type="tel"
                        required
                        value={heroPhone}
                        onChange={(e) => setHeroPhone(e.target.value)}
                        placeholder="091 234 5678"
                        className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2] focus:bg-white transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-semibold text-slate-700">
                        Khóa học bạn quan tâm
                      </label>
                      <select
                        value={heroCourse}
                        onChange={(e) => setHeroCourse(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-[13.5px] text-slate-800 focus:outline-none focus:border-[#0041a2] focus:bg-white transition-all"
                      >
                        <option value="kt-thuc-hanh">
                          Kế toán Thực hành Tổng hợp (Chứng từ sống)
                        </option>
                        <option value="thue-thuc-hanh">
                          Thuế Thực hành &amp; Quyết toán 2026
                        </option>
                        <option value="quan-tri-tai-chinh">
                          Quản trị Tài chính &amp; Dòng tiền cho CEO
                        </option>
                        <option value="bao-cao-ra-quyet-dinh">
                          Báo cáo &amp; Ra Quyết định Kinh doanh
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={heroLoading}
                      className="w-full mt-2 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold text-[14px] py-3.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {heroLoading ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Đang gửi hồ sơ an toàn...</span>
                        </>
                      ) : (
                        <>
                          <span>Nhận tư vấn lộ trình</span>
                          <span className="material-symbols-outlined text-[18px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11.5px] text-slate-500 pt-1">
                      <span className="material-symbols-outlined text-[15px] text-[#2F9E44]">
                        lock
                      </span>
                      <span>Mã hóa bảo mật SSL 256-bit • Bảo vệ thông tin tuyệt đối</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS OF PRACTICE - Airy Strip with Clean Borders */}
      <section className="w-full bg-white border-b border-slate-100 py-12">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-xl bg-[#F59F00]/10 text-[#F59F00] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[15px] text-[#082554]">Thực hành chứng từ gốc</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Xử lý 100% hóa đơn thật, chứng từ sống từ các doanh nghiệp thực tế.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-xl bg-[#E8590C]/10 text-[#E8590C] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">computer</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[15px] text-[#082554]">Phần mềm chuẩn mực</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Thành thạo phần mềm MISA SME, Fast Accounting và Excel tài chính.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-xl bg-[#2F9E44]/10 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">analytics</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[15px] text-[#082554]">Lập BCTC &amp; Thuế 2026</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Đọc hiểu dòng tiền, rà soát sổ sách và tối ưu hóa chi phí thuế.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="w-11 h-11 rounded-xl bg-[#0041a2]/10 text-[#0041a2] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[15px] text-[#082554]">Kèm cặp 1:1 chuyên gia</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Kế toán trưởng 15+ năm trực tiếp hướng dẫn và giải đáp tình huống.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM & KEY METRICS - Tranquil & Balanced */}
      <section className="w-full bg-[#f8f9ff] py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-14">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
                HỆ SINH THÁI TẬP ĐOÀN
              </span>
              <h2 className="text-[28px] sm:text-[32px] text-[#082554] font-extrabold leading-tight">
                The Anta Group
              </h2>
              <p className="text-[14.5px] text-slate-600 leading-relaxed">
                Thành lập từ năm 2009, Anta Group phát triển vững chắc dựa trên hai trụ cột: Dịch vụ
                tài chính doanh nghiệp và Đào tạo nguồn nhân lực chất lượng cao.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Member 1 */}
              <div
                onClick={() => onNavigate('ve-hoc-vien')}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-[#0041a2]/30 hover:shadow-md transition-all cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[16px] text-[#082554] group-hover:text-[#0041a2] transition-colors">
                    Kế toán Anta
                  </span>
                  <span className="text-[11px] font-semibold text-[#0041a2] bg-[#eff4ff] px-2.5 py-0.5 rounded-full">
                    Dịch vụ kế toán
                  </span>
                </div>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  Giải pháp kế toán thuế trọn gói, hoàn thiện sổ sách và bảo vệ số liệu trước cơ quan
                  thuế cho doanh nghiệp.
                </p>
              </div>

              {/* Member 2 */}
              <div
                onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-[#0041a2]/30 hover:shadow-md transition-all cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[16px] text-[#0041a2] group-hover:text-[#082554] transition-colors">
                    Học viện Anta
                  </span>
                  <span className="text-[11px] font-semibold text-[#2F9E44] bg-[#2F9E44]/10 px-2.5 py-0.5 rounded-full">
                    Đào tạo nhân lực
                  </span>
                </div>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  Cung ứng nhân sự kế toán giỏi nghiệp vụ, vững vàng chuyên môn, làm đúng chuẩn mực và
                  thích ứng thời đại số.
                </p>
              </div>
            </div>
          </div>

          {/* Clean Metric Counters with Tabular Discipline */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="font-mono text-[36px] sm:text-[40px] font-extrabold text-[#0041a2] tracking-tight block">
                17+
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                NĂM HOẠT ĐỘNG
              </span>
              <span className="text-[13px] text-slate-600 block">Thành lập từ 2009</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[36px] sm:text-[40px] font-extrabold text-[#E8590C] tracking-tight block">
                150+
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                KẾ TOÁN TRƯỞNG
              </span>
              <span className="text-[13px] text-slate-600 block">Dày dặn kinh nghiệm</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[36px] sm:text-[40px] font-extrabold text-[#2F9E44] tracking-tight block">
                2.500+
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                HỌC VIÊN THÀNH NGHỀ
              </span>
              <span className="text-[13px] text-slate-600 block">Làm đúng chuyên môn</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[36px] sm:text-[40px] font-extrabold text-[#F59F00] tracking-tight block">
                1.000.000+
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                KHÁCH HÀNG DOANH NGHIỆP
              </span>
              <span className="text-[13px] text-slate-600 block">Đồng hành cùng Anta Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY: LOGO SYMBOLISM & 6 COLORS - Spacious & Elegant */}
      <section className="w-full bg-white py-20 lg:py-28" id="triet-ly">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
              TRIẾT LÝ THƯƠNG HIỆU
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554] tracking-tight">
              Ý Nghĩa Biểu Tượng &amp; Màu Sắc Nhận Diện
            </h2>
            <p className="text-[15px] text-slate-500 italic">
              “Trí thức làm nền tảng · Chuẩn mực để vươn xa”
            </p>
          </div>

          {/* Interactive Switcher - Spacious segmented tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setPhilosophyTab('symbols')}
                className={`px-6 py-2.5 text-[13.5px] font-bold rounded-lg transition-all cursor-pointer ${
                  philosophyTab === 'symbols'
                    ? 'bg-white text-[#0041a2] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cấu trúc 4 biểu tượng hình học
              </button>
              <button
                onClick={() => setPhilosophyTab('colors')}
                className={`px-6 py-2.5 text-[13.5px] font-bold rounded-lg transition-all cursor-pointer ${
                  philosophyTab === 'colors'
                    ? 'bg-white text-[#0041a2] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                6 Màu sắc nhận diện cốt lõi
              </button>
            </div>
          </div>

          {/* Content Pane: 4 Symbols */}
          {philosophyTab === 'symbols' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
              {/* Official Logo Spotlight with Generous Breathing Room */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#f8f9ff] rounded-3xl border border-slate-200/80">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#082554] p-3 shadow-xl flex flex-col items-center justify-center text-center">
                  <img
                    alt="Logo Học Viện Anta"
                    className="w-32 h-32 object-contain"
                    src={ANTA_OFFICIAL_LOGO}
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-extrabold text-[13px] text-white tracking-wide mt-1">
                    HỌC VIỆN ANTA
                  </span>
                  <span className="text-[10px] font-bold text-[#F59F00] uppercase tracking-wider">
                    Đến Anta để an tâm
                  </span>
                </div>
                <p className="text-[12.5px] text-slate-500 mt-4 text-center max-w-xs">
                  Logo chuẩn quốc gia của Học viện Kế toán Anta · Thiết kế nguyên bản bất biến
                </p>
              </div>

              {/* 4 Symbols List - Spacious & Refined */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {BRAND_SYMBOLS.map((s) => {
                  const isSelected = selectedSymbolId === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedSymbolId(s.id)}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                        isSelected
                          ? 'bg-white border-[#0041a2] shadow-md ring-1 ring-[#0041a2]/20'
                          : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${s.color}15`, color: s.color }}
                        >
                          <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                        </div>
                        {isSelected && (
                          <span className="text-[11px] font-bold text-[#0041a2] bg-[#eff4ff] px-2 py-0.5 rounded-full">
                            Tiêu điểm
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[16px] text-[#082554]">{s.title}</h3>
                      <p className="text-[13.5px] text-slate-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Content Pane: 6 Colors */}
          {philosophyTab === 'colors' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {BRAND_COLORS.map((col, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full shadow-sm border border-black/10 flex-shrink-0"
                      style={{ backgroundColor: col.hex }}
                    ></div>
                    <div>
                      <h3 className="font-bold text-[15px] text-[#082554]">{col.name}</h3>
                      <span className="font-mono text-[11.5px] text-slate-400 uppercase">
                        {col.hex}
                      </span>
                    </div>
                  </div>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">{col.meaning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. PRACTICAL 4-STEP METHODOLOGY - Clean & Stepped */}
      <section className="w-full bg-[#f8f9ff] py-20 lg:py-24" id="phuong-phap">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
              PHƯƠNG PHÁP ĐÀO TẠO
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554] tracking-tight">
              Phương Pháp Thực Chiến 4 Bước
            </h2>
            <p className="text-[15px] text-slate-600">
              Học từ nghiệp vụ · Thực hành đến vững nghề · Hiểu bản chất · Tự tin làm việc
            </p>
          </div>

          {/* 4 Stepped Cards with Generous Breathing Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[24px] font-extrabold text-[#F59F00]">01</span>
                  <span className="material-symbols-outlined text-[#F59F00] text-[26px]">
                    receipt_long
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#0041a2] uppercase block">
                    Bước 1 · Tiếp cận
                  </span>
                  <h3 className="font-bold text-[17px] text-[#082554] mt-0.5">Chứng Từ Thực Tế</h3>
                </div>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  Làm quen và xử lý tập hồ sơ, hóa đơn điện tử, phiếu thu - chi gốc từ doanh nghiệp thật.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F9E44]">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Rèn tính cẩn trọng</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[24px] font-extrabold text-[#E8590C]">02</span>
                  <span className="material-symbols-outlined text-[#E8590C] text-[26px]">
                    laptop_mac
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#0041a2] uppercase block">
                    Bước 2 · Hạch toán
                  </span>
                  <h3 className="font-bold text-[17px] text-[#082554] mt-0.5">Thực Hành Phần Mềm</h3>
                </div>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  Định khoản nghiệp vụ phát sinh và nhập liệu tự động trên MISA SME &amp; Fast Accounting.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F9E44]">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Thao tác nhanh, chính xác</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[24px] font-extrabold text-[#2F9E44]">03</span>
                  <span className="material-symbols-outlined text-[#2F9E44] text-[26px]">
                    bar_chart
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#0041a2] uppercase block">
                    Bước 3 · Báo cáo
                  </span>
                  <h3 className="font-bold text-[17px] text-[#082554] mt-0.5">Giải Quyết Nghiệp Vụ</h3>
                </div>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  Lập báo cáo tài chính hoàn chỉnh, kê khai thuế và giải quyết tình huống thanh tra.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F9E44]">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Làm chủ số liệu BCTC</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[24px] font-extrabold text-[#0041a2]">04</span>
                  <span className="material-symbols-outlined text-[#0041a2] text-[26px]">forum</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#0041a2] uppercase block">
                    Bước 4 · Cố vấn
                  </span>
                  <h3 className="font-bold text-[17px] text-[#082554] mt-0.5">Cập Nhật &amp; Đồng Hành</h3>
                </div>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  Cập nhật chính sách thuế mới 2026, hỗ trợ giải đáp trực tiếp khi gặp vướng mắc tại công ty.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F9E44]">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Hỗ trợ trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED COURSES - Spacious Cards, No Clutter */}
      <section className="w-full bg-white py-20 lg:py-28" id="khoa-hoc">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
                CHƯƠNG TRÌNH ĐÀO TẠO
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554] tracking-tight">
                Các Khóa Học Tiêu Biểu 2026
              </h2>
            </div>
            <button
              onClick={() => onNavigate('khoa-hoc-thuc-chien')}
              className="text-[#0041a2] font-semibold text-[14px] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Xem tất cả chương trình</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* 4 Flagship Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-[#f8f9ff] p-8 rounded-2xl border border-slate-200/80 hover:border-[#0041a2]/30 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[12px] text-slate-500 font-semibold">
                    <span className="text-[#0041a2]">{course.badge}</span>
                    <span className="font-mono">{course.duration}</span>
                  </div>

                  <h3 className="text-[20px] font-bold text-[#082554] leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {course.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[13px] text-slate-700">
                        <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">
                          check_circle
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="text-[12.5px] text-slate-500">
                    <span className="block font-medium text-slate-700">{course.format}</span>
                    <span className="block text-[11.5px] text-[#0041a2] font-semibold">Tư vấn lộ trình 1:1</span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="inline-flex items-center gap-1.5 text-[#0041a2] font-bold text-[13.5px] hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>Xem giáo trình</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KHÁCH HÀNG TIÊU BIỂU CỦA ANTA GROUP */}
      <section className="w-full bg-white py-20 lg:py-24 border-t border-slate-100" id="khach-hang">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
              ĐỐI TÁC &amp; KHÁCH HÀNG TIÊU BIỂU
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554] tracking-tight">
              Khách Hàng Tiêu Biểu Của Anta Group
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Các doanh nghiệp, tập đoàn và tổ chức tiêu biểu đã tin tưởng đồng hành cùng hệ sinh thái dịch vụ tài chính, kế toán - thuế và tiếp nhận nhân sự chất lượng cao từ Anta Group.
            </p>
          </div>

          {/* Authentic Client Carousel matching Anta Group's real partners */}
          <div className="pt-2">
            <ClientCarousel />
          </div>
        </div>
      </section>

      {/* 7. TAX ARTICLES - Clean Editorial Style */}
      <section className="w-full bg-[#f8f9ff] py-20 lg:py-24" id="tin-tuc">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
                CẬP NHẬT NGHIỆP VỤ
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554] tracking-tight">
                Bản Tin Thuế &amp; Kế Toán 2026
              </h2>
            </div>
            <button
              onClick={() => onNavigate('tin-tuc-va-thue')}
              className="text-[#0041a2] font-semibold text-[14px] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Xem chuyên trang thuế</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* 3 Clean Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TAX_ARTICLES.slice(0, 3).map((art) => (
              <article
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-[#0041a2]/30 transition-all flex flex-col justify-between cursor-pointer group space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="text-[12px] text-slate-500 font-medium">
                    <span>{art.category}</span>
                    <span className="mx-1.5">·</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="text-[16.5px] font-bold text-[#082554] group-hover:text-[#0041a2] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-[13.5px] text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12.5px] text-slate-500">
                  <span>{art.author}</span>
                  <span className="text-[#0041a2] font-semibold group-hover:translate-x-1 transition-transform">
                    Đọc tiếp →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <FAQSection onOpenConsultation={onOpenConsultation} />

      {/* 9. CAMPUS VISIT & INQUIRY BANNER - Serene & Welcoming */}
      <section className="w-full bg-[#082554] text-white py-20 relative overflow-hidden" id="tham-quan">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
                TRẢI NGHIỆM TRỰC TIẾP
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-white leading-snug">
                Trải Nghiệm Phòng Đào Tạo Kế Toán Hiện Đại
              </h2>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-2xl">
                Tọa lạc tại Tòa nhà Anta Group, Số 6, Ngõ 71 Võ Chí Công, Cầu Giấy, Hà Nội. Được trang
                bị dàn máy cấu hình cao, phần mềm bản quyền và kho chứng từ thực tế đa lĩnh vực.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-[13.5px] pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[17px] text-[#F59F00]">
                    location_on
                  </span>
                  <span>Võ Chí Công, Cầu Giấy, Hà Nội</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[17px] text-[#E8590C]">call</span>
                  <span>Hotline: 091 987 6543 / 024 3789 9999</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold text-[14.5px] py-3.5 rounded-xl text-center shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Đăng ký học thử miễn phí
              </button>
              <a
                href="tel:0919876543"
                className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold text-[14.5px] py-3.5 rounded-xl text-center border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                <span>Gọi hotline tư vấn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
