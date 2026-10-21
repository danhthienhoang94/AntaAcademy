import React from 'react';
import { ScreenType } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
  onOpenSecurityPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSecurityPolicy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#082554] text-slate-300 relative z-20 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) - Dignified & Spacious */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={ANTA_OFFICIAL_LOGO}
                alt="Logo Học viện Anta"
                className="h-13 w-13 rounded-full object-contain shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-[19px] font-bold text-white tracking-tight leading-tight">
                  HỌC VIỆN ANTA
                </span>
                <span className="text-[11px] font-bold text-[#F59F00] tracking-wider uppercase">
                  ĐẾN ANTA ĐỂ AN TÂM
                </span>
              </div>
            </div>
            <p className="text-[13.5px] leading-relaxed text-slate-300 max-w-sm pt-1">
              Học viện đào tạo Kế toán - Tài chính thực chiến chất lượng cao trực thuộc Anta Group.
              Trang bị năng lực nghiệp vụ vững vàng và đồng hành lâu dài cùng doanh nghiệp Việt.
            </p>
            <div className="pt-1 text-[12.5px] text-[#F59F00] font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Bảo chứng uy tín từ Anta Group • 1.000.000+ Khách hàng doanh nghiệp</span>
            </div>
          </div>

          {/* Col 2: Hệ Thống Đào Tạo (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[15px] font-bold text-white tracking-wide uppercase">
              Hệ Thống Đào Tạo
            </h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px]">
              <li>
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kế toán trưởng Doanh nghiệp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kế toán Tổng hợp Thực hành
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Quyết toán &amp; Thanh tra Thuế
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Quản trị Tài chính dành cho CEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('khoa-hoc-thuc-chien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Báo cáo IFRS / VAS chuẩn mực
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hệ Sinh Thái Anta (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[15px] font-bold text-white tracking-wide uppercase">
              Hệ Sinh Thái
            </h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px]">
              <li>
                <button
                  onClick={() => onNavigate('ve-hoc-vien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Anta Holding Group
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ve-hoc-vien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Anta Consulting &amp; Tax
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ve-hoc-vien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Anta Audit Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cong-hoc-vien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cổng học viên LMS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ve-hoc-vien')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Khách hàng tiêu biểu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lien-he')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cơ sở &amp; Phòng thực hành
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trụ Sở & Tiếp Nhận (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[15px] font-bold text-white tracking-wide uppercase">
              Trụ Sở &amp; Tiếp Nhận
            </h4>
            <div className="flex flex-col gap-2 text-[13px] text-slate-300">
              <p>Tòa nhà Anta, Số 6, Ngõ 71 Võ Chí Công, P. Nghĩa Đô, Q. Cầu Giấy, Hà Nội</p>
              <p>Hotline Đào tạo: <span className="text-white font-semibold">091 987 6543</span></p>
              <p>Tổng đài Anta: <span className="text-white font-semibold">024 3789 9999</span></p>
              <p>Email: tuyensinh@hocvienanta.edu.vn</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-white font-semibold text-[13px] bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-lg border border-white/15 transition-all cursor-pointer"
              >
                <span>Hẹn lịch tham quan trụ sở</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© 2026 Học viện Kế toán - Tài chính Anta (Anta Academy). Thuộc Anta Group.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <button
              onClick={() => {
                if (onOpenSecurityPolicy) onOpenSecurityPolicy();
                else onNavigate('ve-hoc-vien');
              }}
              className="text-[#2F9E44] hover:text-[#40c057] flex items-center gap-1 font-medium text-[11.5px] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">shield</span>
              <span>Bảo mật SSL 256-bit • NĐ 13/2023/NĐ-CP</span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                if (onOpenSecurityPolicy) onOpenSecurityPolicy();
                else onNavigate('ve-hoc-vien');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Chính sách bảo mật
            </button>
            <button
              onClick={() => onNavigate('phuong-phap-4-buoc')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Quy chế đào tạo
            </button>
            <button
              onClick={() => {
                onNavigate('trang-chu');
                setTimeout(() => {
                  const el = document.getElementById('faq');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-white transition-colors cursor-pointer text-[#F59F00]"
            >
              Hỏi đáp FAQ
            </button>
            <button
              onClick={() => onNavigate('lien-he')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          className="w-11 h-11 rounded-full bg-[#082554] hover:bg-[#0041a2] text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      </div>
    </footer>
  );
};
