import { useState } from "react";
import { Building2, Music, Palette, Trophy } from "lucide-react";

const categories = [
  { id: "organization", label: "機関", icon: Building2 },
  { id: "culture", label: "文化", icon: Palette },
  { id: "music", label: "音楽", icon: Music },
  { id: "sports", label: "運動", icon: Trophy },
];

const circleData = {
  organization: [
    { name: "学友会本部", members: 25, description: "学友会全体の運営を行う組織" },
    { name: "広報委員会", members: 18, description: "学友会の活動を広報する" },
    { name: "会計委員会", members: 12, description: "予算管理と会計処理を担当" },
    { name: "イベント企画委員会", members: 30, description: "大学祭などのイベントを企画" },
    { name: "施設管理委員会", members: 15, description: "施設の管理と予約システム運営" },
    { name: "新歓実行委員会", members: 40, description: "新入生歓迎イベントの企画運営" },
  ],
  culture: [
    { name: "写真部", members: 32, description: "写真撮影と作品展示" },
    { name: "演劇部", members: 45, description: "舞台公演と演技練習" },
    { name: "茶道部", members: 28, description: "伝統的な茶道を学ぶ" },
    { name: "書道部", members: 22, description: "書道の技術を磨く" },
    { name: "美術部", members: 35, description: "絵画・彫刻などの制作活動" },
    { name: "文芸部", members: 18, description: "小説・詩・エッセイの創作" },
  ],
  music: [
    { name: "吹奏楽部", members: 85, description: "コンサートや演奏会を開催" },
    { name: "軽音楽部", members: 120, description: "バンド活動とライブイベント" },
    { name: "合唱団", members: 50, description: "合唱コンサートへの出演" },
    { name: "ジャズ研究会", members: 38, description: "ジャズの演奏と研究" },
    { name: "アカペラサークル", members: 42, description: "無伴奏での歌唱活動" },
    { name: "DJ部", members: 25, description: "DJプレイとイベント企画" },
  ],
  sports: [
    { name: "サッカー部", members: 65, description: "リーグ戦や大会への出場" },
    { name: "バスケットボール部", members: 48, description: "試合や練習活動" },
    { name: "テニス部", members: 55, description: "テニスの技術向上と大会参加" },
    { name: "野球部", members: 72, description: "野球の練習と対外試合" },
    { name: "バレーボール部", members: 42, description: "バレーボール競技活動" },
    { name: "陸上競技部", members: 38, description: "陸上競技の練習と記録会" },
  ],
};

export function CircleSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof circleData>("organization");

  return (
    <section id="サークル" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/5 text-sm text-black/60">
            Circles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">サークル一覧</h2>
          <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
            あなたに合ったサークルを見つけよう
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4 min-w-max sm:min-w-0 sm:justify-center px-2 sm:px-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id as keyof typeof circleData)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full transition-all ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
                  }`}
                  style={isActive ? { backgroundColor: "var(--navy)" } : {}}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* サークルグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {circleData[activeTab].map((circle, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg sm:text-xl pr-2">{circle.name}</h3>
                <div
                  className="px-3 py-1 rounded-full text-xs text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  {circle.members}名
                </div>
              </div>
              <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                {circle.description}
              </p>
              <button
                className="mt-4 text-sm hover:underline"
                style={{ color: "var(--navy)" }}
              >
                詳細を見る →
              </button>
            </div>
          ))}
        </div>

        {/* すべて見るボタン */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white border border-black/10 text-black hover:bg-black/5 transition-all">
            すべてのサークルを見る
          </button>
        </div>
      </div>
    </section>
  );
}