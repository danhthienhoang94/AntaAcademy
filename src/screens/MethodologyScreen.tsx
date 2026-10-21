import React, { useState } from 'react';
import { ScreenType } from '../types';

interface MethodologyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const MethodologyScreen: React.FC<MethodologyScreenProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Mini interactive practice sandbox state
  const [selectedDebit1, setSelectedDebit1] = useState('');
  const [selectedDebit2, setSelectedDebit2] = useState('');
  const [selectedCredit, setSelectedCredit] = useState('');
  const [simulationResult, setSimulationResult] = useState<null | boolean>(null);

  const handleCheckSimulation = () => {
    if (
      (selectedDebit1 === '156' || selectedDebit2 === '156') &&
      (selectedDebit1 === '1331' || selectedDebit2 === '1331') &&
      selectedCredit === '331'
    ) {
      setSimulationResult(true);
    } else {
      setSimulationResult(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Banner - Airy & Serene */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            PHƯƠNG PHÁP ĐÀO TẠO ĐỘC QUYỀN
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            Mô Hình Thực Chiến 4 Bước
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            Quy trình hoàn chỉnh từ việc tiếp cận hóa đơn thật, hạch toán phần mềm, lập BCTC đến
            đồng hành cố vấn suốt chặng đường làm nghề.
          </p>
        </div>
      </section>

      {/* 4 Steps in Detail - Generous Spacing */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="space-y-10">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[32px] font-extrabold text-[#F59F00] block">01</span>
              <div>
                <span className="text-[11px] font-bold text-[#0041a2] uppercase block">
                  Bước 1 · Tiếp cận &amp; Kiểm tra
                </span>
                <h3 className="text-[22px] font-bold text-[#082554] mt-0.5">Chứng Từ Thực Tế</h3>
              </div>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Học viên được giao các bộ hồ sơ chứng từ gốc của doanh nghiệp: Hóa đơn điện tử, phiếu
                thu, chi, giấy báo ngân hàng và tờ khai hải quan thật.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#f8f9ff] p-6 sm:p-7 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-[#082554] text-[14px]">Năng lực cốt lõi đạt được:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-slate-600">
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Kiểm tra tính hợp lệ, hợp pháp của hóa đơn</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Phân loại chứng từ theo phân hệ kinh tế</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Hoàn thiện bộ hồ sơ thanh toán chuẩn thuế</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Nhận diện hóa đơn từ doanh nghiệp rủi ro cao</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[32px] font-extrabold text-[#E8590C] block">02</span>
              <div>
                <span className="text-[11px] font-bold text-[#0041a2] uppercase block">
                  Bước 2 · Hạch toán số liệu
                </span>
                <h3 className="text-[22px] font-bold text-[#082554] mt-0.5">Thực Hành Phần Mềm</h3>
              </div>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Được cấp bản quyền phần mềm MISA SME và Fast. Tự tay nhập liệu, định khoản và đối
                chiếu sổ cái chi tiết.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#f8f9ff] p-6 sm:p-7 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-[#082554] text-[14px]">Năng lực cốt lõi đạt được:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-slate-600">
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Cài đặt hệ thống số dư và danh mục ban đầu</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Nhập liệu mua bán hàng, tính giá xuất kho</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Hạch toán tiền lương, BHXH và phân bổ TSCĐ</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Đối chiếu khớp đúng số dư sổ cái và bảng kê</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[32px] font-extrabold text-[#2F9E44] block">03</span>
              <div>
                <span className="text-[11px] font-bold text-[#0041a2] uppercase block">
                  Bước 3 · Báo cáo &amp; Thuế
                </span>
                <h3 className="text-[22px] font-bold text-[#082554] mt-0.5">Giải Quyết Nghiệp Vụ</h3>
              </div>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Khóa sổ, kết chuyển doanh thu chi phí, xác định kết quả kinh doanh và lập trọn bộ Báo
                cáo tài chính theo Thông tư 200/133.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#f8f9ff] p-6 sm:p-7 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-[#082554] text-[14px]">Năng lực cốt lõi đạt được:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-slate-600">
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Lập Bảng cân đối tài khoản F01-DNN</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Lập Báo cáo KQKD &amp; Lưu chuyển tiền tệ</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Kê khai và quyết toán thuế TNDN, TNCN</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Kỹ năng bảo vệ chi phí khi quyết toán thuế</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[32px] font-extrabold text-[#0041a2] block">04</span>
              <div>
                <span className="text-[11px] font-bold text-[#0041a2] uppercase block">
                  Bước 4 · Cố vấn trọn đời
                </span>
                <h3 className="text-[22px] font-bold text-[#082554] mt-0.5">Cập Nhật &amp; Đồng Hành</h3>
              </div>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Được tham gia mạng lưới chuyên gia Anta Group, luôn thường trực hỗ trợ giải đáp tình
                huống phát sinh tại doanh nghiệp nơi học viên công tác.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#f8f9ff] p-6 sm:p-7 rounded-2xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-[#082554] text-[14px]">Quyền lợi sau tốt nghiệp:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-slate-600">
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Hỗ trợ nghiệp vụ trực tiếp cùng giảng viên</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Tham gia Workshop luật thuế mới miễn phí</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Kết nối việc làm tại 100.000+ doanh nghiệp</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check</span>
                  <span>Chứng chỉ số hóa tra cứu điện tử toàn quốc</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Interactive Sandbox - Clean & Calm */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20">
        <div className="bg-[#082554] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
              TRẢI NGHIỆM THỬ NGHIỆM VỤ
            </span>
            <h3 className="text-[26px] font-extrabold">
              Bài Tập Định Khoản Nghiệp Vụ Mẫu
            </h3>
            <p className="text-[14px] text-slate-300">
              Đề bài: “Doanh nghiệp mua hàng hóa nhập kho 50.000.000đ, thuế GTGT 10%, chưa trả tiền
              người bán.”
            </p>
          </div>

          <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-[#0041a2]">Ghi Nợ TK 1:</label>
                <select
                  value={selectedDebit1}
                  onChange={(e) => setSelectedDebit1(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg text-[13px]"
                >
                  <option value="">-- Chọn TK --</option>
                  <option value="156">TK 156 (Hàng hóa)</option>
                  <option value="152">TK 152 (Nguyên liệu)</option>
                  <option value="642">TK 642 (Chi phí QL)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-bold text-[#0041a2]">Ghi Nợ TK 2:</label>
                <select
                  value={selectedDebit2}
                  onChange={(e) => setSelectedDebit2(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg text-[13px]"
                >
                  <option value="">-- Chọn TK --</option>
                  <option value="1331">TK 1331 (Thuế khấu trừ)</option>
                  <option value="3331">TK 3331 (Thuế đầu ra)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-bold text-[#E8590C]">Ghi Có TK:</label>
                <select
                  value={selectedCredit}
                  onChange={(e) => setSelectedCredit(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg text-[13px]"
                >
                  <option value="">-- Chọn TK --</option>
                  <option value="331">TK 331 (Phải trả người bán)</option>
                  <option value="111">TK 111 (Tiền mặt)</option>
                  <option value="112">TK 112 (Tiền gửi NH)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleCheckSimulation}
                className="px-5 py-2.5 bg-[#0041a2] hover:bg-[#082554] text-white font-bold rounded-lg text-[13px] transition-all cursor-pointer"
              >
                Kiểm tra kết quả
              </button>

              {simulationResult !== null && (
                <span
                  className={`text-[13px] font-semibold flex items-center gap-1 ${
                    simulationResult ? 'text-[#2F9E44]' : 'text-red-500'
                  }`}
                >
                  <span className="material-symbols-outlined text-[17px]">
                    {simulationResult ? 'check_circle' : 'error'}
                  </span>
                  <span>{simulationResult ? 'Chính xác! Nợ 156, Nợ 1331 / Có 331.' : 'Chưa đúng, vui lòng thử lại!'}</span>
                </span>
              )}
            </div>
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 bg-[#E8590C] hover:bg-[#d04e0a] text-white font-bold rounded-xl text-[14px] transition-all cursor-pointer shadow-sm"
            >
              Đăng Ký Học Thực Hành 4 Bước
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
