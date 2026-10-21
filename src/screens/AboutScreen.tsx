import React from 'react';
import { ScreenType } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';
import { ClientCarousel } from '../components/ClientCarousel';

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenConsultation }) => {
  const milestones = [
    {
      year: '2009',
      title: 'Khởi sinh Anta Group',
      desc: 'Cung cấp dịch vụ Kế toán - Thuế - Tài chính trọn gói chất lượng cao cho doanh nghiệp Việt.',
    },
    {
      year: '2014',
      title: 'Khối Tư Vấn & Thuế',
      desc: 'Mở rộng quy mô, đồng hành cùng hơn 10.000 doanh nghiệp vừa và nhỏ giải quyết tồn đọng sổ sách.',
    },
    {
      year: '2019',
      title: 'Thành lập Học viện Anta',
      desc: 'Đào tạo thế hệ kế toán làm nghề thực chiến, trực tiếp hạch toán trên kho hóa đơn sống.',
    },
    {
      year: '2026',
      title: 'Chuẩn Hóa Số Hóa',
      desc: 'Đào tạo thành nghề hơn 2.500 học viên, đồng hành cùng hơn 1.000.000 doanh nghiệp khách hàng trên toàn quốc.',
    },
  ];

  const pillars = [
    {
      icon: 'verified_user',
      title: 'Trung Thực & Liêm Chính',
      desc: 'Lấy tính minh bạch và đạo đức nghề nghiệp làm kim chỉ nam số một trong mọi nghiệp vụ xử lý số liệu.',
    },
    {
      icon: 'architecture',
      title: 'Chuẩn Mực & Chuyên Nghiệp',
      desc: 'Mọi quy trình từ hạch toán, rà soát chứng từ đến lập BCTC đều tuân thủ nghiêm ngặt chuẩn mực kế toán.',
    },
    {
      icon: 'handshake',
      title: 'Đồng Hành Lâu Dài',
      desc: 'Duy trì mạng lưới hỗ trợ giải đáp tình huống thực tế cho học viên trong suốt quá trình đi làm.',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Banner - Airy & Serene */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <div className="w-20 h-20 rounded-full bg-white/10 p-1 mb-2 shadow-lg border border-white/20">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Học viện Anta"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            VỀ HỌC VIỆN &amp; HỆ SINH THÁI
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            17+ Năm Kiến Tạo Nền Tảng Tài Chính
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            Học viện Đào tạo Kế toán - Tài chính Thực chiến Anta trực thuộc Tập đoàn Anta Group (2009).
          </p>
        </div>
      </section>

      {/* Story & Ecosystem Grid - Generous Padding */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
              LỊCH SỬ HÌNH THÀNH
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554] leading-snug">
              Bệ Phóng Vững Chắc Từ Thực Tiễn
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed text-justify">
              Được thành lập từ năm 2009, Anta Group khởi đầu từ các dịch vụ tư vấn thuế và hoàn thiện
              sổ sách nội bộ cho hàng ngàn doanh nghiệp trên khắp cả nước. Nhận thấy khoảng cách rất lớn
              giữa kiến thức lý thuyết và thực tế công việc tại doanh nghiệp, ban lãnh đạo đã sáng lập
              Học viện Kế toán - Tài chính Anta.
            </p>
            <p className="text-[15px] text-slate-600 leading-relaxed text-justify">
              Tại Anta, học viên không học các tình huống giả định mà trực tiếp phân loại, rà soát và
              định khoản trên những bộ hóa đơn, chứng từ sống đa ngành nghề (sản xuất, thương mại, dịch
              vụ, xuất nhập khẩu).
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[14px] transition-all cursor-pointer shadow-sm"
              >
                Gặp Gỡ Ban Giảng Huấn
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#f8f9ff] border border-slate-200/80 rounded-3xl p-8 space-y-4">
            <h3 className="text-[18px] font-bold text-[#082554] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0041a2]">account_tree</span>
              <span>Cơ Cấu Hệ Sinh Thái Anta Group</span>
            </h3>

            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-bold text-[#0041a2] uppercase">01 · Doanh nghiệp</span>
              <h4 className="font-bold text-[#082554] text-[16px]">Kế Toán Anta</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Đại lý thuế, kế toán trưởng cho thuê, hoàn thiện sổ sách và quyết toán thuế chuyên nghiệp.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#dae2ff] space-y-1">
              <span className="text-[11px] font-bold text-[#2F9E44] uppercase">02 · Đào tạo</span>
              <h4 className="font-bold text-[#0041a2] text-[16px]">Học Viện Kế Toán Anta</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Đào tạo kế toán thực hành, thuế chuyên sâu, tài chính CEO và đào tạo In-house theo yêu cầu.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-bold text-[#F59F00] uppercase">03 · Kiểm toán</span>
              <h4 className="font-bold text-[#082554] text-[16px]">Anta Audit &amp; Consulting</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Kiểm toán nội bộ, tư vấn chuyển đổi chuẩn mực IFRS và tái cấu trúc tài chính doanh nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-24">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            CHẶNG ĐƯỜNG PHÁT TRIỂN
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554]">
            Hành Trình 17+ Năm Phát Triển
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col gap-3 space-y-1"
            >
              <span className="font-mono text-[28px] font-extrabold text-[#0041a2]">
                {item.year}
              </span>
              <h3 className="font-bold text-[16px] text-[#082554]">{item.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-24">
        <div className="bg-[#082554] text-white rounded-3xl p-8 sm:p-14">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
              GIÁ TRỊ CỐT LÕI
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold">
              Ba Trụ Cột Đạo Đức Làm Nghề
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pil, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F59F00]">
                  <span className="material-symbols-outlined text-[28px]">{pil.icon}</span>
                </div>
                <h3 className="font-bold text-[17px] text-white">{pil.title}</h3>
                <p className="text-[13.5px] text-slate-300 leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Khách hàng tiêu biểu của Anta Group */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            MẠNG LƯỚI ĐỐI TÁC
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#082554]">
            Khách Hàng Tiêu Biểu Của Anta Group
          </h2>
          <p className="text-[14.5px] text-slate-600">
            Các tập đoàn công nghệ, doanh nghiệp quốc tế và cơ quan nghiên cứu tiêu biểu đã lựa chọn tin cậy hệ sinh thái dịch vụ của Anta Group.
          </p>
        </div>

        <div className="pt-2">
          <ClientCarousel />
        </div>
      </section>
    </div>
  );
};
