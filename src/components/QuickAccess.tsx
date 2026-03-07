import { Calendar, Package, MapPin, FileText, Users, Mail } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "施設予約",
    description: "体育館や教室などの施設を簡単に予約できます",
    color: "var(--navy)",
  },
  {
    icon: Package,
    title: "物品貸出",
    description: "イベント用品やスポーツ用品の貸出サービス",
    color: "var(--navy-light)",
  },
  {
    icon: MapPin,
    title: "キャンパスマップ",
    description: "各キャンパスの詳細なマップと施設情報",
    color: "var(--navy)",
  },
  {
    icon: FileText,
    title: "各種申請",
    description: "サークル活動に必要な各種申請手続き",
    color: "var(--navy-light)",
  },
  {
    icon: Users,
    title: "サークル登録",
    description: "新規サークルの登録申請はこちらから",
    color: "var(--navy)",
  },
  {
    icon: Mail,
    title: "お問い合わせ",
    description: "学友会へのご質問・ご相談を受け付けています",
    color: "var(--navy-light)",
  },
];

export function QuickAccess() {
  return (
    <section id="クイックアクセス" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/5 text-sm text-black/60">
            Quick Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">クイックアクセス</h2>
          <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
            よく使うサービスに素早くアクセス
          </p>
        </div>

        {/* サービスグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                className="group p-6 sm:p-8 bg-white rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:shadow-lg hover:-translate-y-1 text-left"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* すべて見るボタン */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white border border-black/10 text-black hover:bg-black/5 transition-all">
            すべてのサービスを見る
          </button>
        </div>
      </div>
    </section>
  );
}