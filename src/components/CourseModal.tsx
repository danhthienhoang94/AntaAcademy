import React, { useState } from 'react';
import { Course } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnroll,
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="bg-[#082554] p-5 sm:p-6 text-white flex items-start justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Logo Anta"
              className="w-12 h-12 rounded-full object-contain bg-white/10 p-0.5"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-[11px] font-bold text-[#F59F00] uppercase tracking-wider block">
                {course.badge}
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-white leading-tight">
                {course.title}
              </h3>
              <p className="text-[13px] text-[#d5e3fd] mt-0.5">{course.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng chi tiết khóa học"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f8f9ff] p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-bold uppercase">Thời lượng</span>
              <span className="text-[16px] font-bold text-[#082554]">{course.duration}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-bold uppercase">Hình thức</span>
              <span className="text-[14px] font-semibold text-slate-700">{course.format}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-bold uppercase">Lịch học</span>
              <span className="text-[14px] font-semibold text-slate-700">{course.schedule}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-bold uppercase">Kèm cặp</span>
              <span className="text-[14px] font-semibold text-[#2F9E44]">1:1 Kế toán trưởng</span>
            </div>
          </div>

          {/* Description & Target Audience */}
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0041a2] text-[20px]">info</span>
              Tổng quan khóa học
            </h4>
            <p className="text-[14px] leading-relaxed text-slate-600">{course.description}</p>
            <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dde9ff] text-[13px] text-[#082554]">
              <span className="font-bold">Đối tượng phù hợp: </span>
              {course.targetAudience}
            </div>
          </div>

          {/* Core Highlights */}
          <div className="space-y-2">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2F9E44] text-[20px]">
                verified
              </span>
              Điểm nổi bật &amp; Năng lực đạt được
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-[14px] text-slate-700">
              {course.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[18px] mt-0.5">
                    check_circle
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Syllabus Accordion */}
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#F59F00] text-[20px]">
                format_list_bulleted
              </span>
              Chi tiết giáo trình 4 giai đoạn thực chiến
            </h4>
            <div className="space-y-2">
              {course.syllabus.map((item, index) => {
                const isOpenModule = activeModuleIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModuleIndex(isOpenModule ? null : index)
                      }
                      className="w-full text-left p-3.5 bg-slate-50 hover:bg-[#eff4ff] flex items-center justify-between text-[14px] font-bold text-[#082554] cursor-pointer"
                    >
                      <span>{item.module}</span>
                      <span className="material-symbols-outlined text-[20px] text-slate-500">
                        {isOpenModule ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {isOpenModule && (
                      <div className="p-4 bg-white border-t border-slate-100 text-[13px] text-slate-600">
                        <ul className="space-y-2">
                          {item.topics.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#0041a2] font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar - No Price Numbers */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-slate-600">
            <span className="font-semibold text-[#082554] block">Tư vấn tuyển sinh &amp; Lộ trình:</span>
            <span>Liên hệ ban tuyển sinh để nhận thông tin chi tiết</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 font-bold text-[14px] text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-[#E8590C] hover:brightness-105 text-white font-bold text-[14px] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Nhận Tư Vấn Khóa Học</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
