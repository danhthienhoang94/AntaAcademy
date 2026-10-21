import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ANTA_OFFICIAL_LOGO, BRAND_SYMBOLS, BRAND_COLORS } from '../data/mockData';

interface PhilosophyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const PhilosophyScreen: React.FC<PhilosophyScreenProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeSymbolIndex, setActiveSymbolIndex] = useState(0);
  const currentSymbol = BRAND_SYMBOLS[activeSymbolIndex];

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Header - Airy & Dignified */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white/10 p-1 mb-2 shadow-lg border border-white/20">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Học viện Anta"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            BẢN SẮC &amp; VĂN HÓA DOANH NGHIỆP
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            Ý Nghĩa Biểu Tượng &amp; Màu Sắc Nhận Diện
          </h1>
          <p className="text-[17px] text-slate-300 italic max-w-xl font-serif">
            “Trí thức làm nền tảng · Chuẩn mực để vươn xa”
          </p>
        </div>
      </section>

      {/* Official Logo Anchor Card - Generous Breathing Space */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#082554] p-3 shadow-xl flex-shrink-0 flex items-center justify-center border-4 border-[#F59F00]/30">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Logo Chuẩn Học viện Anta"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-[#0041a2] text-[12px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Logo Chuẩn Học Viện Kế Toán Anta</span>
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#082554] leading-snug">
              Bảo Chứng Niềm Tin: “Đến Anta Để An Tâm”
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed text-justify">
              Logo chính thức của Học viện Kế toán - Tài chính Anta (file chuẩn{' '}
              <em>logostickyamban</em>) là sự phối hợp hài hòa giữa trang sách tri thức mở rộng, dấu
              tích chuẩn mực nghiệp vụ, mầm non nuôi dưỡng nhân tài và ba cột vươn cao tràn đầy năng
              lượng trên nền xanh dương đại diện cho sự vững vàng của ngành tài chính.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[13px] text-slate-600">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-medium">
                ✓ Thiết kế nguyên bản bất biến
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-medium">
                ✓ Đúng chuẩn màu sắc &amp; bố cục
              </span>
              <span className="bg-[#eff4ff] text-[#0041a2] px-3 py-1.5 rounded-lg font-medium">
                ✓ Bảo hộ thương hiệu Anta Group
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Geometry Symbols - Spacious Exhibition Style */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            PHẦN 1: HÌNH THÁI HỌC
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554]">
            4 Biểu Tượng Cấu Thành
          </h2>
          <p className="text-[14.5px] text-slate-600">
            Khám phá thông điệp sư phạm và triết lý làm nghề ẩn sau từng nét vẽ.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {BRAND_SYMBOLS.map((s, idx) => {
            const isSelected = activeSymbolIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSymbolIndex(idx)}
                className={`p-5 rounded-2xl border text-left flex items-center gap-3.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0041a2] shadow-md ring-1 ring-[#0041a2]/20'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${s.color}15`, color: s.color }}
                >
                  <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">
                    Biểu tượng 0{idx + 1}
                  </span>
                  <span
                    className={`text-[14px] font-bold block ${
                      isSelected ? 'text-[#0041a2]' : 'text-[#082554]'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Symbol Display Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
            style={{ backgroundColor: `${currentSymbol.color}15`, color: currentSymbol.color }}
          >
            <span className="material-symbols-outlined text-[64px] sm:text-[72px]">
              {currentSymbol.icon}
            </span>
          </div>

          <div className="space-y-3 flex-1">
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white inline-block"
              style={{ backgroundColor: currentSymbol.color }}
            >
              Ý nghĩa cốt lõi
            </span>
            <h3 className="text-[22px] font-bold text-[#082554]">{currentSymbol.title}</h3>
            <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
              {currentSymbol.description}
            </p>
            <p className="text-[14px] text-slate-600 leading-relaxed bg-[#f8f9ff] p-5 rounded-2xl border border-slate-100">
              {currentSymbol.detail}
            </p>
          </div>
        </div>
      </section>

      {/* 6 Core Colors - Generous Breathing Space */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            PHẦN 2: HỆ THỐNG MÀU SẮC
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554]">
            6 Màu Sắc · 6 Giá Trị Làm Nghề
          </h2>
          <p className="text-[14.5px] text-slate-600">
            Mỗi gam màu đại diện cho một đức tính cần có của người làm kế toán - tài chính.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_COLORS.map((col, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full shadow-sm border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: col.hex }}
                ></div>
                <div>
                  <h3 className="font-bold text-[16px] text-[#082554]">{col.name}</h3>
                  <span className="font-mono text-[12px] text-slate-400 uppercase">{col.hex}</span>
                </div>
              </div>
              <p className="text-[14px] text-slate-700 font-medium">{col.meaning}</p>
              <p className="text-[13px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                {col.application}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Slogan Action Banner */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="bg-[#082554] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4 shadow-xl">
          <h2 className="text-[26px] sm:text-[32px] font-extrabold max-w-xl leading-tight">
            “Đến Anta Để An Tâm”
          </h2>
          <p className="text-[15px] text-slate-300 max-w-lg leading-relaxed">
            Học viên an tâm với năng lực hành nghề. Doanh nghiệp an tâm với hệ thống sổ sách kế toán
            chuẩn mực, minh bạch.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('khoa-hoc-thuc-chien')}
              className="px-7 py-3.5 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[14px] transition-all cursor-pointer"
            >
              Khám Phá Các Khóa Học 2026
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
