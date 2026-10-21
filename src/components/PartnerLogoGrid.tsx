import React from 'react';

// Danh sách các logo khách hàng tiêu biểu của Anta Group
// TUÂN THỦ NGHIÊM NGẶT: Chỉ hiển thị logo chuẩn của từng đơn vị, TUYỆT ĐỐI KHÔNG GHI CHỮ
export const PARTNER_LOGOS = [
  // 1. MISA
  {
    id: 'misa',
    name: 'MISA',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8L28 20V32L12 44L4 38V14L12 8Z" fill="#0072CE" />
        <path d="M28 20L44 8L52 14V38L44 44L28 32V20Z" fill="#F37021" />
        <path d="M28 20L20 26L28 32L36 26L28 20Z" fill="#EE2E24" />
        <path d="M64 12V38H72V22L80 34H84L92 22V38H100V12H91L82 26L73 12H64Z" fill="#0072CE" />
        <path d="M108 12V38H116V12H108Z" fill="#0072CE" />
        <path d="M136 12H122V38H136C143 38 148 33 148 25C148 17 143 12 136 12ZM135 31H130V19H135C138.5 19 140 21.5 140 25C140 28.5 138.5 31 135 31Z" fill="#0072CE" />
      </svg>
    ),
  },
  // 2. FAST
  {
    id: 'fast',
    name: 'FAST',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 38L24 10H48L32 38H8Z" fill="#E31B23" />
        <path d="M36 38L52 10H76L60 38H36Z" fill="#005BAA" />
        <path d="M64 38L80 10H104L88 38H64Z" fill="#E31B23" />
        <path d="M92 38L108 10H144L138 20H118L114 26H132L127 34H110L107 38H92Z" fill="#005BAA" />
      </svg>
    ),
  },
  // 3. FPT
  {
    id: 'fpt',
    name: 'FPT',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38L28 12H44L26 38H10Z" fill="#005A9C" />
        <path d="M38 38L56 12H72L54 38H38Z" fill="#F36F21" />
        <path d="M66 38L84 12H100L82 38H66Z" fill="#009A44" />
        <circle cx="120" cy="25" r="14" fill="#005A9C" />
        <circle cx="120" cy="25" r="7" fill="white" />
      </svg>
    ),
  },
  // 4. VIETTEL
  {
    id: 'viettel',
    name: 'VIETTEL',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 25C12 14.5 20.5 6 31 6C41.5 6 50 14.5 50 25C50 35.5 41.5 44 31 44C20.5 44 12 35.5 12 25Z" stroke="#EE0000" strokeWidth="6" />
        <path d="M24 16C28 12 34 12 38 16" stroke="#EE0000" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 34C26 38 36 38 40 34" stroke="#EE0000" strokeWidth="4" strokeLinecap="round" />
        <path d="M68 14L78 36L88 14H98L83 42H73L58 14H68Z" fill="#EE0000" />
        <circle cx="110" cy="16" r="4" fill="#EE0000" />
        <path d="M106 24V42H114V24H106Z" fill="#EE0000" />
        <path d="M124 24V42H132V24H124Z" fill="#EE0000" />
      </svg>
    ),
  },
  // 5. TECHCOMBANK
  {
    id: 'techcombank',
    name: 'Techcombank',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="14" height="14" fill="#ED1C24" />
        <rect x="28" y="10" width="14" height="14" fill="#000000" />
        <rect x="12" y="26" width="14" height="14" fill="#000000" />
        <rect x="28" y="26" width="14" height="14" fill="#ED1C24" />
        <polygon points="19,17 35,17 27,25" fill="#FFFFFF" />
        <polygon points="27,25 19,33 35,33" fill="#FFFFFF" />
        <path d="M54 18H80V24H70V40H64V24H54V18Z" fill="#000000" />
        <path d="M84 18H106V23H91V26H104V31H91V35H106V40H84V18Z" fill="#ED1C24" />
        <path d="M112 18H132V23H119V40H112V18Z" fill="#000000" />
      </svg>
    ),
  },
  // 6. VIETCOMBANK
  {
    id: 'vietcombank',
    name: 'Vietcombank',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26 6C14.9 6 6 14.9 6 26C6 37.1 14.9 44 26 44C32 44 38 40.5 41 35C38 35 34 33 31 30C28 27 26 23 26 18C26 13 29 9 34 7C31.5 6.3 28.8 6 26 6Z"
          fill="#005B27"
        />
        <path
          d="M34 7C38 9 40 13 40 18C40 23 38 27 35 30C32 33 36 35 41 35C44 35 46 32 46 26C46 14.9 39 7 34 7Z"
          fill="#78B82A"
        />
        <path d="M58 14L68 38H76L86 14H77L72 29L67 14H58Z" fill="#005B27" />
        <path d="M92 14H112V20H99V23H110V28H99V32H112V38H92V14Z" fill="#005B27" />
        <path d="M118 14H138V20H125V38H118V14Z" fill="#005B27" />
      </svg>
    ),
  },
  // 7. HOA PHAT
  {
    id: 'hoaphat',
    name: 'Hoa Phat',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,38 28,10 44,38" stroke="#003B70" strokeWidth="5" fill="none" />
        <line x1="18" y1="28" x2="38" y2="28" stroke="#003B70" strokeWidth="4" />
        <polygon points="32,38 48,10 64,38" stroke="#00A3E0" strokeWidth="5" fill="none" />
        <line x1="38" y1="28" x2="58" y2="28" stroke="#00A3E0" strokeWidth="4" />
        <path d="M78 12V38H85V28H98V38H105V12H98V22H85V12H78Z" fill="#003B70" />
        <path d="M112 12V38H119V28H132C138 28 143 24 143 20C143 15 138 12 132 12H112ZM119 23V17H130C133 17 135 18 135 20C135 22 133 23 130 23H119Z" fill="#00A3E0" />
      </svg>
    ),
  },
  // 8. VINAMILK
  {
    id: 'vinamilk',
    name: 'Vinamilk',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="144" height="34" rx="17" fill="#082260" />
        <circle cx="28" cy="25" r="11" fill="white" />
        <path d="M28 16C23 16 19 20 19 25C19 30 23 34 28 34C33 34 37 30 37 25C37 20 33 16 28 16Z" fill="#082260" />
        <circle cx="28" cy="25" r="4" fill="white" />
        <path d="M48 18L54 32L60 18H66L58 35H50L42 18H48Z" fill="white" />
        <path d="M70 18H75V35H70V18Z" fill="white" />
        <path d="M82 18H87L96 29V18H101V35H96L87 24V35H82V18Z" fill="white" />
        <path d="M108 35L114 18H120L126 35H121L119 30H113L111 35H108Z" fill="white" />
        <circle cx="138" cy="25" r="4" fill="#F36F21" />
      </svg>
    ),
  },
  // 9. MASAN
  {
    id: 'masan',
    name: 'Masan',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36L24 12L40 36L32 36L24 23L16 36H8Z" fill="#ED1C24" />
        <path d="M24 12L36 36H48L32 8L24 12Z" fill="#B3141B" />
        <path d="M58 14V38H65V22L73 34H77L85 22V38H92V14H84L75 27L66 14H58Z" fill="#000000" />
        <path d="M98 38L106 14H114L122 38H115L113 32H105L103 38H98ZM107 26H111L109 20L107 26Z" fill="#000000" />
        <path d="M126 34L130 29C133 32 137 33 140 33C143 33 145 32 145 30C145 28 143 27 138 26C131 24 127 22 127 18C127 14 132 11 138 11C143 11 147 13 150 16L146 21C143 18 140 17 137 17C134 17 132 18 132 20C132 21 134 22 139 23C146 25 150 27 150 31C150 35 146 39 139 39C133 39 129 37 126 34Z" fill="#ED1C24" />
      </svg>
    ),
  },
  // 10. BIDV
  {
    id: 'bidv',
    name: 'BIDV',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="26,6 46,26 26,46 6,26" fill="#006633" />
        <polygon points="26,14 38,26 26,38 14,26" fill="#FFCC00" />
        <polygon points="26,19 33,26 26,33 19,26" fill="#006633" />
        <path d="M58 12H76C82 12 86 15 86 19C86 22 84 24 81 25C85 26 88 29 88 33C88 37 83 40 76 40H58V12ZM66 22H73C76 22 78 21 78 19C78 17 76 16 73 16H66V22ZM66 35H74C77 35 80 34 80 31C80 28 77 27 74 27H66V35Z" fill="#006633" />
        <path d="M96 12H104V40H96V12Z" fill="#006633" />
        <path d="M112 12H128C138 12 144 18 144 26C144 34 138 40 128 40H112V12ZM120 33H127C133 33 136 29 136 26C136 22 133 19 127 19H120V33Z" fill="#006633" />
      </svg>
    ),
  },
  // 11. VNPT
  {
    id: 'vnpt',
    name: 'VNPT',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="25" r="18" fill="#0072BC" />
        <path d="M14 25C14 19 25 10 35 15C42 19 38 31 26 35C18 38 14 31 14 25Z" fill="white" />
        <circle cx="26" cy="25" r="5" fill="#0072BC" />
        <path d="M54 14L62 38H69L77 14H69L65 29L61 14H54Z" fill="#0072BC" />
        <path d="M82 14V38H89L101 22V38H108V14H101L89 30V14H82Z" fill="#0072BC" />
        <path d="M114 14V38H122V28H132C138 28 142 24 142 21C142 17 138 14 132 14H114ZM122 23V19H130C132 19 134 20 134 21C134 22 132 23 130 23H122Z" fill="#0072BC" />
      </svg>
    ),
  },
  // 12. VINGROUP
  {
    id: 'vingroup',
    name: 'Vingroup',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12L28 36L46 12L38 12L28 27L18 12H10Z" fill="#ED1C24" />
        <path d="M28 28L24 36H32L28 28Z" fill="#FFCC00" />
        <polygon points="28,6 30,11 35,11 31,14 33,19 28,16 23,19 25,14 21,11 26,11" fill="#FFCC00" />
        <path d="M56 16L66 38H74L84 16H75L70 29L65 16H56Z" fill="#ED1C24" />
        <path d="M90 16V38H97V16H90Z" fill="#ED1C24" />
        <path d="M104 16V38H111L123 23V38H130V16H123L111 31V16H104Z" fill="#ED1C24" />
        <circle cx="144" cy="27" r="9" stroke="#ED1C24" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
  // 13. MB BANK
  {
    id: 'mbbank',
    name: 'MB Bank',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,25 26,12 40,25 26,38" fill="#1C3F94" />
        <polygon points="26,16 35,25 26,34 17,25" fill="#ED1C24" />
        <path d="M52 14V38H60V22L68 34H72L80 22V38H88V14H79L70 27L61 14H52Z" fill="#1C3F94" />
        <path d="M96 14H114C120 14 124 17 124 21C124 24 121 26 118 27C122 28 126 31 126 35C126 38 121 40 114 40H96V14ZM104 22H112C114 22 116 21 116 19C116 18 114 17 112 17H104V22ZM104 35H113C115 35 117 34 117 31C117 29 115 28 113 28H104V35Z" fill="#ED1C24" />
      </svg>
    ),
  },
  // 14. VPBANK
  {
    id: 'vpbank',
    name: 'VPBank',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28C12 18 22 10 32 10C36 10 40 12 42 15C38 18 36 22 36 28C36 34 40 38 46 40C38 44 12 40 12 28Z" fill="#008853" />
        <path d="M36 26C36 20 40 16 46 14C44 20 44 24 40 28C38 27 37 27 36 26Z" fill="#EE2E24" />
        <path d="M54 14L64 38H72L82 14H73L68 29L63 14H54Z" fill="#008853" />
        <path d="M88 14V38H96V27H106C112 27 116 24 116 20C116 17 112 14 106 14H88ZM96 22V18H104C106 18 108 19 108 20C108 22 106 22 104 22H96Z" fill="#008853" />
        <path d="M122 14H138C143 14 147 17 147 21C147 24 145 26 142 27C146 28 149 31 149 35C149 38 144 40 138 40H122V14Z" fill="#EE2E24" />
      </svg>
    ),
  },
  // 15. PETROLIMEX
  {
    id: 'petrolimex',
    name: 'Petrolimex',
    svg: (
      <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="25" r="18" fill="#F58220" />
        <path d="M26 12C20 12 16 16 16 22C16 28 20 32 26 32V25H32C34 25 36 23 36 20C36 15 32 12 26 12Z" fill="#004A99" />
        <path d="M52 14V38H60V28H70C76 28 80 24 80 21C80 17 76 14 70 14H52ZM60 23V19H68C70 19 72 20 72 21C72 22 70 23 68 23H60Z" fill="#004A99" />
        <path d="M86 14H106V20H94V23H104V28H94V32H106V38H86V14Z" fill="#004A99" />
        <path d="M112 14H134V20H127V38H119V20H112V14Z" fill="#F58220" />
      </svg>
    ),
  },
  // 16. TH GROUP
  {
    id: 'thtrue',
    name: 'TH True Milk',
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="144" height="30" rx="6" fill="#005BAA" />
        <path d="M22 17H38V22H33V35H27V22H22V17Z" fill="white" />
        <path d="M42 17H48V23H58V17H64V35H58V28H48V35H42V17Z" fill="white" />
        <circle cx="78" cy="26" r="5" fill="#78B82A" />
        <path d="M92 19C90 19 88 21 88 24V35H94V27C94 25 96 24 98 24C100 24 102 25 102 27V35H108V26C108 22 104 19 98 19C95 19 93 20 92 21V19Z" fill="white" />
        <path d="M116 19V35H122V19H116Z" fill="white" />
        <path d="M128 17H134V35H144V40H128V17Z" fill="white" />
      </svg>
    ),
  },
];

export const PartnerLogoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
      {PARTNER_LOGOS.map((partner) => (
        <div
          key={partner.id}
          className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#0041a2]/30 hover:scale-[1.02] transition-all cursor-pointer group"
        >
          {/* CHỈ HIỂN THỊ LOGO CỦA ĐƠN VỊ ĐỐI TÁC - TUYỆT ĐỐI KHÔNG GHI CHỮ */}
          <div className="opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center max-w-full max-h-full">
            {partner.svg}
          </div>
        </div>
      ))}
    </div>
  );
};
