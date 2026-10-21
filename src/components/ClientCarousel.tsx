import React, { useState, useEffect, useRef } from 'react';

export interface ClientItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const CLIENT_LOGOS: ClientItem[] = [
  // 1. EDX CORPORATION
  {
    id: 'edx',
    name: 'EDX Corporation',
    renderLogo: () => (
      <svg
        viewBox="0 0 280 90"
        className="w-full h-auto max-h-[72px] object-contain drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="280" height="90" rx="6" fill="#0D2F57" />
        {/* E */}
        <path d="M42 24H76V31H54V40H73V47H54V56H76V63H42V24Z" fill="white" />
        {/* D with Green Square */}
        <path
          d="M86 24H112C124.5 24 134 32.5 134 43.5C134 54.5 124.5 63 112 63H86V24ZM110 54.5C117 54.5 121.5 49.5 121.5 43.5C121.5 37.5 117 32.5 110 32.5H98V54.5H110Z"
          fill="white"
        />
        <rect x="104" y="38" width="10" height="10" fill="#18983E" />
        {/* X */}
        <path
          d="M141 24H155L168.5 41.5L182 24H196L176 43.5L197 63H183L168.5 45.5L154 63H140L161 43.5L141 24Z"
          fill="white"
        />
        {/* CORPORATION */}
        <text
          x="140"
          y="78"
          fill="white"
          fontSize="11"
          fontWeight="700"
          letterSpacing="4.5"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          CORPORATION
        </text>
      </svg>
    ),
  },

  // 2. CAMXU Chinese
  {
    id: 'camxu',
    name: 'CAMXU Chinese',
    renderLogo: () => (
      <svg
        viewBox="0 0 280 90"
        className="w-full h-auto max-h-[72px] object-contain"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* C */}
        <path
          d="M58 31C54 25 47 22 40 22C27 22 18 31 18 43C18 55 27 64 40 64C47 64 54 61 58 55L50 49C47 53 44 55 40 55C33 55 28 49 28 43C28 37 33 31 40 31C44 31 47 33 50 37L58 31Z"
          fill="black"
        />
        {/* A */}
        <path
          d="M74 22H90L108 64H95L91 53H73L69 64H56L74 22ZM82 32L77 45H87L82 32Z"
          fill="black"
        />
        {/* Mic icon inside A */}
        <rect x="79.5" y="37" width="5" height="9" rx="2.5" fill="white" />
        <line x1="79.5" y1="40" x2="84.5" y2="40" stroke="black" strokeWidth="0.8" />
        <line x1="79.5" y1="42.5" x2="84.5" y2="42.5" stroke="black" strokeWidth="0.8" />
        <path
          d="M78 41.5C78 45 80 47.5 82 47.5C84 47.5 86 45 86 41.5"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <line x1="82" y1="47.5" x2="82" y2="52" stroke="white" strokeWidth="1.2" />
        <line x1="79.5" y1="52" x2="84.5" y2="52" stroke="white" strokeWidth="1.2" />
        {/* M */}
        <path
          d="M112 22H124L134 46L144 22H156V64H145V36L137 55H131L123 36V64H112V22Z"
          fill="black"
        />
        {/* X */}
        <path
          d="M162 22H176L189 42L202 22H216L197 43L217 64H203L189 45L175 64H161L181 43L162 22Z"
          fill="#C42026"
        />
        {/* U */}
        <path
          d="M221 22H233V47C233 53.5 237 56.5 242 56.5C247 56.5 251 53.5 251 47V22H263V47C263 59 254 64.5 242 64.5C230 64.5 221 59 221 47V22Z"
          fill="#C42026"
        />
        {/* Chinese */}
        <text
          x="140"
          y="83"
          fill="#C42026"
          fontSize="19"
          fontWeight="800"
          letterSpacing="0.8"
          textAnchor="middle"
          fontFamily="'Arial Narrow', 'Segoe UI', sans-serif"
        >
          Chinese
        </text>
      </svg>
    ),
  },

  // 3. 1001 startup INNOVATION IS
  {
    id: 'startup1001',
    name: '1001 Startup Innovation',
    renderLogo: () => (
      <svg
        viewBox="0 0 280 90"
        className="w-full h-auto max-h-[72px] object-contain drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="280" height="90" rx="6" fill="#005C9E" />
        {/* 1 */}
        <rect x="74" y="14" width="7" height="26" fill="#F58220" rx="1.5" />
        {/* 0 0 */}
        <circle cx="102" cy="27" r="11" stroke="#F58220" strokeWidth="5.5" fill="none" />
        <circle cx="125" cy="27" r="11" stroke="#F58220" strokeWidth="5.5" fill="none" />
        {/* 1 */}
        <rect x="146" y="14" width="7" height="26" fill="#F58220" rx="1.5" />

        {/* startup text */}
        <text
          x="108"
          y="63"
          fill="white"
          fontSize="24"
          fontWeight="800"
          letterSpacing="-0.5"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          startup
        </text>

        {/* Rocket Icon */}
        <g transform="translate(160, 21) rotate(18)">
          <polygon points="4,26 10,26 7,35" fill="#F58220" />
          <polygon points="5,26 9,26 7,32" fill="#FFD000" />
          <path d="M7 6C12 11 13 21 13 26H1C1 21 2 11 7 6Z" fill="white" />
          <path d="M1 20L-3 26H1V20Z" fill="#1C75BC" />
          <path d="M13 20L17 26H13V20Z" fill="#1C75BC" />
          <circle cx="7" cy="14" r="2.8" fill="#005C9E" />
        </g>

        {/* INNOVATION IS */}
        <text
          x="138"
          y="80"
          fill="white"
          fontSize="11"
          fontWeight="700"
          letterSpacing="4"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          INNOVATION IS
        </text>
      </svg>
    ),
  },

  // 4. 'TSS technology
  {
    id: 'tss',
    name: 'TSS Technology',
    renderLogo: () => (
      <svg
        viewBox="0 0 280 90"
        className="w-full h-auto max-h-[72px] object-contain"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Apostrophe / tick */}
        <rect x="38" y="16" width="8" height="15" fill="#00579E" rx="1" />
        {/* TSS */}
        <text
          x="54"
          y="60"
          fill="#00579E"
          fontSize="54"
          fontWeight="900"
          letterSpacing="-2.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TSS
        </text>
        {/* technology */}
        <text
          x="140"
          y="83"
          fill="#00579E"
          fontSize="13"
          fontWeight="700"
          letterSpacing="8.5"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          technology
        </text>
      </svg>
    ),
  },

  // 5. INSTITUTE FOR CONSERVATION OF MONUMENTS
  {
    id: 'conservation',
    name: 'Institute for Conservation of Monuments',
    renderLogo: () => (
      <svg
        viewBox="0 0 280 90"
        className="w-full h-auto max-h-[72px] object-contain drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="280" height="90" rx="6" fill="#D4D6D9" />
        {/* Monument Icon */}
        <g
          transform="translate(140, 28) scale(0.9)"
          stroke="#8D4A38"
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 -15 L10 -4 L16 -4 C20 -4 22 -1 22 2 C22 4 18 4 15 4 L0 4 L-15 4 C-18 4 -22 4 -22 2 C-22 -1 -20 -4 -16 -4 L-10 -4 Z" />
          <path d="M0 -9 L5 -4 L-5 -4 Z" fill="#8D4A38" stroke="none" />
          <path d="M-8 4 L-8 15 L-3 15 L-3 8 L3 8 L3 15 L8 15 L8 4" />
        </g>
        {/* Text */}
        <text
          x="140"
          y="66"
          fill="#8D4A38"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="1"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          INSTITUTE
        </text>
        <text
          x="140"
          y="77"
          fill="#8D4A38"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.8"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          FOR CONSERVATION OF MONUMENTS
        </text>
      </svg>
    ),
  },
];

export const ClientCarousel: React.FC = () => {
  // Current active index (0 to 4)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = CLIENT_LOGOS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide every 4 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Compute 3 items visible on desktop starting from currentIndex
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(CLIENT_LOGOS[(currentIndex + i) % total]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container with Previous and Next Controls */}
      <div className="relative flex items-center justify-between gap-3 sm:gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Khách hàng trước"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-[#00579E] hover:text-[#082554] hover:bg-slate-50 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer flex-shrink-0 z-10"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>

        {/* Desktop / Tablet View (3 items side by side) */}
        <div className="hidden md:grid grid-cols-3 gap-6 flex-1 items-center">
          {visibleItems.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 h-28 lg:h-32 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#0041a2]/30 hover:scale-[1.02] transition-all cursor-pointer group"
            >
              <div className="w-full flex items-center justify-center opacity-95 group-hover:opacity-100 transition-opacity">
                {client.renderLogo()}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (1 item at a time) */}
        <div className="md:hidden flex-1 flex items-center justify-center">
          <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 h-28 flex items-center justify-center shadow-xs">
            <div className="w-full flex items-center justify-center">
              {CLIENT_LOGOS[currentIndex].renderLogo()}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Khách hàng tiếp theo"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-[#00579E] hover:text-[#082554] hover:bg-slate-50 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer flex-shrink-0 z-10"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      </div>

      {/* Pagination Dots (5 dots matching the 5 clients in screenshots) */}
      <div className="flex items-center justify-center gap-2.5 pt-8">
        {CLIENT_LOGOS.map((_, dotIdx) => {
          const isActive = dotIdx === currentIndex;
          return (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Chuyển đến khách hàng ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                isActive
                  ? 'w-8 bg-[#F59F00] shadow-xs'
                  : 'w-2.5 bg-[#005C9E]/25 hover:bg-[#005C9E]/50'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
