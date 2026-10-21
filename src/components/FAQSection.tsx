import React, { useState, useMemo } from 'react';

export interface FAQItem {
  id: string;
  category: 'dang-ky' | 'lich-hoc' | 'chung-chi' | 'chinh-sach';
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_LIST: FAQItem[] = [
  // 1. ĐĂNG KÝ & LỘ TRÌNH TƯ VẤN
  {
    id: 'faq-1',
    category: 'dang-ky',
    question: 'Quy trình đăng ký học tại Học viện Anta diễn ra như thế nào?',
    answer:
      'Quy trình nhập học tại Anta được tối ưu theo 3 bước bảo mật và tinh gọn: (1) Đăng ký thông tin tư vấn trực tuyến hoặc qua hotline; (2) Chuyên viên học vụ liên hệ trong 15 phút để phân tích mục tiêu nghề nghiệp và sắp xếp lịch kiểm tra năng lực đầu vào miễn phí; (3) Nhận đề xuất lộ trình đào tạo cá nhân hóa và tiếp nhận tài liệu học tập.',
    highlight: 'Đánh giá năng lực đầu vào 100% miễn phí',
  },
  {
    id: 'faq-2',
    category: 'dang-ky',
    question: 'Người mất gốc hoặc chưa từng học chuyên ngành Kế toán có theo học được không?',
    answer:
      'Hoàn toàn học tốt. Giáo trình Anta được xây dựng từ thực tiễn với phương pháp đào tạo "Cầm tay chỉ việc", bắt đầu từ bản chất luân chuyển chứng từ sống (Hóa đơn, UNC, Phiếu thu, Tờ khai thuế...), sau đó mới lên phần mềm MISA, FAST và Excel. Đội ngũ Kế toán trưởng trực tiếp kèm cặp 1:1, giải đáp cặn kẽ đến khi học viên tự tin làm được việc.',
    highlight: 'Phương pháp cầm tay chỉ việc trên chứng từ sống',
  },
  {
    id: 'faq-3',
    category: 'dang-ky',
    question: 'Học viện có các chính sách học bổng hoặc hỗ trợ học phí không?',
    answer:
      'Học viện Anta thường xuyên có các quỹ học bổng khuyến học dành cho sinh viên khối ngành kinh tế, tân cử nhân đạt thành tích cao, và chính sách tài trợ đào tạo nghiệp vụ chuyên sâu cho các doanh nghiệp đối tác. Bạn vui lòng liên hệ ban tuyển sinh để được xét duyệt điều kiện nhận học bổng tương ứng.',
    highlight: 'Quỹ học bổng khuyến học & Đào tạo doanh nghiệp',
  },

  // 2. LỊCH HỌC & HÌNH THỨC ĐÀO TẠO
  {
    id: 'faq-4',
    category: 'lich-hoc',
    question: 'Thời gian các ca học tại Học viện được bố trí vào khung giờ nào?',
    answer:
      'Nhằm tạo điều kiện thuận lợi nhất cho người đi làm và sinh viên, học viện tổ chức đa dạng các ca học linh hoạt: Các lớp tối trong tuần (19h00 - 21h30, lịch 2-4-6 hoặc 3-5-7) và các lớp cuối tuần (Sáng/Chiều thứ Bảy và Chủ Nhật). Học viên có thể chủ động chọn ca học phù hợp với quỹ thời gian của mình.',
    highlight: 'Lớp tối linh hoạt & Lớp cuối tuần cho người đi làm',
  },
  {
    id: 'faq-5',
    category: 'lich-hoc',
    question: 'Nếu bận công tác hoặc có việc đột xuất nghỉ học thì có được học bù không?',
    answer:
      'Có. Học viện Anta áp dụng chính sách bảo lưu thời hạn tối đa 12 tháng. Khi học viên nghỉ có phép, học vụ sẽ chủ động sắp xếp lịch học bù miễn phí ở các lớp có cùng tiến độ, đồng thời cung cấp tài khoản LMS để xem lại bản ghi hình bài giảng chi tiết của buổi học đó.',
    highlight: 'Cam kết bảo lưu 12 tháng & Học bù không giới hạn',
  },
  {
    id: 'faq-6',
    category: 'lich-hoc',
    question: 'Hình thức học Trực tiếp (Offline) và Online qua mạng khác nhau như thế nào?',
    answer:
      'Cả hai hình thức đều giảng dạy trên 100% chứng từ thật. Lớp Offline học trực tiếp tại phòng thực hành cấu hình cao tại Tòa nhà Anta, Hà Nội. Lớp Online học tương tác trực tiếp 2 chiều qua Zoom (không phải video thu sẵn), giảng viên Ultraviewer trực tiếp vào máy tính của học viên để sửa lỗi hạch toán và hướng dẫn thao tác phần mềm.',
    highlight: 'Online tương tác 2 chiều + Ultraviewer hỗ trợ 1:1',
  },

  // 3. CHỨNG CHỈ & GIÁ TRỊ PHÁP LÝ
  {
    id: 'faq-7',
    category: 'chung-chi',
    question: 'Chứng chỉ tốt nghiệp của Học viện Anta có giá trị pháp lý ra sao?',
    answer:
      'Chứng chỉ được cấp chính thức bởi Học viện Đào tạo Kế toán - Tài chính Anta thuộc Anta Group, có giá trị công nhận năng lực làm nghề toàn quốc. Mỗi văn bằng được cấp một mã số định danh duy nhất kèm mã băm chữ ký số SHA-256 lưu trữ trên máy chủ bảo mật, cho phép nhà tuyển dụng tra cứu và xác thực tức thì.',
    highlight: 'Mã băm SHA-256 xác thực văn bằng điện tử toàn quốc',
  },
  {
    id: 'faq-8',
    category: 'chung-chi',
    question: 'Chứng chỉ Anta có được các tập đoàn và nhà tuyển dụng đánh giá cao không?',
    answer:
      'Kế thừa uy tín 17+ năm trong lĩnh vực kiểm toán, tư vấn thuế của Anta Group và mạng lưới hơn 1.000.000+ khách hàng doanh nghiệp, chứng chỉ Anta là bảo chứng tin cậy về tác phong kỷ luật, kỹ năng xử lý chứng từ cẩn trọng và năng lực thích ứng ngay với công việc kế toán tổng hợp mà không cần đào tạo lại.',
    highlight: 'Bảo chứng uy tín từ hệ sinh thái Anta Group',
  },
  {
    id: 'faq-9',
    category: 'chung-chi',
    question: 'Làm thế nào để nhà tuyển dụng hoặc học viên kiểm tra tính xác thực của chứng chỉ?',
    answer:
      'Học viên và nhà tuyển dụng có thể truy cập mục "Cổng học viên" trên thanh điều hướng website, nhập Mã chứng chỉ (ví dụ: ANT-2026-0891) hoặc Họ tên để hệ thống bảo mật đối soát dữ liệu và xuất phiếu xác thực văn bằng hợp lệ trong vài giây.',
    highlight: 'Tra cứu trực tuyến minh bạch trên Cổng học viên',
  },

  // 4. CHÍNH SÁCH HỌC VỤ & HỖ TRỢ VIỆC LÀM
  {
    id: 'faq-10',
    category: 'chinh-sach',
    question: 'Học viện có hỗ trợ giới thiệu việc làm sau khi hoàn thành khóa học không?',
    answer:
      '100% học viên tốt nghiệp đạt loại Khá - Giỏi được Phòng Hợp tác Doanh nghiệp Anta kết nối tuyển dụng trực tiếp vào mạng lưới doanh nghiệp đối tác. Ngoài ra, học viện hỗ trợ hoàn thiện CV kế toán chuẩn chỉnh và tổ chức các buổi huấn luyện kỹ năng phỏng vấn chuyên môn cùng Kế toán trưởng.',
    highlight: 'Kết nối việc làm trực tiếp & Luyện phỏng vấn cùng chuyên gia',
  },
  {
    id: 'faq-11',
    category: 'chinh-sach',
    question: 'Sau khi tốt nghiệp, học viên có tiếp tục được hỗ trợ nghiệp vụ không?',
    answer:
      'Có. Anta cam kết đồng hành trọn đời nghề nghiệp. Học viên được tham gia Group nghiệp vụ kín có giảng viên và chuyên gia thuế hỗ trợ giải đáp các tình huống phát sinh thực tế tại doanh nghiệp (thanh tra thuế, quyết toán sổ sách, rà soát hóa đơn rủi ro...) hoàn toàn miễn phí.',
    highlight: 'Hỗ trợ nghiệp vụ kế toán - thuế trọn đời làm nghề',
  },
];

interface FAQSectionProps {
  onOpenConsultation: (course?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first question expanded by default for welcoming context
  });

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'dang-ky', label: 'Đăng Ký & Lộ Trình' },
    { id: 'lich-hoc', label: 'Lịch Học & Hình Thức' },
    { id: 'chung-chi', label: 'Chứng Chỉ & Giá Trị' },
    { id: 'chinh-sach', label: 'Chính Sách & Việc Làm' },
  ];

  const filteredFAQs = useMemo(() => {
    return FAQ_LIST.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchSearch =
        !cleanSearch ||
        item.question.toLowerCase().includes(cleanSearch) ||
        item.answer.toLowerCase().includes(cleanSearch) ||
        (item.highlight && item.highlight.toLowerCase().includes(cleanSearch));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-[#f8f9ff] py-20 lg:py-28 border-t border-slate-100" id="faq">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 space-y-12">
        {/* Section Header with Generous Breathing Room */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
            GIẢI ĐÁP THẮC MẮC PHỔ BIẾN
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#082554] tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            Tổng hợp những thông tin chi tiết về thủ tục nhập học, lịch học linh hoạt, giá trị chứng chỉ
            và cam kết đồng hành nghề nghiệp từ Học viện Kế toán - Tài chính Anta.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0041a2] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#082554] hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 flex items-center bg-white border border-slate-200/90 px-3.5 py-2 rounded-xl text-[13.5px] shadow-2xs focus-within:border-[#0041a2] transition-colors">
            <span className="material-symbols-outlined text-[18px] text-slate-400 mr-2 flex-shrink-0">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm câu hỏi..."
              className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'border-[#0041a2]/30 shadow-sm'
                      : 'border-slate-200/80 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#0041a2] font-mono font-bold text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        Q
                      </span>
                      <h3
                        className={`text-[15.5px] sm:text-[16.5px] font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#0041a2]' : 'text-[#082554]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-[#0041a2]/10 text-[#0041a2] rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-[14px] sm:text-[14.5px] leading-relaxed border-t border-slate-100 pt-4 space-y-3">
                      <p>{faq.answer}</p>
                      {faq.highlight && (
                        <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2F9E44] bg-[#ebfbee] px-3 py-1 rounded-md">
                          <span className="material-symbols-outlined text-[15px]">check_circle</span>
                          <span>{faq.highlight}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <span className="material-symbols-outlined text-[36px] text-slate-400">
                help_outline
              </span>
              <p className="text-slate-600 text-[14.5px]">
                Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[13px] text-[#0041a2] font-semibold hover:underline cursor-pointer"
              >
                Xóa tìm kiếm và hiển thị tất cả
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#082554] to-[#0041a2] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
              BẠN VẪN CÒN CÂU HỎI KHÁC?
            </span>
            <h4 className="text-[18px] sm:text-[20px] font-bold">
              Chuyên viên Học vụ Anta luôn sẵn sàng hỗ trợ bạn
            </h4>
            <p className="text-[13.5px] text-slate-300 max-w-xl">
              Nhận phản hồi giải đáp lộ trình, học phí và lịch học cụ thể trong vòng 15 phút.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold text-[13.5px] px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              Đặt câu hỏi trực tiếp
            </button>
            <a
              href="tel:0919876543"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-[13.5px] px-4 py-3 rounded-xl border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">call</span>
              <span>091 987 6543</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
