import React, { useEffect, useState } from 'react';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface SecurityPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PolicyData {
  complianceStandards: string[];
  dataRetentionPolicy: string;
  encryption: string;
}

export const SecurityPolicyModal: React.FC<SecurityPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [policyData, setPolicyData] = useState<PolicyData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/api/security/policy')
        .then((res) => res.json())
        .then((data) => {
          setPolicyData(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Header Ribbon */}
        <div className="bg-[#082554] p-5 sm:p-6 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3.5">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Logo Học viện Anta"
              className="w-11 h-11 rounded-full object-contain bg-white/10 p-0.5 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-[11px] font-bold text-[#F59F00] uppercase tracking-wider block">
                BẢO MẬT &amp; QUYỀN RIÊNG TƯ
              </span>
              <h3 className="text-[18px] sm:text-[20px] font-bold leading-snug">
                Chính Sách Bảo Mật Dữ Liệu Học Viên &amp; Doanh Nghiệp
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ chính sách bảo mật"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Status bar */}
        <div className="bg-[#eff4ff] border-b border-[#dae2ff] px-6 py-2.5 flex items-center justify-between text-[12px] text-[#0041a2] flex-shrink-0">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#2F9E44]">verified</span>
            <span>Hệ thống bảo mật TLS 1.3 / SHA-256 đang hoạt động</span>
          </span>
          <span className="text-slate-500 font-mono">Phiên bản 2026.1</span>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[14px] text-slate-700 leading-relaxed">
          {/* Section 1: Legal Compliance */}
          <div className="space-y-2.5">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#0041a2]/10 text-[#0041a2] flex items-center justify-center text-[13px] font-bold">
                1
              </span>
              <span>Căn Cứ Pháp Lý &amp; Tiêu Chuẩn Áp Dụng</span>
            </h4>
            <p className="text-slate-600">
              Học viện Kế toán - Tài chính Anta (thành viên Anta Group) cam kết tuyệt đối tuân thủ
              các quy định pháp luật hiện hành của Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam:
            </p>
            <ul className="space-y-1.5 pl-4 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check_circle</span>
                <span><strong>Nghị định 13/2023/NĐ-CP:</strong> Quy định về Bảo vệ dữ liệu cá nhân (PDPD).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check_circle</span>
                <span><strong>Luật An ninh mạng số 24/2018/QH14:</strong> Bảo vệ thông tin và an toàn trên không gian mạng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2F9E44] text-[16px] mt-0.5">check_circle</span>
                <span><strong>Luật Kế toán số 88/2015/QH13:</strong> Bảo mật số liệu sổ sách kế toán và chứng từ tài chính.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Data Collection & Usage */}
          <div className="space-y-2.5">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#0041a2]/10 text-[#0041a2] flex items-center justify-center text-[13px] font-bold">
                2
              </span>
              <span>Mục Đích Thu Thập &amp; Phạm Vi Dữ Liệu</span>
            </h4>
            <p className="text-slate-600">
              Chúng tôi chỉ thu thập thông tin người học khi có sự đồng thuận tự nguyện:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-[#082554] block text-[13px] mb-1">Dữ liệu liên hệ</span>
                <p className="text-[12.5px] text-slate-600">
                  Họ tên, số điện thoại, email phục vụ tư vấn khóa học, phân tích lộ trình và gửi tài liệu học tập.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-[#082554] block text-[13px] mb-1">Dữ liệu văn bằng</span>
                <p className="text-[12.5px] text-slate-600">
                  Mã số định danh chứng chỉ, điểm tổng kết để cấp bằng điện tử và hỗ trợ nhà tuyển dụng đối soát.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Security Infrastructure */}
          <div className="space-y-2.5">
            <h4 className="text-[16px] font-bold text-[#082554] flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#0041a2]/10 text-[#0041a2] flex items-center justify-center text-[13px] font-bold">
                3
              </span>
              <span>Hạ Tầng Kỹ Thuật &amp; Biện Pháp Phòng Ngự</span>
            </h4>
            <div className="space-y-2 text-slate-600">
              <p>
                <strong>Mã hóa đầu cuối:</strong> Mọi kết nối truyền tải giữa trình duyệt của bạn và hệ thống Anta được bảo vệ qua kênh truyền HTTPS với mã hóa TLS 1.3 và thuật toán AES-256 bit.
              </p>
              <p>
                <strong>Chống tấn công &amp; Lạm dụng (Rate Limiting):</strong> Hệ thống trang bị tường lửa tự động giới hạn tần suất truy vấn để ngăn ngừa các cuộc tấn công DDoS, rò rỉ dữ liệu hoặc brute-force vào Cổng học viên.
              </p>
              <p>
                <strong>Xác thực chứng chỉ chữ ký số:</strong> Mỗi văn bằng được băm mã hóa một chiều SHA-256 duy nhất, bảo đảm không thể giả mạo hoặc chỉnh sửa điểm số.
              </p>
            </div>
          </div>

          {/* Section 4: Non-Disclosure Commitment */}
          <div className="p-4 bg-[#eff4ff] rounded-2xl border border-[#dae2ff] space-y-2">
            <h5 className="font-bold text-[#0041a2] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Cam Kết Tuyệt Đối Không Tiết Lộ Cho Bên Thứ Ba</span>
            </h5>
            <p className="text-[13px] text-slate-600 leading-relaxed">
              Học viện Anta cam kết không bao giờ thương mại hóa, chia sẻ hay cung cấp thông tin cá nhân
              của học viên cho bất kỳ đơn vị quảng cáo, tiếp thị bên ngoài nào. Mọi chứng từ mẫu trong
              quá trình đào tạo đều được mã hóa hoặc ẩn danh theo đúng chuẩn mực bảo mật doanh nghiệp.
            </p>
          </div>

          {policyData && (
            <div className="text-[12px] text-slate-500 pt-2 border-t border-slate-100 flex flex-wrap gap-4">
              <span>Mã hóa: {policyData.encryption}</span>
              <span>•</span>
              <span>Chính sách lưu trữ: {policyData.dataRetentionPolicy}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 sm:px-8 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <span className="text-[12.5px] text-slate-500">
            Cần hỗ trợ về quyền riêng tư? Liên hệ: <strong className="text-slate-700">tuyensinh@hocvienanta.edu.vn</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0041a2] hover:bg-[#082554] text-white font-bold text-[13px] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Đã Hiểu &amp; Đồng Ý
          </button>
        </div>
      </div>
    </div>
  );
};
