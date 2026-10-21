import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { screen: ScreenType; label: string }[] = [
    { screen: 'trang-chu', label: 'Trang Chủ' },
    { screen: 've-hoc-vien', label: 'Về Học Viện' },
    { screen: 'triet-ly-va-bieu-tuong', label: 'Triết Lý & Biểu Tượng' },
    { screen: 'khoa-hoc-thuc-chien', label: 'Khóa Học' },
    { screen: 'phuong-phap-4-buoc', label: 'Phương Pháp' },
    { screen: 'doi-ngu-giang-vien', label: 'Giảng Viên' },
    { screen: 'tin-tuc-va-thue', label: 'Tin Tức' },
    { screen: 'lien-he', label: 'Liên Hệ' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Subtle Top Utility Ribbon - Clean & Airy */}
      <div className="bg-[#082554] text-white/90 py-2 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between text-[12.5px] tracking-wide">
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[15px] text-[#F59F00]">location_on</span>
              <span>Số 6, Ngõ 71 Võ Chí Công, Q. Cầu Giấy, Hà Nội</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[15px] text-[#E8590C]">call</span>
              <span>Hotline: 091 987 6543</span>
            </span>
          </div>

          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6 text-slate-300">
            <button
              onClick={() => handleNavClick('cong-hoc-vien')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">school</span>
              <span>Cổng học viên</span>
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => {
                if (currentScreen === 'trang-chu') {
                  const el = document.getElementById('khach-hang');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('ve-hoc-vien');
                }
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Khách hàng tiêu biểu</span>
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => {
                if (currentScreen === 'trang-chu') {
                  const el = document.getElementById('faq');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('trang-chu');
                  setTimeout(() => {
                    const el = document.getElementById('faq');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">help</span>
              <span>Hỏi đáp FAQ</span>
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => handleNavClick('ve-hoc-vien')}
              className="flex items-center gap-1 font-semibold text-[#F59F00] hover:text-white transition-colors cursor-pointer"
            >
              <span>Hệ sinh thái Anta Group</span>
              <span className="material-symbols-outlined text-[13px]">north_east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Spacious & Relaxed */}
      <div className="h-20 max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Lockup with pristine official circular logo */}
        <button
          onClick={() => handleNavClick('trang-chu')}
          className="flex items-center gap-3.5 group text-left cursor-pointer transition-opacity hover:opacity-90"
        >
          <img
            src={ANTA_OFFICIAL_LOGO}
            alt="Học viện Kế toán - Tài chính Anta"
            className="h-12 w-12 rounded-full object-contain shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-[19px] font-extrabold tracking-tight text-[#082554] leading-tight">
              HỌC VIỆN ANTA
            </span>
            <span className="text-[10px] font-bold text-[#0041a2] tracking-[0.16em] uppercase">
              ACADEMY OF FINANCE &amp; ACCOUNTING
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links with generous breathing room */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px]">
          {navItems.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`py-1.5 transition-colors cursor-pointer font-medium relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#0041a2] font-bold'
                    : 'text-slate-600 hover:text-[#0041a2]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0041a2] rounded-full animate-fade-in"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center font-bold text-[13.5px] bg-[#E8590C] hover:bg-[#d04e0a] text-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Đăng Ký Tư Vấn</span>
            <span className="material-symbols-outlined ml-1.5 text-[17px]">arrow_forward</span>
          </button>

          <button
            onClick={() => handleNavClick('cong-hoc-vien')}
            aria-label="Cổng học viên Anta"
            title="Cổng học viên Anta"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#eff4ff] text-[#082554] hover:text-[#0041a2] transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu điều hướng"
            className="lg:hidden w-10 h-10 rounded-lg bg-slate-100 text-[#082554] flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 shadow-xl flex flex-col gap-2 max-h-[75vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-left px-3.5 py-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#eff4ff] text-[#0041a2] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="material-symbols-outlined text-[18px] text-[#0041a2]">
                    check
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#E8590C] text-white font-bold rounded-lg text-center cursor-pointer text-[14px]"
            >
              Đăng Ký Tư Vấn Khóa Học
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
