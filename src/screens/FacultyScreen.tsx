import React from 'react';
import { ScreenType } from '../types';
import { FACULTY_MEMBERS } from '../data/mockData';

interface FacultyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const FacultyScreen: React.FC<FacultyScreenProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const studentSuccessStories = [
    {
      student: 'Nguyễn Thị Minh Hạnh',
      oldRole: 'Sinh viên mới tốt nghiệp ĐH Thương Mại',
      newRole: 'Kế toán tổng hợp tại Tập đoàn Dược phẩm',
      feedback:
        'Nhờ khóa học Kế toán Tổng hợp tại Anta, em đã tự tin vượt qua bài kiểm tra hạch toán hóa đơn thật và lên BCTC trong buổi phỏng vấn. Các thầy cô kèm cặp rất tận tâm.',
    },
    {
      student: 'Trần Quốc Đạt',
      oldRole: 'Kế toán kho nội bộ',
      newRole: 'Phụ trách Thuế & Báo cáo công ty Xây dựng',
      feedback:
        'Khóa Thuế Thực hành giúp tôi nắm vững các bẫy rủi ro tài khoản 131, 331 và bảo vệ chi phí lãi vay, khấu hao trước đoàn thanh tra thuế.',
    },
    {
      student: 'Vũ Thanh Tùng',
      oldRole: 'Chủ chuỗi F&B 5 chi nhánh tại Hà Nội',
      newRole: 'CEO kiểm soát dòng tiền và biên lợi nhuận ròng',
      feedback:
        'Khóa học Quản trị tài chính của Anta đã cứu doanh nghiệp tôi thoát khỏi tình trạng lãi trên giấy nhưng tài khoản luôn cạn kiệt tiền mặt. Rất giá trị cho lãnh đạo.',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Banner - Airy & Serene */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            ĐỘI NGŨ CHUYÊN GIA ANTA GROUP
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            150+ Kế Toán Trưởng &amp; Cố Vấn Thuế
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            100% giảng viên tại Anta là Kế toán trưởng, Giám đốc tài chính và Kiểm toán viên có từ 12
            đến 20 năm kinh nghiệm thực chiến.
          </p>
        </div>
      </section>

      {/* Faculty Profiles Grid - Spacious & Clean */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            GIẢNG VIÊN TIÊU BIỂU
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554]">
            Học Cùng Những Người Thầy Làm Nghề
          </h2>
          <p className="text-[14.5px] text-slate-600">
            Không dạy lý thuyết suông, giảng viên Anta mang kinh nghiệm xử lý hàng trăm ca quyết toán
            vào từng bài giảng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACULTY_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 space-y-2 sm:space-y-0"
            >
              {/* Clean Icon / Avatar Fallback Carrier */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#f8f9ff] border border-slate-200 flex flex-col items-center justify-center flex-shrink-0 text-[#0041a2]">
                <span className="material-symbols-outlined text-[44px]">account_circle</span>
                <span className="text-[11px] font-bold text-slate-500 font-mono mt-0.5">
                  {member.experience}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-[19px] font-bold text-[#082554]">{member.name}</h3>
                  <span className="text-[12.5px] font-semibold text-[#0041a2] block mt-0.5">
                    {member.title}
                  </span>
                </div>

                <p className="text-[13.5px] text-slate-600 leading-relaxed">{member.bio}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">
                    Thế mạnh chuyên môn:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11.5px] font-medium bg-[#f8f9ff] text-slate-700 border border-slate-200/60 px-2.5 py-0.5 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[12.5px] text-slate-500 italic pt-1 border-t border-slate-50">
                  “{member.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories - Serene & Airy */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-24">
        <div className="bg-[#f8f9ff] rounded-3xl p-8 sm:p-14 border border-slate-200/80 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
              KẾT QUẢ ĐÀO TẠO
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#082554]">
              Học Viên Nói Gì Về Học Viện Anta
            </h2>
            <p className="text-[14.5px] text-slate-600">
              Hơn 2.500 học viên đã vững bước trong sự nghiệp kế toán và tài chính.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentSuccessStories.map((story, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <p className="text-[13.5px] text-slate-600 leading-relaxed italic">
                  “{story.feedback}”
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-0.5">
                  <h4 className="font-bold text-[#082554] text-[14.5px]">{story.student}</h4>
                  <p className="text-[12px] text-slate-400 line-through">{story.oldRole}</p>
                  <p className="text-[12.5px] font-semibold text-[#2F9E44]">{story.newRole}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[14px] shadow-sm transition-all cursor-pointer"
            >
              Đăng Ký Học Cùng Chuyên Gia Anta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
