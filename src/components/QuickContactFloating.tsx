import React, { useState } from 'react';

interface QuickContactFloatingProps {
  onOpenConsultation: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({
  onOpenConsultation,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside aria-label="Hỗ trợ tuyển sinh nhanh" className="fixed bottom-22 right-6 z-40 flex flex-col items-end gap-2.5">
      {expanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <a
            href="tel:0919876543"
            className="flex items-center gap-2 bg-[#0041a2] text-white px-3.5 py-2 rounded-full shadow-lg text-[13px] font-bold hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Hotline: 091 987 6543</span>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenConsultation();
            }}
            className="flex items-center gap-2 bg-[#E8590C] text-white px-3.5 py-2 rounded-full shadow-lg text-[13px] font-bold hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
            <span>Đăng ký học thử</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Tư vấn nhanh"
        title="Tư vấn nhanh"
        className="w-13 h-13 rounded-full bg-[#E8590C] hover:bg-[#d04e0a] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
      >
        <span className="material-symbols-outlined text-[26px]">
          {expanded ? 'close' : 'support_agent'}
        </span>
      </button>
    </aside>
  );
};
