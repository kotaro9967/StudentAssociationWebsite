import { Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // スクロール判定を追加

  // スクロールを検知する処理
  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールしたら true にする（少し遅めに出現させるのがエモいです）
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["ホーム", "クイックアクセス", "サークル", "お知らせ"];

  return (
    <header
      // 💡 isScrolledがfalse(一番上)なら画面の上に隠す、true(スクロールした)なら定位置に戻す
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 transition-all duration-500 ease-out ${
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* ロゴ */}
          <div className="shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/StudentAssociationWebsite/学友会アイコン.png"
                alt="学友会ロゴ"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                {/* 🌟 ここに font-serif を追加して、全体との統一感を出しています！ */}
                <div
                  className="text-base sm:text-xl tracking-tight font-medium font-serif"
                  style={{ color: "var(--navy)" }}
                >
                  東京理科大学 学友会
                </div>
                <div className="text-xs text-black/40 -mt-0.5 hidden sm:block">
                  Student Association
                </div>
              </div>
            </a>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-3 lg:px-4 py-2 text-sm text-black/70 hover:text-black transition-colors rounded-lg hover:bg-black/5"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* 検索・入会フォームボタン */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 検索ボタン */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
              aria-label="検索"
            >
              <Search size={20} />
            </button>

            <Button
              className="hidden sm:inline-flex px-4 lg:px-6 py-2 text-sm rounded-full text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "var(--navy)" }}
            >
              学友会入会フォーム
            </Button>
            <Button
              className="sm:hidden px-4 py-2 text-xs rounded-full text-white"
              style={{ backgroundColor: "var(--navy)" }}
            >
              入会
            </Button>

            {/* モバイルメニューボタン */}
            <button
              className="md:hidden p-2 text-black/70 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 検索バー */}
        {isSearchOpen && (
          <div className="py-4 border-t border-black/5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
              <input
                type="text"
                placeholder="サークル、イベント、お知らせを検索..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0"
                style={
                  { "--tw-ring-color": "var(--navy)" } as React.CSSProperties
                }
                autoFocus
              />
            </div>
          </div>
        )}

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-black/5">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="px-4 py-3 text-sm text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
