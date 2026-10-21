import React, { useState } from 'react';
import { TaxArticle } from '../types';
import { TAX_ARTICLES } from '../data/mockData';

interface NewsScreenProps {
  onSelectArticle: (article: TaxArticle) => void;
  onOpenConsultation: () => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({
  onSelectArticle,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả bài viết' },
    { id: 'Thuế Doanh Nghiệp', label: 'Thuế Doanh Nghiệp' },
    { id: 'Rủi Ro Kế Toán', label: 'Rủi Ro Kế Toán' },
    { id: 'Quyết Toán Thuế', label: 'Quyết Toán Thuế' },
  ];

  const filteredArticles = TAX_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full pb-20 text-slate-800">
      {/* Hero Header - Airy & Serene */}
      <section className="bg-[#082554] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-3">
          <span className="text-[11.5px] font-bold text-[#F59F00] uppercase tracking-wider block">
            CHUYÊN TRANG NGHIỆP VỤ &amp; PHÁP LUẬT THUẾ
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold max-w-2xl leading-tight">
            Bản Tin Thuế &amp; Kế Toán Thực Tế 2026
          </h1>
          <p className="text-[16px] text-slate-300 max-w-xl leading-relaxed">
            Phân tích chính sách thuế mới, xử lý rủi ro số liệu và cẩm nang quyết toán thực tiễn.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200/60">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#0041a2] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80 flex items-center bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl focus-within:border-[#0041a2]">
            <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo chủ đề, từ khóa..."
              className="w-full bg-transparent text-[13.5px] text-slate-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Editorial Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group space-y-4"
            >
              <div className="space-y-3">
                <div className="text-[12px] text-slate-500 font-medium">
                  <span className="text-[#0041a2] font-semibold">{article.category}</span>
                  <span className="mx-1.5">·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-[17.5px] font-bold text-[#082554] group-hover:text-[#0041a2] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-[13.5px] text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[12.5px] text-slate-500">
                <span>Tác giả: <strong className="text-slate-700">{article.author}</strong></span>
                <span className="text-[#0041a2] font-semibold group-hover:translate-x-1 transition-transform">
                  Chi tiết →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
