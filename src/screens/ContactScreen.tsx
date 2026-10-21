import React, { useState } from 'react';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface ContactScreenProps {
  onOpenConsultation: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenConsultation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-20');
  const [timeSlot, setTimeSlot] = useState('09:00 - 11:00');
  const [purpose, setPurpose] = useState('Tham quan phòng thực hành máy tính & Test năng lực đầu vào');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    ticketId: string;
    phoneMasked: string;
    fullName: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone: phone,
          courseInterest: `Lịch hẹn: ${purpose}`,
          notes: `Thời gian hẹn: ${date} (${timeSlot})`,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại.');
      }

      setSubmittedData({
        ticketId: data.ticketId || `ANTA-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
        phoneMasked: data.data?.phoneMasked || phone,
        fullName: data.data?.fullName || name,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Không thể kết nối đến máy chủ bảo mật. Vui lòng kiểm tra kết nối mạng.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Header - Airy & Serene */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-white/10 p-1 mb-2 shadow-lg border border-white/20">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Học viện Anta"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            TRỤ SỞ CHÍNH HỌC VIỆN ANTA
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            Liên Hệ &amp; Đặt Lịch Tham Quan
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            Chào mừng bạn đến trải nghiệm cơ sở đào tạo tại Tòa nhà Anta Group, Võ Chí Công, Hà Nội.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Booking Form - Generous Spacing */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider block">
                THÔNG TIN LIÊN HỆ
              </span>
              <h2 className="text-[22px] font-bold text-[#082554]">Học Viện Kế Toán Anta</h2>
              <p className="text-[13px] text-slate-500">Thành viên Hệ sinh thái Anta Group (2009)</p>
            </div>

            <div className="space-y-4 text-[14px] text-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#0041a2] mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <span className="font-semibold text-[#082554] block">Địa chỉ trụ sở chính:</span>
                  <span className="text-slate-600">Số 6, Ngõ 71 Võ Chí Công, P. Nghĩa Đô, Cầu Giấy, Hà Nội.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#E8590C] mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="font-semibold text-[#082554] block">Hotline đào tạo:</span>
                  <span className="text-[#0041a2] font-semibold block">091 987 6543 (Hỗ trợ 24/7)</span>
                  <span className="text-slate-500 text-[13px]">024 3789 9999 (Tổng đài Anta Group)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#2F9E44] mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="font-semibold text-[#082554] block">Email tiếp nhận:</span>
                  <span className="text-slate-600">tuyensinh@hocvienanta.edu.vn</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#f8f9ff] rounded-2xl border border-slate-200/80 text-[13px] text-slate-600 space-y-1">
              <span className="font-semibold text-[#082554] block">Giờ mở cửa đón tiếp:</span>
              <p>Thứ 2 – Thứ 7: 08h00 – 21h30</p>
              <p>Chủ nhật: 08h30 – 17h30</p>
            </div>
          </div>

          {/* Booking Appointment Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#f8f9ff] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider block">
                ĐẶT LỊCH HẸN TRƯỚC
              </span>
              <h2 className="text-[22px] font-bold text-[#082554]">
                Hẹn Lịch Tham Quan &amp; Kiểm Tra Năng Lực
              </h2>
              <p className="text-[13.5px] text-slate-600">
                Nhận 1 buổi trải nghiệm máy tính và kiểm tra kiến thức thực hành miễn phí.
              </p>
            </div>

            {submittedData ? (
              <div className="p-8 bg-white rounded-2xl border border-[#2F9E44]/40 text-center space-y-3.5 shadow-sm animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[28px]">check</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider block">
                    MÃ XÁC NHẬN: {submittedData.ticketId}
                  </span>
                  <h3 className="text-[19px] font-bold text-[#082554]">Lịch Hẹn Đã Được Ghi Nhận Thành Công!</h3>
                </div>
                <p className="text-[14px] text-slate-600 max-w-md mx-auto leading-relaxed">
                  Ban Đón tiếp Học viện Anta đã lưu lịch hẹn của bạn <strong>{submittedData.fullName}</strong> vào ngày{' '}
                  <strong>{date}</strong> ({timeSlot}). Bộ phận học vụ sẽ liên hệ xác nhận qua số điện thoại{' '}
                  <strong>{submittedData.phoneMasked}</strong>.
                </p>
                <div className="p-3 bg-[#f8f9ff] rounded-xl border border-slate-200 text-[12px] text-slate-500 max-w-sm mx-auto flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-[#2F9E44]">shield</span>
                  <span>Dữ liệu được mã hóa &amp; bảo mật theo NĐ 13/2023/NĐ-CP</span>
                </div>
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setName('');
                    setPhone('');
                  }}
                  className="mt-2 text-[13px] text-[#0041a2] font-semibold hover:underline cursor-pointer"
                >
                  Đặt lại lịch khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[13px] flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] flex-shrink-0">error</span>
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Họ và tên</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn An"
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Số điện thoại</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="091 234 5678"
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Ngày hẹn:</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Khung giờ:</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                    >
                      <option value="09:00 - 11:00">Buổi sáng: 09h00 – 11h00</option>
                      <option value="14:30 - 16:30">Buổi chiều: 14h30 – 16h30</option>
                      <option value="18:30 - 20:30">Buổi tối: 18h30 – 20h30</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-slate-700">Nội dung mong muốn:</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-[#0041a2]"
                  >
                    <option value="Tham quan phòng thực hành máy tính & Test năng lực đầu vào">
                      Tham quan phòng thực hành &amp; Test năng lực (Miễn phí)
                    </option>
                    <option value="Tư vấn lộ trình học từ cơ bản đến tổng hợp">
                      Tư vấn lộ trình học từ cơ bản đến tổng hợp
                    </option>
                    <option value="Gặp gỡ cố vấn thuế giải quyết sổ sách công ty">
                      Gặp gỡ cố vấn thuế giải quyết sổ sách công ty
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[14.5px] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Đang gửi thông tin bảo mật...</span>
                  ) : (
                    <>
                      <span>Xác nhận đặt lịch hẹn</span>
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
