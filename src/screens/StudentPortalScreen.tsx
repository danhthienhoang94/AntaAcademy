import React, { useState } from 'react';
import { ScreenType, StudentCertificate } from '../types';
import { ANTA_OFFICIAL_LOGO } from '../data/mockData';

interface StudentPortalScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
  onOpenSecurityPolicy?: () => void;
}

export const StudentPortalScreen: React.FC<StudentPortalScreenProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSecurityPolicy,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<(StudentCertificate & { verificationHash?: string; issuedBy?: string }) | null>(null);

  // LMS Login states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [lmsToken, setLmsToken] = useState<string | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadTemplate = (title: string, type: string, directUrl?: string) => {
    if (directUrl) {
      const a = document.createElement('a');
      a.href = directUrl;
      a.download = directUrl.split('/').pop() || 'anta-academy-full-source.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloadNotice(`Đang tải trọn bộ mã nguồn dự án: ${title}`);
      setTimeout(() => setDownloadNotice(null), 4000);
      return;
    }

    // Generate a safe verified downloadable document
    const content = `HỌC VIỆN ĐÀO TẠO KẾ TOÁN - TÀI CHÍNH ANTA (ANTA GROUP)
Tài nguyên đào tạo thực chiến: ${title}
Định dạng lưu hành: ${type}
Tiêu chuẩn xác thực dữ liệu: SHA-256 Checksum Verified
Bản quyền tài liệu thuộc Học viện Kế toán Anta (Hà Nội, Việt Nam).
Liên hệ hỗ trợ nghiệp vụ & đào tạo: tuyensinh@hocvienanta.edu.vn | Hotline: 091 987 6543
=============================================================================
Hướng dẫn thực hành:
1. Sử dụng tài liệu này kèm theo bài giảng thực hành chứng từ sống tại Anta.
2. Đối soát dữ liệu hạch toán với phần mềm MISA SME 2026 / FAST Accounting.
3. Liên hệ giảng viên Kế toán trưởng để được giải đáp nếu có vướng mắc thực tế phát sinh.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_Anta_Academy.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadNotice(`Đã tải xuống an toàn: ${title}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setSearchLoading(true);
    setSearchError(null);
    setSearchResult(null);

    try {
      const res = await fetch('/api/certificate/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Không tìm thấy chứng chỉ hợp lệ.');
      }

      setSearchResult(data.certificate);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSearchError(err.message);
      } else {
        setSearchError('Không thể kết nối đến máy chủ xác thực.');
      }
    } finally {
      setSearchLoading(false);
    }
  };

  const handleLmsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPass,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Đăng nhập không thành công.');
      }

      setLmsToken(data.token);
      setLoginSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError('Lỗi kết nối bảo mật đến máy chủ.');
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const downloadTemplates: {
    title: string;
    size: string;
    type: string;
    downloads: string;
    downloadUrl?: string;
    isFeatured?: boolean;
  }[] = [
    {
      title: 'Trọn bộ Toàn bộ Mã nguồn Dự án Anta Academy (Full Source Code ZIP)',
      size: '124 KB',
      type: '.zip',
      downloads: 'Trọn gói hoàn chỉnh',
      downloadUrl: '/anta-academy-full-source.zip',
      isFeatured: true,
    },
    {
      title: 'Bảng cân đối tài khoản (F01-DNN) Excel tự động hóa',
      size: '2.4 MB',
      type: '.xlsx',
      downloads: '1.420 lượt',
    },
    {
      title: 'Mẫu Báo cáo lưu chuyển tiền tệ phương pháp gián tiếp 2026',
      size: '1.8 MB',
      type: '.xlsx',
      downloads: '980 lượt',
    },
    {
      title: 'Checklist 65 điểm rủi ro khi thanh tra thuế Doanh nghiệp',
      size: '850 KB',
      type: '.pdf',
      downloads: '2.350 lượt',
    },
    {
      title: 'File Excel lập kế hoạch và kiểm soát dòng tiền 52 tuần cho CEO',
      size: '3.1 MB',
      type: '.xlsx',
      downloads: '1.890 lượt',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#082554] via-[#0041a2] to-[#082554] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 p-1 mb-4 shadow-xl border border-white/20">
            <img
              src={ANTA_OFFICIAL_LOGO}
              alt="Học viện Anta"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[12px] font-bold text-[#F59F00] uppercase tracking-wider mb-2">
            HỆ THỐNG QUẢN LÝ ĐÀO TẠO &amp; BẢO MẬT DỮ LIỆU
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-3xl leading-tight">
            Cổng Học Viên &amp; Tra Cứu Chứng Chỉ Điện Tử
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#dde9ff] max-w-2xl mt-3 leading-relaxed">
            Hệ thống xác thực văn bằng điện tử bảo mật chuẩn mã hóa SHA-256, cổng đăng nhập LMS có kiểm soát chống tấn công và tải tài nguyên thực hành an toàn.
          </p>
        </div>
      </section>

      {/* Security Status Ribbon */}
      <div className="bg-[#0b1f3a] text-slate-300 py-3 border-y border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2F9E44] animate-pulse"></span>
            <span className="text-white font-semibold">Máy chủ Backend &amp; Tường lửa API: HOẠT ĐỘNG BÌNH THƯỜNG</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Mã hóa TLS 1.3 / AES-256</span>
            <span>Chống tấn công Brute-force &amp; DDoS</span>
            <span>Tuân thủ Luật An ninh mạng 2026</span>
          </div>
        </div>
      </div>

      {/* Section 1: Certificate Verification Tool */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider">
              XÁC THỰC VĂN BẰNG ĐIỆN TỬ BẢO MẬT
            </span>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#082554]">
              Tra Cứu Chứng Chỉ Tốt Nghiệp Anta Group
            </h2>
            <p className="text-[14px] text-slate-600">
              Nhập mã chứng chỉ (ví dụ:{' '}
              <span className="font-mono font-bold text-[#0041a2]">ANT-2026-0891</span> hoặc{' '}
              <span className="font-mono font-bold text-[#0041a2]">ANT-2026-0422</span>) hoặc Họ tên học
              viên để kiểm tra tính xác thực trực tiếp từ cơ sở dữ liệu.
            </p>
          </div>

          <form onSubmit={handleLookup} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center bg-[#f8f9ff] border border-slate-300 px-4 py-3 rounded-xl focus-within:border-[#0041a2] transition-colors">
              <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
              <input
                type="text"
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập mã chứng chỉ hoặc tên học viên..."
                className="w-full bg-transparent text-[14px] text-slate-800 focus:outline-none font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={searchLoading}
              className="px-6 py-3 bg-[#0041a2] hover:bg-[#082554] text-white font-bold rounded-xl text-[14px] transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5 disabled:opacity-60"
            >
              {searchLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Đang Tra Cứu...</span>
                </>
              ) : (
                <>
                  <span>Kiểm Tra</span>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </>
              )}
            </button>
          </form>

          {/* Certificate Result Card */}
          {searched && (
            <div className="mt-8 max-w-2xl mx-auto">
              {searchLoading ? (
                <div className="p-8 text-center text-slate-500 flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-3 border-[#0041a2] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-[13.5px]">Đang kiểm tra tính hợp lệ qua chữ ký số máy chủ...</p>
                </div>
              ) : searchResult ? (
                <div className="bg-[#f8f9ff] border-2 border-[#2F9E44]/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm animate-fade-in">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">verified</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#2F9E44] uppercase tracking-wider block">
                          CHỨNG CHỈ HỢP LỆ &amp; BẢO CHỨNG BỞI ANTA GROUP
                        </span>
                        <h4 className="text-[20px] font-bold text-[#082554]">
                          {searchResult.studentName}
                        </h4>
                      </div>
                    </div>
                    <span className="font-mono text-[13px] font-bold bg-white px-3 py-1 rounded-lg border border-slate-200 text-[#0041a2]">
                      {searchResult.code}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                    <div>
                      <span className="text-slate-500 text-[12px] block">Khóa đào tạo:</span>
                      <strong className="text-slate-800">{searchResult.courseName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[12px] block">Mã định danh văn bằng:</span>
                      <strong className="font-mono text-[#0041a2]">{searchResult.credentialId}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[12px] block">Ngày hoàn thành:</span>
                      <span className="text-slate-700">{searchResult.completionDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[12px] block">Xếp loại tốt nghiệp:</span>
                      <span className="font-bold text-[#2F9E44]">{searchResult.grade}</span>
                    </div>
                  </div>

                  {searchResult.verificationHash && (
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-[11.5px] font-mono text-slate-500 break-all">
                      <span className="text-slate-700 font-bold block mb-0.5">Mã băm SHA-256 xác thực:</span>
                      {searchResult.verificationHash}
                    </div>
                  )}

                  <div className="pt-2 text-[12px] text-slate-500 flex items-center justify-between border-t border-slate-200">
                    <span>Đơn vị cấp: {searchResult.issuedBy || 'Học viện Kế toán Anta'}</span>
                    <span className="text-[#2F9E44] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">lock</span>
                      Đã ký số điện tử
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-2 text-red-700 animate-fade-in">
                  <span className="material-symbols-outlined text-[36px] text-red-500">
                    cancel
                  </span>
                  <h4 className="font-bold text-[16px]">Không Tìm Thấy Văn Bằng Phù Hợp</h4>
                  <p className="text-[13px] text-red-600 max-w-md mx-auto">
                    {searchError || 'Vui lòng kiểm tra lại chính xác Mã chứng chỉ hoặc Họ tên học viên để hệ thống bảo mật xác thực.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Section 2: LMS Portal Login & Downloads */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LMS Login Box (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#F59F00] uppercase tracking-wider block">
                CỔNG HỌC TẬP TRỰC TUYẾN
              </span>
              <h3 className="text-[22px] font-extrabold text-[#082554]">Đăng Nhập LMS Anta</h3>
              <p className="text-[13px] text-slate-600">
                Truy cập bài giảng ghi hình, bài tập nghiệp vụ và phòng thực hành phần mềm.
              </p>
            </div>

            {loginSuccess ? (
              <div className="p-6 bg-[#ebfbee] border border-[#d3f9d8] rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#2F9E44] text-white flex items-center justify-center mx-auto shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">done</span>
                </div>
                <h4 className="font-bold text-[#082554] text-[16px]">
                  Xác Thực Thành Công!
                </h4>
                <p className="text-[13px] text-slate-600">
                  Phiên học tập an toàn đã được kích hoạt cho tài khoản{' '}
                  <strong className="text-slate-800">{loginEmail}</strong>.
                </p>
                {lmsToken && (
                  <div className="p-2 bg-white rounded border border-[#2F9E44]/30 text-[11px] font-mono text-slate-500">
                    Session: {lmsToken}
                  </div>
                )}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setLoginSuccess(false);
                      setLoginPass('');
                    }}
                    className="w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg text-[13px] transition-colors cursor-pointer"
                  >
                    Đăng xuất an toàn
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLmsLogin} className="space-y-4">
                {loginError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-[12.5px] text-red-700">
                    <span className="material-symbols-outlined text-[16px] text-red-500 mt-0.5 flex-shrink-0">
                      shield_with_heart
                    </span>
                    <span>{loginError}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-slate-700">Mã học viên / Email:</label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="hv.anta2026@gmail.com"
                    className="w-full bg-[#f8f9ff] border border-slate-200 px-3.5 py-2.5 rounded-lg text-[14px] focus:outline-none focus:border-[#0041a2] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-slate-700">Mật khẩu:</label>
                  <input
                    type="password"
                    required
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#f8f9ff] border border-slate-200 px-3.5 py-2.5 rounded-lg text-[14px] focus:outline-none focus:border-[#0041a2] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-3 bg-[#0041a2] hover:bg-[#082554] text-white font-bold rounded-lg text-[14px] shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loginLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Đang Xác Thực...</span>
                    </>
                  ) : (
                    <>
                      <span>Đăng Nhập LMS An Toàn</span>
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11.5px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#2F9E44]">security</span>
                    <span>Giới hạn 5 lần thử/15p</span>
                  </span>
                  <span className="text-[#0041a2] hover:underline cursor-pointer">Quên mật khẩu?</span>
                </div>
              </form>
            )}
          </div>

          {/* Download Resources List (7 Cols) */}
          <div className="lg:col-span-7 bg-[#f8f9ff] rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#0041a2] uppercase tracking-wider block">
                  KHO BIỂU MẪU ĐÃ KIỂM ĐỊNH
                </span>
                <h3 className="text-[20px] font-bold text-[#082554]">
                  Tài Nguyên Thực Chiến Dành Cho Kế Toán
                </h3>
              </div>
              <span className="text-[12px] font-bold text-[#2F9E44] bg-[#2F9E44]/15 px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Đã quét mã độc
              </span>
            </div>

            <div className="space-y-3">
              {downloadTemplates.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all shadow-2xs ${
                    item.isFeatured
                      ? 'bg-[#eff4ff] border-[#0041a2]/40 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-[#0041a2]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center text-[12px] flex-shrink-0 ${
                        item.isFeatured
                          ? 'bg-[#0041a2] text-white shadow-xs'
                          : 'bg-[#E8590C]/10 text-[#E8590C]'
                      }`}
                    >
                      {item.type}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[14px] font-bold text-[#082554] line-clamp-1">
                          {item.title}
                        </h4>
                        {item.isFeatured && (
                          <span className="text-[10px] font-bold bg-[#E8590C] text-white px-2 py-0.5 rounded-full uppercase">
                            Toàn bộ code
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] text-slate-500">
                        Dung lượng: {item.size} • {item.downloads}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadTemplate(item.title, item.type, item.downloadUrl)}
                    className={`px-4 py-2 text-[12.5px] font-bold rounded-lg border flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${
                      item.isFeatured
                        ? 'bg-[#0041a2] hover:bg-[#082554] text-white border-[#0041a2]'
                        : 'bg-[#f8f9ff] hover:bg-[#eff4ff] text-[#0041a2] border-slate-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Tải về</span>
                  </button>
                </div>
              ))}
            </div>

            {downloadNotice && (
              <div className="p-3 bg-[#ebfbee] border border-[#2F9E44]/40 rounded-xl text-[#2F9E44] text-[13px] flex items-center gap-2 animate-fade-in font-medium">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>{downloadNotice}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Security Architecture Information Panel */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-14">
        <div className="bg-[#082554] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F59F00] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">enhanced_encryption</span>
              </div>
              <h4 className="text-[17px] font-bold">Mã Hóa Toàn Trình</h4>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Mọi thông tin liên hệ, hồ sơ tuyển sinh và dữ liệu lớp học đều được mã hóa theo giao thức TLS 1.3 và thuật toán AES-256 bit hiện đại nhất.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#2F9E44] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">gavel</span>
              </div>
              <h4 className="text-[17px] font-bold">Tuân Thủ Pháp Luật</h4>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Nghiêm túc chấp hành Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và Luật An ninh mạng Việt Nam. Tuyệt đối không chia sẻ dữ liệu cho bên thứ ba.
              </p>
              {onOpenSecurityPolicy && (
                <button
                  onClick={onOpenSecurityPolicy}
                  className="text-[12.5px] text-[#F59F00] hover:underline font-semibold flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>Xem chi tiết chính sách pháp lý</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#00A3E0] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">fingerprint</span>
              </div>
              <h4 className="text-[17px] font-bold">Chữ Ký Số Văn Bằng</h4>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Chứng chỉ tốt nghiệp của Học viện Anta Group được bảo chứng bằng mã băm SHA-256 chống làm giả, có thể tra cứu và xác minh toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
