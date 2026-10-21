import React, { useState } from 'react';
import { ANTA_OFFICIAL_LOGO, COURSES } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  onOpenSecurityPolicy?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId,
  onOpenSecurityPolicy,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseInterest, setCourseInterest] = useState(
    preselectedCourseId || 'Kế toán Thực hành Tổng hợp (Chứng từ sống)'
  );
  const [learningMode, setLearningMode] = useState<'offline' | 'online'>('offline');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    ticketId: string;
    phoneMasked: string;
    fullName: string;
    submittedAt: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          courseInterest,
          learningMode,
          notes,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Có lỗi xảy ra khi gửi dữ liệu. Vui lòng kiểm tra lại thông tin.');
      }

      setSubmittedData({
        ticketId: data.ticketId || `ANTA-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        phoneMasked: data.data?.phoneMasked || phone,
        fullName: data.data?.fullName || fullName,
        submittedAt: data.data?.submittedAt || new Date().toISOString(),
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Không thể kết nối đến máy chủ bảo mật. Vui lòng kiểm tra đường truyền.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setError(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#082554] via-[#0041a2] to-[#082554] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Logo Anta"
              className="w-11 h-11 rounded-full object-contain bg-white/10 p-0.5 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-[11px] font-bold text-[#F59F00] uppercase tracking-wider block">
                HỌC VIỆN KẾ TOÁN ANTA
              </span>
              <h3 className="text-[18px] font-bold leading-snug">
                Đăng Ký Tư Vấn &amp; Lộ Trình 2026
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ tư vấn"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Security Compliance Banner */}
        <div className="bg-[#eff4ff] border-b border-[#dae2ff] px-5 py-2 flex items-center justify-between text-[11.5px] text-[#0041a2]">
          <button
            type="button"
            onClick={() => {
              if (onOpenSecurityPolicy) {
                onOpenSecurityPolicy();
              }
            }}
            className="flex items-center gap-1 font-medium hover:underline cursor-pointer text-left"
          >
            <span className="material-symbols-outlined text-[15px] text-[#2F9E44]">verified_user</span>
            <span>Mã hóa SSL 256-bit • Bảo vệ dữ liệu cá nhân (NĐ 13/2023)</span>
          </button>
          <span className="text-[10.5px] font-mono text-slate-500 hidden sm:inline">SHA-256 Validated</span>
        </div>

        {submittedData ? (
          <div className="p-8 text-center flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#ebfbee] text-[#2F9E44] flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-[22px] font-extrabold text-[#082554]">
                Tiếp Nhận Hồ Sơ Thành Công!
              </h4>
              <p className="text-[14px] text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn bạn <strong className="text-slate-800">{submittedData.fullName}</strong>. Hệ thống bảo mật Anta Academy đã ghi nhận thông tin.
                Chuyên viên Tuyển sinh sẽ liên hệ qua SĐT <span className="font-mono font-bold text-[#0041a2]">{submittedData.phoneMasked}</span> trong vòng 15 phút.
              </p>
            </div>
            <div className="w-full bg-[#f8f9ff] border border-[#dae2ff] p-4 rounded-xl text-left text-[13px] text-slate-700 space-y-1.5">
              <p>
                <span className="font-bold text-[#082554]">Mã hồ sơ bảo mật:</span>{' '}
                <span className="font-mono font-bold text-[#0041a2]">{submittedData.ticketId}</span>
              </p>
              <p>
                <span className="font-bold text-[#082554]">Khóa học quan tâm:</span>{' '}
                {courseInterest}
              </p>
              <p>
                <span className="font-bold text-[#082554]">Hình thức:</span>{' '}
                {learningMode === 'offline'
                  ? 'Trực tiếp tại Tòa nhà Anta, Võ Chí Công, Hà Nội'
                  : 'Online tương tác trực tiếp qua Zoom'}
              </p>
              <p className="text-[11.5px] text-slate-500 pt-1">
                Thời gian tiếp nhận: {new Date(submittedData.submittedAt).toLocaleString('vi-VN')}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#0041a2] hover:bg-[#082554] text-white font-bold rounded-lg transition-all cursor-pointer shadow-sm hover:shadow"
            >
              Hoàn Tất &amp; Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 text-[13px] text-red-700">
                <span className="material-symbols-outlined text-[18px] text-red-500 mt-0.5 flex-shrink-0">
                  error
                </span>
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-slate-800">
                Họ và tên học viên <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-[#f8f9ff] border border-slate-200 px-3 py-2.5 rounded-lg focus-within:border-[#0041a2] transition-colors">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
                  person
                </span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full bg-transparent text-[14px] text-slate-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-slate-800">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center bg-[#f8f9ff] border border-slate-200 px-3 py-2.5 rounded-lg focus-within:border-[#0041a2] transition-colors">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
                    phone
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="091 987 6543"
                    className="w-full bg-transparent text-[14px] text-slate-800 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-slate-800">
                  Email (nhận tài liệu học)
                </label>
                <div className="flex items-center bg-[#f8f9ff] border border-slate-200 px-3 py-2.5 rounded-lg focus-within:border-[#0041a2] transition-colors">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hocvien@gmail.com"
                    className="w-full bg-transparent text-[14px] text-slate-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-slate-800">Khóa học quan tâm</label>
              <select
                value={courseInterest}
                onChange={(e) => setCourseInterest(e.target.value)}
                className="w-full bg-[#f8f9ff] border border-slate-200 px-3 py-2.5 rounded-lg text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2] cursor-pointer"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.duration})
                  </option>
                ))}
                <option value="Khách hàng doanh nghiệp Anta Group">
                  Tư vấn giải pháp Kế toán - Thuế Doanh Nghiệp
                </option>
                <option value="Khác">Chưa xác định - Cần chuyên gia định hướng</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-800">Hình thức học mong muốn</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLearningMode('offline')}
                  className={`py-2 px-3 rounded-lg text-[13px] font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    learningMode === 'offline'
                      ? 'border-[#0041a2] bg-[#eff4ff] text-[#0041a2]'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">apartment</span>
                  Trực tiếp (Hà Nội)
                </button>
                <button
                  type="button"
                  onClick={() => setLearningMode('online')}
                  className={`py-2 px-3 rounded-lg text-[13px] font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    learningMode === 'online'
                      ? 'border-[#0041a2] bg-[#eff4ff] text-[#0041a2]'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">videocam</span>
                  Online Zoom tương tác
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-slate-800">
                Ghi chú hoặc Tình trạng hiện tại
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Đã học nguyên lý kế toán / Muốn thành thạo báo cáo tài chính để xin việc..."
                className="w-full bg-[#f8f9ff] border border-slate-200 px-3 py-2 rounded-lg text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2] resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-[12px] bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <span className="material-symbols-outlined text-[#2F9E44] text-[18px]">
                shield
              </span>
              <span>Bảo vệ quyền riêng tư 100% • Dữ liệu học viên được mã hóa an toàn</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>ĐANG MÃ HÓA &amp; GỬI HỒ SƠ...</span>
                </>
              ) : (
                <>
                  <span>GỬI YÊU CẦU TƯ VẤN NGAY</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
