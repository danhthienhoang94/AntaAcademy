import React from 'react';
import { TaxArticle } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface ArticleModalProps {
  article: TaxArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onConsultTax: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onConsultTax,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Header Ribbon */}
        <div className="bg-[#082554] p-5 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Logo Anta"
              className="w-10 h-10 rounded-full object-contain bg-white/10 p-0.5"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-[11px] font-bold text-[#F59F00] uppercase tracking-wider block">
                BẢN TIN THUẾ &amp; KẾ TOÁN THỰC CHIẾN 2026
              </span>
              <span className="text-[12px] text-[#d5e3fd]">
                Chuyên trang nghiên cứu nghiệp vụ Học viện Anta
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng bài viết"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-500">
              <span className="bg-[#0041a2]/10 text-[#0041a2] font-bold px-2.5 py-0.5 rounded-full">
                {article.category}
              </span>
              <span>Ngày đăng: {article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span className="font-semibold text-slate-700">Tác giả: {article.author}</span>
            </div>
            <h2 className="text-[22px] sm:text-[24px] font-bold text-[#082554] leading-snug">
              {article.title}
            </h2>
          </div>

          {/* Legal references box */}
          <div className="p-4 bg-[#f8f9ff] rounded-xl border border-[#dae2ff] space-y-2">
            <div className="flex items-center gap-2 text-[13px] font-bold text-[#0041a2]">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
              <span>Căn cứ pháp lý áp dụng 2026:</span>
            </div>
            <ul className="list-disc list-inside text-[13px] text-slate-600 space-y-1">
              {article.legalReferences.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
            {article.content.map((p, index) => (
              <p key={index} className="text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Expert Advice Banner */}
          <div className="p-5 bg-gradient-to-r from-[#eff4ff] to-[#f8f9ff] rounded-xl border border-[#0041a2]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0041a2] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#082554]">
                  Doanh nghiệp đang gặp vướng mắc tương tự?
                </h4>
                <p className="text-[13px] text-slate-600">
                  Đăng ký tham gia khóa đào tạo chuyên sâu hoặc đặt lịch cố vấn trực tiếp cùng Chuyên
                  gia Kế toán Anta.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onConsultTax();
              }}
              className="px-5 py-2.5 bg-[#E8590C] hover:brightness-105 text-white font-bold text-[13px] rounded-lg transition-all flex-shrink-0 cursor-pointer shadow-sm"
            >
              Cố Vấn 1:1 Cùng Chuyên Gia
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold text-[14px] text-slate-700 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
