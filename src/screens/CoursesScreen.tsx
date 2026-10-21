import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES } from '../data/mockData';
import { FAQSection } from '../components/FAQSection';

interface CoursesScreenProps {
  onSelectCourse: (course: Course) => void;
  onOpenConsultation: (preselectedCourse?: string) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({
  onSelectCourse,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Selected course for advisory
  const [advisoryCourseId, setAdvisoryCourseId] = useState<string>(COURSES[0].id);
  const [userBackground, setUserBackground] = useState<string>('di-lam');

  const filteredCourses = COURSES.filter((c) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'ke-toan-vien' && c.category === 'ke-toan-vien') ||
      (selectedCategory === 'chu-doanh-nghiep' && c.category === 'chu-doanh-nghiep') ||
      (selectedCategory === 'thue-chuyen-sau' && c.category === 'thue-chuyen-sau');

    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const selectedCourse = COURSES.find((c) => c.id === advisoryCourseId) || COURSES[0];

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Header Banner - Spacious & Calm */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            CHƯƠNG TRÌNH ĐÀO TẠO THỰC CHIẾN 2026
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            Khóa Học Kế Toán - Thuế - Quản Trị Tài Chính
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            Học trên 100% chứng từ hóa đơn thật. Giảng viên Kế toán trưởng 15+ năm trực tiếp hướng
            dẫn và kèm cặp.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Controls */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200/60">
          {/* Category Tabs - Clean Segmented */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#0041a2] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả khóa học
            </button>
            <button
              onClick={() => setSelectedCategory('ke-toan-vien')}
              className={`px-5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'ke-toan-vien'
                  ? 'bg-white text-[#0041a2] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kế toán viên
            </button>
            <button
              onClick={() => setSelectedCategory('thue-chuyen-sau')}
              className={`px-5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'thue-chuyen-sau'
                  ? 'bg-white text-[#0041a2] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thuế chuyên sâu
            </button>
            <button
              onClick={() => setSelectedCategory('chu-doanh-nghiep')}
              className={`px-5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'chu-doanh-nghiep'
                  ? 'bg-white text-[#0041a2] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CEO &amp; Quản lý
            </button>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 flex items-center bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl focus-within:border-[#0041a2]">
            <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo tên khóa học..."
              className="w-full bg-transparent text-[13.5px] text-slate-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Course Cards Grid - Spacious & Uncluttered (No Price Display) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[12px] text-slate-500 font-semibold">
                  <span className="text-[#0041a2]">{course.badge}</span>
                  <span className="font-mono text-slate-400">{course.code}</span>
                </div>

                <h3 className="text-[22px] font-bold text-[#082554] leading-snug">
                  {course.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{course.description}</p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wide block">
                    Năng lực đạt được:
                  </span>
                  <ul className="space-y-2 text-[13.5px] text-slate-600">
                    {course.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#2F9E44] text-[17px] mt-0.5">
                          check_circle
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-slate-500 pt-1">
                  <span>Thời lượng: <strong className="text-slate-700">{course.duration}</strong></span>
                  <span>·</span>
                  <span className="text-[#0041a2] font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">contact_support</span>
                    <span>Học phí: Liên hệ ban tuyển sinh</span>
                  </span>
                </div>
              </div>

              {/* Bottom Actions - Clean, No Price Numbers */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[12.5px] text-slate-500">
                  <span className="block font-medium">Hình thức: <strong className="text-slate-700">{course.format}</strong></span>
                  <span className="block text-[11.5px] text-[#2F9E44] font-semibold">Hỗ trợ tư vấn học bổng &amp; lộ trình</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#0041a2] hover:text-[#0041a2] font-semibold text-[13px] transition-colors cursor-pointer"
                  >
                    Chi tiết giáo trình
                  </button>
                  <button
                    onClick={() => onOpenConsultation(course.title)}
                    className="px-5 py-2.5 rounded-lg bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold text-[13px] shadow-sm transition-all cursor-pointer"
                  >
                    Đăng Ký Tư Vấn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory & Curriculum Request Section - Clean, No Prices */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20">
        <div className="bg-[#f8f9ff] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11.5px] font-bold text-[#0041a2] uppercase tracking-wider block">
                TƯ VẤN LỘ TRÌNH ĐÀO TẠO
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#082554] leading-tight">
                Nhận Kế Hoạch Học Tập Phù Hợp
              </h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Ban Tuyển sinh Học viện Anta sẵn sàng hỗ trợ bạn lựa chọn lộ trình đào tạo tối ưu
                theo đúng nền tảng hiện tại và mục tiêu nghề nghiệp.
              </p>
              <div className="text-[13px] text-slate-600 space-y-1.5 pt-1">
                <p>✓ Cấp bản quyền phần mềm MISA SME thực hành</p>
                <p>✓ Tặng 100+ file Excel báo cáo dòng tiền chuẩn</p>
                <p>✓ Cam kết học lại miễn phí nếu chưa vững tay nghề</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm space-y-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-slate-700">Khóa học bạn quan tâm:</label>
                <select
                  value={advisoryCourseId}
                  onChange={(e) => setAdvisoryCourseId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-slate-700">Đối tượng người học:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setUserBackground('sinh-vien')}
                    className={`p-3 rounded-xl border text-[13px] font-medium transition-all text-center cursor-pointer ${
                      userBackground === 'sinh-vien'
                        ? 'bg-[#eff4ff] border-[#0041a2] text-[#0041a2] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Sinh viên / Mới ra trường
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserBackground('di-lam')}
                    className={`p-3 rounded-xl border text-[13px] font-medium transition-all text-center cursor-pointer ${
                      userBackground === 'di-lam'
                        ? 'bg-[#eff4ff] border-[#0041a2] text-[#0041a2] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Kế toán đang đi làm
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserBackground('chu-dn')}
                    className={`p-3 rounded-xl border text-[13px] font-medium transition-all text-center cursor-pointer ${
                      userBackground === 'chu-dn'
                        ? 'bg-[#eff4ff] border-[#0041a2] text-[#0041a2] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Chủ DN / Quản lý
                  </button>
                </div>
              </div>

              <div className="p-5 bg-[#eff4ff] rounded-2xl border border-[#dae2ff] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[13.5px] font-bold text-[#082554] block">
                    Đăng ký tư vấn lộ trình đào tạo chuyên sâu
                  </span>
                  <span className="text-[12px] text-slate-500 block">
                    Nhận tài liệu đề cương chi tiết và tư vấn chính sách hỗ trợ
                  </span>
                </div>

                <button
                  onClick={() => onOpenConsultation(selectedCourse.title)}
                  className="px-6 py-3 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[13.5px] transition-all cursor-pointer shadow-sm whitespace-nowrap"
                >
                  Nhận Lộ Trình &amp; Tư Vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
