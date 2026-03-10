import { useState } from "react";
import { Building2, Music, Palette, Trophy } from "lucide-react";

const categories = [
  /* 以前と同じ */ { id: "organization", label: "機関", icon: Building2 },
  { id: "culture", label: "文化", icon: Palette },
  { id: "music", label: "音楽", icon: Music },
  { id: "sports", label: "運動", icon: Trophy },
];
const circleData = {
  /* 以前と同じデータ */
  organization: [
    {
      name: "学友会本部",
      members: 25,
      description: "学友会全体の運営を行う組織",
    },
  ],
  culture: [{ name: "写真部", members: 32, description: "写真撮影と作品展示" }],
  music: [
    { name: "吹奏楽部", members: 85, description: "コンサートや演奏会を開催" },
  ],
  sports: [
    { name: "サッカー部", members: 65, description: "リーグ戦や大会への出場" },
  ],
};

export function CircleSection() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof circleData>("organization");

  return (
    <section
      id="サークル"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/5 text-sm text-black/60">
            Circles
          </div>
          {/* 🌟 ここに font-serif を追加！ */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight font-serif">
            サークル一覧
          </h2>
          <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
            あなたに合ったサークルを見つけよう
          </p>
        </div>

        <div className="mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4 min-w-max sm:min-w-0 sm:justify-center px-2 sm:px-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setActiveTab(category.id as keyof typeof circleData)
                  }
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full transition-all ${isActive ? "text-white shadow-lg" : "bg-white border border-black/10 text-black/70 hover:bg-black/5"}`}
                  style={isActive ? { backgroundColor: "var(--navy)" } : {}}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {circleData[activeTab].map((circle, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
