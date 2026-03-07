import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  about: [
    { label: "学友会について", href: "#" },
    { label: "組織図", href: "#" },
    { label: "役員紹介", href: "#" },
    { label: "活動報告", href: "#" },
  ],
  support: [
    { label: "よくある質問", href: "#" },
    { label: "お問い合わせ", href: "#" },
    { label: "施設予約ガイド", href: "#" },
    { label: "物品貸出ガイド", href: "#" },
  ],
  legal: [
    { label: "学友会規約", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約", href: "#" },
    { label: "サイトマップ", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* ブランド情報 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={"学友会アイコン.png"}
                alt="学友会ロゴ"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div>
                <div className="text-base">東京理科大学</div>
                <div className="text-sm text-white/60">学友会</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              学生の、学生による、
              <br />
              学生のための組織
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4" />
                <span>gakuyukai@tus.ac.jp</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>東京都新宿区神楽坂1-3</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-white/40">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2026 Tokyo University of Science Student Association. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
