import { Course, TaxArticle, FacultyMember, StudentCertificate, Partner } from '../types';

// File logo chuẩn của Học viện Kế toán Anta (logostickyamban-01-01.png)
export const ANTA_OFFICIAL_LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnx4J1xan0fq0fBzK6Pvrtq6Dx9x7pG65pRL648A2iF8vViuqKlIPQpsYjJWKgX0PTokYYRo6qSYnvFLeeLMzcSA0WoLiiszZlQRhm5S93uxuvaw2OKo0FiXLNHwiBCkvX0DPOtG5CUtgYen8kw-rLnyAhGLt2leDADzIZ0u4PKWOX41nr1J2uYX1B7mB0lncq0RihX6GHMssTkgKR4LrBpt9fibnnwHT3JciiISWvT5E9eK_HG0I1lQXbwfkjojcA9cs';

export const BRAND_SYMBOLS = [
  {
    id: 'quyen-sach',
    title: 'Quyển sách',
    icon: 'menu_book',
    color: '#0041a2',
    bg: 'bg-[#0041a2]/10',
    description:
      'Tri thức và nền tảng giáo dục vững chắc, là gốc rễ của mọi sự phát triển và nghiệp vụ chuẩn mực.',
    detail:
      'Đại diện cho kho tàng tri thức kế toán - tài chính được tích lũy và chuẩn hóa qua hơn 17 năm thực chiến. Mỗi bài giảng, giáo trình tại Anta đều bắt nguồn từ sự nghiên cứu sâu sắc về chuẩn mực kế toán Việt Nam (VAS) và quốc tế (IFRS).',
  },
  {
    id: 'dau-tich',
    title: 'Dấu tích cách điệu',
    icon: 'check_circle',
    color: '#2F9E44',
    bg: 'bg-[#2F9E44]/15',
    description:
      'Sự đúng đắn, chuẩn mực kế toán - thuế và tinh thần trách nhiệm hoàn thành công việc chỉn chu.',
    detail:
      'Nghề kế toán đòi hỏi sự chuẩn xác đến từng con số. Dấu tích tượng trưng cho sự đối chiếu khớp đúng giữa hóa đơn, chứng từ gốc và báo cáo tài chính, mang lại sự an tâm tuyệt đối cho doanh nghiệp.',
  },
  {
    id: 'mam-non',
    title: 'Mầm non cách điệu',
    icon: 'eco',
    color: '#375ca5',
    bg: 'bg-[#375ca5]/15',
    description:
      'Học viện Anta nuôi dưỡng, đánh thức tiềm năng và phát triển tài năng chuyên môn của từng thế hệ kế toán.',
    detail:
      'Dù bạn là sinh viên mới ra trường hay người trái ngành, Anta như mảnh đất màu mỡ ươm mầm năng lực làm nghề, giúp bạn tự tin vươn lên thành kế toán tổng hợp, kế toán trưởng bản lĩnh.',
  },
  {
    id: 'ba-bang',
    title: 'Ba bảng vươn lên',
    icon: 'trending_up',
    color: '#F59F00',
    bg: 'bg-[#F59F00]/20',
    description:
      'Quá trình học tập tích lũy, tiến bộ không ngừng và từng bước chinh phục những mục tiêu nấc thang sự nghiệp cao hơn.',
    detail:
      'Ba cột màu (Đỏ cam - Vàng kim - Xanh lá) vươn cao tượng trưng cho ba nấc thang trưởng thành của học viên: Nắm chắc nghiệp vụ cơ bản -> Làm chủ phần mềm & thuế chuyên sâu -> Trở thành nhà quản trị tài chính chiến lược.',
  },
];

export const BRAND_COLORS = [
  {
    name: 'Xanh dương',
    hex: '#0041a2',
    meaning: 'Tươi trẻ, chuyên nghiệp và vững vàng.',
    application: 'Màu nền tảng đại diện cho học viện, biểu thị sự uy tín và niềm tin tài chính vững chãi.',
  },
  {
    name: 'Đỏ – cam',
    hex: '#E8590C',
    meaning: 'Nhiệt huyết, chủ động và khát vọng vươn lên.',
    application: 'Màu điểm nhấn cho các hành động quan trọng, thể hiện tinh thần nhiệt tình cống hiến của giảng viên.',
  },
  {
    name: 'Vàng kim',
    hex: '#F59F00',
    meaning: 'Trí tuệ, sáng tạo và tinh thần tích cực.',
    application: 'Tượng trưng cho sự thịnh vượng tài chính, trí tuệ soi sáng những con số và báo cáo chiến lược.',
  },
  {
    name: 'Xanh lá',
    hex: '#2F9E44',
    meaning: 'Phát triển, bền bỉ và hướng tới tương lai.',
    application: 'Tượng trưng cho sự tăng trưởng bền vững của học viên và doanh nghiệp đối tác.',
  },
  {
    name: 'Đen – xám',
    hex: '#0F172A',
    meaning: 'Rõ ràng, nghiêm túc và cân bằng mọi quyết định.',
    application: 'Màu của chữ và cấu trúc dữ liệu, phản ánh tính kỷ luật, sự liêm chính và nguyên tắc kế toán.',
  },
  {
    name: 'Trắng tinh khôi',
    hex: '#FFFFFF',
    border: true,
    meaning: 'Minh bạch, rõ ràng và chân thực trong đạo đức.',
    application: 'Khoảng không gian minh bạch, trung thực và liêm khiết trong quản lý dòng tiền và tài sản.',
  },
];

export const COURSES: Course[] = [
  {
    id: 'kt-tong-hop',
    code: 'KH-01',
    badge: 'Khóa Học 01 • Bán Chạy',
    badgeType: 'hot',
    category: 'ke-toan-vien',
    title: 'Kế Toán Thực Hành Tổng Hợp',
    subtitle: 'Chứng từ • Định khoản • Phần mềm kế toán',
    description:
      'Khóa học cầm tay chỉ việc trên 100% chứng từ hóa đơn thật của doanh nghiệp. Đào tạo toàn diện quy trình lập phiếu, ghi sổ cái, hạch toán doanh thu, chi phí, khấu hao tài sản và kho bãi.',
    highlights: [
      'Thực hành phân loại và xử lý hồ sơ chứng từ kế toán thực tế',
      'Thành thạo nhập liệu và đối chiếu sổ sách trên MISA SME 2026',
      'Tự tin lên Báo cáo tài chính và Bảng cân đối tài khoản chuẩn xác',
    ],
    duration: '24 Buổi',
    tuitionNote: 'Liên hệ tư vấn lộ trình & chính sách học bổng',
    nextStartDate: '15/11/2026',
    schedule: 'Tối 2-4-6 hoặc Thứ 7 & CN',
    format: 'Cả hai hình thức',
    targetAudience: 'Sinh viên năm cuối, người mới đi làm, kế toán nội bộ muốn lên tổng hợp.',
    syllabus: [
      {
        module: 'Phần 1: Nguyên lý & Bản chất kế toán ứng dụng',
        topics: [
          'Hệ thống tài khoản theo Thông tư 200 & 133 mới nhất',
          'Nguyên tắc định khoản kép và mối quan hệ Tài sản - Nguồn vốn',
          'Kỹ năng đọc và kiểm tra tính hợp pháp của hóa đơn chứng từ',
        ],
      },
      {
        module: 'Phần 2: Thực hành hạch toán nghiệp vụ thực tế',
        topics: [
          'Kế toán mua bán hàng hóa, nguyên vật liệu và quản lý kho',
          'Kế toán tiền lương, các khoản trích theo lương và BHXH',
          'Kế toán TSCĐ, CCDC, chi phí trả trước và phân bổ khấu hao',
          'Tập hợp chi phí và tính giá thành sản phẩm / dịch vụ',
        ],
      },
      {
        module: 'Phần 3: Làm chủ phần mềm MISA SME & Excel kế toán',
        topics: [
          'Thiết lập thông tin ban đầu và số dư tài khoản',
          'Thực hành nhập liệu các phân hệ trên phần mềm kế toán chuẩn',
          'Rà soát, đối chiếu công nợ phải thu (131), phải trả (331)',
        ],
      },
      {
        module: 'Phần 4: Lập Báo cáo tài chính & Quyết toán năm',
        topics: [
          'Bảng cân đối tài khoản (F01-DNN)',
          'Báo cáo tình hình tài chính và Báo cáo kết quả hoạt động kinh doanh',
          'Báo cáo lưu chuyển tiền tệ và Thuyết minh BCTC',
          'Khóa sổ kế toán và kỹ năng in ấn lưu trữ hồ sơ',
        ],
      },
    ],
  },
  {
    id: 'thue-chuyen-sau',
    code: 'KH-02',
    badge: 'Khóa Học 02 • Trọng Tâm 2026',
    badgeType: 'highlight',
    category: 'thue-chuyen-sau',
    title: 'Thuế Thực Hành Chuyên Sâu',
    subtitle: 'GTGT • TNDN • TNCN • Kê khai & Quyết toán',
    description:
      'Nắm vững chính sách thuế mới nhất 2026. Hướng dẫn lập tờ khai thuế GTGT, TNCN, tạm tính thuế TNDN và kỹ năng giải trình, bảo vệ số liệu chi phí hợp lý trước cơ quan thuế.',
    highlights: [
      'Lập tờ khai thuế trên phần mềm HTKK và nộp qua cổng điện tử',
      'Kỹ năng rà soát rủi ro thuế, xử lý tài khoản 131, 331, 411',
      'Kinh nghiệm quyết toán thuế thực tế không bị xuất toán chi phí',
    ],
    duration: '18 Buổi',
    tuitionNote: 'Liên hệ tư vấn lộ trình & chính sách học bổng',
    nextStartDate: '18/11/2026',
    schedule: 'Tối 3-5-7 (19h00 - 21h30)',
    format: 'Cả hai hình thức',
    targetAudience: 'Kế toán tổng hợp, kế toán thuế, kế toán viên muốn nâng cao năng lực giải trình thuế.',
    syllabus: [
      {
        module: 'Phần 1: Cập nhật Luật Quản lý Thuế & Hóa đơn điện tử 2026',
        topics: [
          'Nghị định và Thông tư mới nhất về hóa đơn điện tử',
          'Các bẫy rủi ro khi mua hàng hóa từ doanh nghiệp rủi ro cao về thuế',
          'Kỹ năng tra cứu và xác thực tính hợp pháp hóa đơn',
        ],
      },
      {
        module: 'Phần 2: Thuế Giá Trị Gia Tăng (GTGT) thực hành',
        topics: [
          'Phương pháp tính thuế GTGT trực tiếp và khấu trừ',
          'Kê khai bổ sung điều chỉnh khi phát hiện sai sót',
          'Xử lý hóa đơn bỏ sót, hủy hóa đơn, lập hóa đơn điều chỉnh thay thế',
        ],
      },
      {
        module: 'Phần 3: Thuế Thu Nhập Doanh Nghiệp (TNDN) & Tối ưu chi phí',
        topics: [
          'Xác định doanh thu tính thuế và chi phí được trừ / không được trừ',
          'Chi phí lãi vay, khấu hao xe sang vượt định mức, chi phí trang phục',
          'Lập tờ khai quyết toán thuế TNDN mẫu 03/TNDN',
        ],
      },
      {
        module: 'Phần 4: Thuế TNCN & Kỹ năng đón đoàn thanh tra thuế',
        topics: [
          'Đăng ký MST cá nhân, giảm trừ gia cảnh, quyết toán thuế TNCN',
          'Hồ sơ chuẩn bị trước khi thanh kiểm tra thuế',
          'Kỹ năng làm việc, giải trình số liệu và biên bản kiểm tra thuế',
        ],
      },
    ],
  },
  {
    id: 'quan-tri-tai-chinh',
    code: 'KH-03',
    badge: 'Khóa Học 03 • Quản Trị',
    badgeType: 'management',
    category: 'chu-doanh-nghiep',
    title: 'Quản Trị Tài Chính Doanh Nghiệp',
    subtitle: 'Chi phí • Dòng tiền • Quản trị rủi ro • KPI',
    description:
      'Giải pháp thấu hiểu sức khỏe tài chính doanh nghiệp dành riêng cho CEO. Kiểm soát chặt chẽ điểm hòa vốn, hoạch định dòng tiền ngắn - trung hạn và tối ưu hóa chi phí vận hành.',
    highlights: [
      'Kiểm soát dòng tiền thực, tránh tình trạng “lãi trên giấy nhưng thiếu tiền mặt”',
      'Xây dựng định mức chi phí và hệ thống chỉ số KPI tài chính',
      'Cơ cấu nguồn vốn và chiến lược đòn bẩy tài chính an toàn',
    ],
    duration: '12 Buổi Executive',
    tuitionNote: 'Liên hệ tư vấn lộ trình & chính sách học bổng',
    nextStartDate: '20/11/2026',
    schedule: 'Chiều Thứ 7 & Cả ngày Chủ Nhật',
    format: 'Offline tại Hà Nội',
    targetAudience: 'Chủ doanh nghiệp, Giám đốc điều hành (CEO), Founders, Cố vấn ban quản trị.',
    syllabus: [
      {
        module: 'Phần 1: Giải mã bản đồ tài chính doanh nghiệp',
        topics: [
          'Tài chính vs Kế toán: Sự khác biệt lãnh đạo cần thấu hiểu',
          'Đọc vị 3 báo cáo tài chính cốt lõi trong 15 phút',
          'Đo lường sức khỏe tài chính qua các chỉ số thanh toán và sinh lời',
        ],
      },
      {
        module: 'Phần 2: Quản trị dòng tiền sống còn',
        topics: [
          'Dự báo dòng tiền thu - chi theo tuần/tháng/quý',
          'Giải quyết điểm nghẽn tồn kho và công nợ khách hàng',
          'Xây dựng quỹ dự phòng thanh khoản chống sốc kinh tế',
        ],
      },
      {
        module: 'Phần 3: Kiểm soát chi phí & Điểm hòa vốn',
        topics: [
          'Phân loại định phí - biến phí trong sản xuất thương mại',
          'Xác định điểm hòa vốn và định giá sản phẩm tối ưu lợi nhuận',
          'Cắt giảm lãng phí tài chính trong chuỗi vận hành',
        ],
      },
      {
        module: 'Phần 4: Chiến lược vốn & Cơ cấu vốn tối ưu',
        topics: [
          'Đòn bẩy nợ vay ngân hàng an toàn cho từng giai đoạn',
          'Gọi vốn nhà đầu tư và định giá cổ phần',
          'Thiết lập Dashboard KPI tài chính giám sát thời gian thực',
        ],
      },
    ],
  },
  {
    id: 'bao-cao-ra-quyet-dinh',
    code: 'KH-04',
    badge: 'Khóa Học 04 • Chiến Lược',
    badgeType: 'strategy',
    category: 'chu-doanh-nghiep',
    title: 'Báo Cáo & Ra Quyết Định Kinh Doanh',
    subtitle: 'Đọc hiểu báo cáo • Phân tích số liệu • Phân bổ vốn',
    description:
      'Trang bị khả năng “giải mã” toàn bộ hệ thống báo cáo kế toán quản trị. Giúp lãnh đạo đọc vị số liệu nhanh chóng, đưa ra quyết định mở rộng sản xuất hoặc tái cấu trúc chuẩn xác.',
    highlights: [
      'Kỹ năng đọc nhanh Bảng CĐKT, Báo cáo KQKD, Lưu chuyển tiền tệ',
      'Phát hiện lỗ hổng thất thoát tài sản và rủi ro gian lận nội bộ',
      'Tối ưu hóa lợi nhuận ròng và định hướng phân bổ dòng vốn 2026-2030',
    ],
    duration: '10 Buổi Chuyên Sâu',
    tuitionNote: 'Liên hệ tư vấn lộ trình & chính sách học bổng',
    nextStartDate: '25/11/2026',
    schedule: 'Tối Thứ 3 & Thứ 5 (19h30 - 21h30)',
    format: 'Cả hai hình thức',
    targetAudience: 'Giám đốc, Trưởng phòng kinh doanh, Trưởng phòng tài chính kế toán.',
    syllabus: [
      {
        module: 'Phần 1: Đọc vị số liệu và cấu trúc báo cáo quản trị',
        topics: [
          'So sánh số liệu báo cáo thuế và số liệu quản trị thực tế',
          'Nhận diện các dấu hiệu số liệu bị làm đẹp hoặc che giấu rủi ro',
          'Phân tích cơ cấu tài sản, nợ phải trả và vốn chủ sở hữu',
        ],
      },
      {
        module: 'Phần 2: Phân tích hiệu quả kinh doanh & Biên lợi nhuận',
        topics: [
          'Phân tích DuPont: ROE, ROA, ROS và vòng quay vốn',
          'Đánh giá hiệu quả từng chi nhánh, dòng sản phẩm, kênh bán hàng',
          'Xác định ngưỡng an toàn tài chính trước khi mở rộng quy mô',
        ],
      },
      {
        module: 'Phần 3: Ra quyết định kinh doanh trên nền số liệu',
        topics: [
          'Quyết định mua hay thuê tài sản cố định',
          'Quyết định ngừng kinh doanh sản phẩm kém hiệu quả',
          'Quyết định chiết khấu thanh toán kích cầu công nợ',
        ],
      },
    ],
  },
];

export const TAX_ARTICLES: TaxArticle[] = [
  {
    id: 'tai-khoan-411',
    title: 'Hướng Dẫn Xử Lý Tài Khoản 411 Khi Giải Thể Doanh Nghiệp Cập Nhật Mới Nhất 2026',
    category: 'Thuế Doanh Nghiệp',
    date: '08/09/2026',
    author: 'ThS. Nguyễn Trang',
    readTime: '6 phút đọc',
    summary:
      'Chi tiết các bước hạch toán vốn góp chủ sở hữu, thanh toán nợ phải trả, hoàn trả cổ phần và các rủi ro nghĩa vụ thuế cần lưu ý khi làm thủ tục giải thể doanh nghiệp.',
    legalReferences: [
      'Luật Doanh nghiệp 2020 & các Nghị định hướng dẫn 2026',
      'Thông tư 200/2014/TT-BTC & Thông tư 133/2016/TT-BTC',
      'Luật Quản lý thuế số 38/2019/QH14',
    ],
    content: [
      'Khi doanh nghiệp tiến hành giải thể, tài khoản 411 (Vốn đầu tư của chủ sở hữu) là một trong những tài khoản trọng tâm phải tất toán cuối cùng sau khi đã thanh toán toàn bộ nghĩa vụ nợ lương, nợ thuế và nợ đối tác.',
      'Bước 1: Rà soát số dư thực tế của TK 411 so với Giấy chứng nhận đăng ký doanh nghiệp. Nếu vốn điều lệ chưa góp đủ theo luật định (quá hạn 90 ngày kể từ ngày cấp phép), doanh nghiệp phải thực hiện điều chỉnh giảm vốn điều lệ trước khi thực hiện các thủ tục giải thể.',
      'Bước 2: Thanh lý toàn bộ tài sản doanh nghiệp, thu hồi các khoản nợ phải thu (TK 131, 1388, 141) để chuyển thành tiền mặt hoặc tiền gửi ngân hàng.',
      'Bước 3: Thực hiện nghĩa vụ ưu tiên thanh toán: 1. Nợ lương, trợ cấp thôi việc, BHXH của người lao động; 2. Nợ thuế và các nghĩa vụ ngân sách nhà nước; 3. Các khoản nợ vay và phải trả nhà cung cấp (TK 331, 341).',
      'Bước 4: Hoàn trả phần vốn còn lại cho các thành viên góp vốn/cổ đông tương ứng với tỷ lệ sở hữu. Hạch toán: Nợ TK 411 / Có TK 111, 112. Trường hợp giá trị hoàn trả cao hơn mệnh giá vốn góp ban đầu, phần chênh lệch phải chịu thuế TNCN đối với đầu tư vốn (5%).',
    ],
  },
  {
    id: 'tai-khoan-131',
    title: 'Tài Khoản 131 Bị Âm: Nguyên Nhân, Cách Xử Lý Và Rủi Ro Bị Cơ Quan Thuế Ấn Định',
    category: 'Rủi Ro Kế Toán',
    date: '08/09/2026',
    author: 'ThS. Nguyễn Trang',
    readTime: '5 phút đọc',
    summary:
      'Phân tích số dư có tài khoản 131 khi khách hàng trả trước tiền mua hàng, đối chiếu chứng từ hóa đơn và phương pháp tránh bị truy thu thuế giá trị gia tăng bất hợp lý.',
    legalReferences: [
      'Nghị định 123/2020/NĐ-CP về hóa đơn, chứng từ',
      'Thông tư 219/2013/TT-BTC hướng dẫn thuế GTGT',
      'Công văn Tổng cục Thuế về thời điểm lập hóa đơn thu tiền trước',
    ],
    content: [
      'Tài khoản 131 (Phải thu của khách hàng) là tài khoản lưỡng tính. Việc số dư có TK 131 (thường được gọi nôm na là "TK 131 bị âm") là hiện tượng phổ biến nhưng tiềm ẩn rủi ro thuế đặc biệt cao.',
      'Nguyên nhân 1: Khách hàng ứng trước tiền hàng, dịch vụ chưa hoàn thành. Đối với dịch vụ, theo quy định tại Điều 9 Nghị định 123/2020/NĐ-CP, khi thu tiền trước hoặc trong khi cung ứng dịch vụ, bắt buộc phải xuất hóa đơn GTGT tại thời điểm thu tiền.',
      'Rủi ro bị thanh tra thuế: Nếu nhận tiền dịch vụ vào tài khoản ngân hàng nhưng kế toán chỉ treo bên Có TK 131 mà không xuất hóa đơn GTGT, doanh nghiệp sẽ bị quy vào hành vi trốn thuế GTGT, bị truy thu thuế và phạt tiền chậm nộp 0.03%/ngày.',
      'Giải pháp xử lý: Phân loại chi tiết công nợ từng đối tượng khách hàng. Kiểm tra hợp đồng kinh tế: Nếu là hợp đồng cung cấp dịch vụ (đào tạo, thiết kế, tư vấn, xây dựng theo giai đoạn...), phải lập hóa đơn GTGT ngay ngày nhận tiền. Nếu là tạm ứng mua hàng hóa hữu hình đang sản xuất, cần lưu trữ hợp đồng, phiếu báo giá, tiến độ giao hàng để chứng minh chưa đến thời điểm chuyển giao quyền sở hữu hàng hóa.',
    ],
  },
  {
    id: 'quyet-toan-thue',
    title: 'Quyết Toán Thuế Là Gì? Cẩm Nang Doanh Nghiệp Và Cá Nhân Cần Chuẩn Bị',
    category: 'Quyết Toán Thuế',
    date: '04/09/2026',
    author: 'ThS. Phạm Trung Thành',
    readTime: '8 phút đọc',
    summary:
      'Checklist hồ sơ quyết toán thuế hàng năm, quy trình thanh kiểm tra của chi cục thuế và giải pháp rà soát sổ sách trước khi đón đoàn thanh tra.',
    legalReferences: [
      'Luật Quản lý thuế số 38/2019/QH14',
      'Quy trình kiểm tra thuế ban hành theo Quyết định 970/QĐ-TCT',
      'Nghị định 125/2020/NĐ-CP quy định xử phạt vi phạm hành chính về thuế',
    ],
    content: [
      'Quyết toán thuế là công việc định kỳ nhằm xác định chính xác số thuế phải nộp trong kỳ tính thuế (thường là 1 năm dương lịch hoặc năm tài chính) đối với thuế TNDN, thuế TNCN và các sắc thuế khác.',
      'Hồ sơ quyết toán thuế chuẩn mực cần có:',
      '1. Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN) kèm Báo cáo tài chính đã kiểm toán hoặc tự lập.',
      '2. Bảng kê trích lập các khoản dự phòng (nợ khó đòi, giảm giá hàng tồn kho, bảo hành sản phẩm).',
      '3. Toàn bộ hồ sơ giao dịch liên kết theo Nghị định 132/2020/NĐ-CP nếu có quan hệ công ty mẹ - con hoặc cùng ban lãnh đạo.',
      '4. Hợp đồng lao động, bảng chấm công, bảng thanh toán lương có chữ ký hoặc chứng từ chuyển khoản ngân hàng.',
      '5. Hồ sơ công tác phí: Quyết định cử đi công tác, vé máy bay, hóa đơn phòng khách sạn mang tên MST công ty, chứng từ thanh toán không dùng tiền mặt nếu từ 20 triệu đồng trở lên.',
      'Kinh nghiệm vàng từ Anta Group: Hãy chủ động rà soát sổ sách hàng quý (Mock Audit) thay vì đợi đến khi nhận quyết định thanh tra thuế.',
    ],
  },
  {
    id: 'hoa-don-dien-tu-2026',
    title: 'Những Điểm Mới Về Hóa Đơn Điện Tử Khởi Tạo Từ Máy Tính Tiền & Chống Gian Lận',
    category: 'Thuế Doanh Nghiệp',
    date: '01/09/2026',
    author: 'CPA Trần Minh Đức',
    readTime: '7 phút đọc',
    summary:
      'Quy định bắt buộc triển khai hóa đơn điện tử máy tính tiền đối với các ngành bán lẻ, ăn uống, dịch vụ giải trí và chế tài áp dụng năm 2026.',
    legalReferences: [
      'Thông tư sửa đổi bổ sung Thông tư 78/2021/TT-BTC',
      'Chỉ thị Thủ tướng Chính phủ về tăng cường quản lý hóa đơn điện tử',
    ],
    content: [
      'Tổng cục Thuế tiếp tục mở rộng áp dụng giải pháp hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối chuyển dữ liệu điện tử với cơ quan thuế.',
      'Lợi ích lớn nhất là doanh nghiệp xuất hóa đơn 24/7 cho khách hàng cá nhân mà không cần chữ ký số cho từng hóa đơn đơn lẻ.',
      'Học viện Anta đưa toàn bộ quy trình mô phỏng phần mềm POS và kết nối hóa đơn máy tính tiền vào giáo trình đào tạo thực hành cho học viên.',
    ],
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'nguyen-trang',
    name: 'ThS. Nguyễn Trang',
    title: 'Giám đốc Đào tạo • Kế toán trưởng Anta Group',
    experience: '18+ năm kinh nghiệm',
    bio: 'Thạc sĩ Tài chính - Kế toán, hơn 18 năm dẫn dắt bộ máy kế toán - thuế cho các tập đoàn đa quốc gia và hệ sinh thái Anta Group. Chuyên gia gỡ rối sổ sách và bảo vệ thành công hơn 200 kỳ quyết toán thuế.',
    specialties: ['Thuế Doanh nghiệp chuyên sâu', 'Tái cấu trúc sổ sách', 'Đào tạo thực hành kế toán tổng hợp'],
    quote: 'Làm kế toán không chỉ ghi chép đúng, mà phải hiểu bản chất kinh tế đằng sau từng con số để bảo vệ tối đa lợi ích hợp pháp của doanh nghiệp.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pham-trung-thanh',
    name: 'ThS. Phạm Trung Thành',
    title: 'Chuyên gia Thuế & Quyết toán • Cố vấn Anta Tax',
    experience: '16+ năm kinh nghiệm',
    bio: 'Nguyên trưởng phòng tư vấn thuế tại đơn vị tư vấn hàng đầu, trực tiếp xử lý các ca quyết toán phức tạp trong lĩnh vực xây lắp, bất động sản và thương mại điện tử xuyên biên giới.',
    specialties: ['Quyết toán thuế & Thanh tra', 'Giao dịch liên kết', 'Chiến lược tối ưu chi phí thuế'],
    quote: 'Một kế toán giỏi là người biết trước cơ quan thuế sẽ hỏi gì ở từng tài khoản để chuẩn bị hồ sơ chứng minh ngay từ ngày đầu phát sinh.',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'tran-minh-duc',
    name: 'CPA Trần Minh Đức',
    title: 'Kiểm toán viên cấp cao • Giảng viên Tài chính Quản trị',
    experience: '15+ năm kinh nghiệm',
    bio: 'Sở hữu chứng chỉ CPA Việt Nam và ACCA Anh Quốc. Cố vấn quản trị tài chính cho hơn 50 doanh nghiệp SME, chuyên sâu về phân tích báo cáo tài chính và xây dựng mô hình dòng tiền.',
    specialties: ['Quản trị tài chính CEO', 'Kiểm toán nội bộ', 'Lập báo cáo tài chính IFRS/VAS'],
    quote: 'Doanh nghiệp chết không phải vì không có lãi, mà vì cạn kiệt dòng tiền. Quản trị tài chính là nghệ thuật giữ cho mạch máu tiền tệ luôn lưu thông.',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'le-hoang-nga',
    name: 'ThS. Lê Hoàng Nga',
    title: 'Chuyên gia Phần mềm MISA & Kế toán Sản xuất',
    experience: '12+ năm kinh nghiệm',
    bio: 'Chuyên gia huấn luyện các giải pháp số hóa kế toán doanh nghiệp, chuyên sâu về tính giá thành sản xuất phức tạp, định mức nguyên vật liệu và quản trị hàng tồn kho.',
    specialties: ['Phần mềm MISA SME & Fast', 'Kế toán giá thành sản xuất', 'Thiết lập quy trình kế toán'],
    quote: 'Công nghệ và phần mềm chỉ là công cụ, tư duy định khoản chuẩn mực và sự cẩn trọng mới là linh hồn tạo nên giá trị người làm nghề.',
    avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
  },
];

export const MOCK_CERTIFICATES: StudentCertificate[] = [
  {
    code: 'AT-2026-889',
    studentName: 'Nguyễn Thùy Linh',
    courseName: 'Kế Toán Thực Hành Tổng Hợp (Chứng Từ Sống)',
    completionDate: '28/08/2026',
    grade: 'Xuất sắc',
    status: 'Hợp lệ',
    credentialId: 'ANT-KTTT-2026889',
  },
  {
    code: 'AT-2026-752',
    studentName: 'Trần Văn Mạnh',
    courseName: 'Thuế Thực Hành Chuyên Sâu & Quyết Toán 2026',
    completionDate: '15/07/2026',
    grade: 'Giỏi',
    status: 'Hợp lệ',
    credentialId: 'ANT-THUE-2026752',
  },
  {
    code: 'AT-2026-610',
    studentName: 'Lê Thị Thu Hằng',
    courseName: 'Quản Trị Tài Chính Doanh Nghiệp Cho CEO',
    completionDate: '02/06/2026',
    grade: 'Xuất sắc',
    status: 'Hợp lệ',
    credentialId: 'ANT-QTTC-2026610',
  },
  {
    code: 'AT-2026-504',
    studentName: 'Hoàng Minh Tuấn',
    courseName: 'Báo Cáo & Ra Quyết Định Kinh Doanh',
    completionDate: '20/05/2026',
    grade: 'Giỏi',
    status: 'Hợp lệ',
    credentialId: 'ANT-BCQD-2026504',
  },
];

// Danh sách các khách hàng doanh nghiệp tiêu biểu trong mạng lưới 1.000.000+ Doanh nghiệp của Anta Group
export const ANTA_PARTNERS: Partner[] = [
  {
    id: 'partner-01',
    name: 'Tập Đoàn Địa Ốc & Xây Dựng Thăng Long',
    industry: 'Bất Động Sản & Xây Dựng',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Quy mô 3.500+ nhân sự',
    partnershipType: 'Tư vấn thuế & Soát xét BCTC 9 năm liền',
    description:
      'Được Anta Group cố vấn tái cấu trúc chi phí lãi vay, tối ưu hóa thuế TNDN và cung ứng 15+ kế toán trưởng lành nghề.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-02',
    name: 'Tổng Công Ty CP May Mặc & XNK Quốc Tế',
    industry: 'Sản Xuất & Xuất Nhập Khẩu',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Doanh thu 1.200 tỷ/năm',
    partnershipType: 'Hoàn thiện hồ sơ giá chuyển nhượng & Thuế',
    description:
      'Đồng hành cùng dịch vụ kế toán Anta từ năm 2013, bảo vệ thành công 100% chi phí hợp lý qua 4 kỳ thanh tra thuế.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-03',
    name: 'Công Ty CP Công Nghệ & TM Dịch Vụ Số Toàn Cầu',
    industry: 'Công Nghệ & Thương Mại Điện Tử',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: '120 chi nhánh toàn quốc',
    partnershipType: 'Đào tạo In-house & Kiểm soát nội bộ',
    description:
      'Học viện Anta trực tiếp đào tạo chuẩn hóa kỹ năng lập BCTC và quản trị dòng tiền cho toàn bộ phòng tài chính kế toán.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-04',
    name: 'Tập Đoàn Xây Dựng & Hạ Tầng Giao Thông Miền Bắc',
    industry: 'Hạ Tầng Giao Thông & Xây Lắp',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Hơn 2.000 kỹ sư & chuyên viên',
    partnershipType: 'Kế toán trưởng & Quyết toán công trình',
    description:
      'Áp dụng quy trình kiểm soát vật tư, định mức công trình và phân bổ chi phí chuẩn mực theo hướng dẫn chuyên gia Anta.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-05',
    name: 'Chuỗi Bán Lẻ Thực Phẩm & Chuỗi Cung Ứng Xanh',
    industry: 'Bán Lẻ & Chuỗi Cung Ứng',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Hơn 85 điểm bán lẻ',
    partnershipType: 'Số hóa hóa đơn máy tính tiền & Thuế',
    description:
      'Kết nối 100% dữ liệu hóa đơn điện tử từ máy tính tiền truyền thẳng về cơ quan thuế an toàn, không một sai sót.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-06',
    name: 'Công Ty TNHH Thiết Bị Tự Động Hóa Precision',
    industry: 'Doanh Nghiệp FDI Nhật Bản',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Nhà máy 25.000m² tại KCN',
    partnershipType: 'Báo cáo quản trị chuẩn IFRS & Thuế XNK',
    description:
      'Hệ sinh thái Anta đảm bảo số liệu kế toán song ngữ Việt - Anh, đạt chuẩn kiểm toán quốc tế cho công ty mẹ tại Tokyo.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-07',
    name: 'Tổng Công Ty Dược Phẩm & Vật Tư Y Tế Thủ Đô',
    industry: 'Dược Phẩm & Y Tế',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Phân phối 63 tỉnh thành',
    partnershipType: 'Hoạch định dòng tiền & Kiểm toán nội bộ',
    description:
      'Học viện Anta đồng hành xây dựng Dashboard KPI tài chính thời gian thực giúp ban lãnh đạo giám sát tồn kho và công nợ 131.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
  {
    id: 'partner-08',
    name: 'Tập Đoàn Vận Tải Quốc Tế & Logistics Hàng Hải Delta',
    industry: 'Logistics & Kho Vận Đa Phương Thức',
    badge: 'Bảo Chứng Bởi Anta Group',
    scale: 'Đội xe & Cảng cạn quy mô lớn',
    partnershipType: 'Cố vấn tài chính chiến lược & M&A',
    description:
      'Tư vấn định giá cổ phần và cơ cấu dòng vốn đầu tư an toàn cho các thương vụ sáp nhập quy mô hàng trăm tỷ đồng.',
    verifiedByAnta: true,
    avatarUrl: ANTA_OFFICIAL_LOGO,
  },
];
