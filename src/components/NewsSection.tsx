import { Clock, ChevronRight } from "lucide-react";

const newsItems = [
  {
    date: "2026.02.20",
    category: "イベント",
    title: "春季新入生歓迎会の開催について",
    tag: "重要",
  },
  {
    date: "2026.02.15",
    category: "お知らせ",
    title: "2026年度学友会費納入のご案内",
    tag: "重要",
  },
  {
    date: "2026.02.10",
    category: "サークル",
    title: "新規サークル設立申請の受付開始",
    tag: "新着",
  },
  {
    date: "2026.02.05",
    category: "施設",
    title: "体育館メンテナンスによる利用制限のお知らせ",
    tag: "",
  },
  {
    date: "2026.01.28",
    category: "イベント",
    title: "冬季スポーツ大会の結果報告",
    tag: "",
  },
  {
    date: "2026.01.20",
    category: "お知らせ",
    title: "学友会規約の一部改正について",
    tag: "",
  },
  {
    date: "2026.01.15",
    category: "サークル",
    title: "サークル活動発表会の開催レポート",
    tag: "",
  },
];

export function NewsSection() {
  return (
    <section id="お知らせ" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/5 text-sm text-black/60">
            News
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">お知らせ</h2>
          <p className="text-base sm:text-lg text-black/60">
            最新の情報をチェック
          </p>
        </div>

        {/* ニュースリスト */}
        <div className="space-y-3 sm:space-y-4">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group block p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* 日付とカテゴリ */}
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-black/60 mb-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div
                    className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs text-white"
                    style={{ backgroundColor: "var(--navy-light)" }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* タイトル */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-start gap-2">
                    {item.tag && (
                      <span
                        className="flex-shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs text-white"
                        style={{ backgroundColor: item.tag === "重要" ? "var(--navy)" : "#4ade80" }}
                      >
                        {item.tag}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base lg:text-lg group-hover:underline">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* 矢印アイコン */}
                <ChevronRight className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-black/30 group-hover:text-black/60 transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white border border-black/10 text-black hover:bg-black/5 transition-all">
            すべてのお知らせを見る
          </button>
        </div>
      </div>
    </section>
  );
}
