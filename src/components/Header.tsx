import { Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["ホーム", "クイックアクセス", "サークル", "お知らせ"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 transition-all duration-500 ease-out ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img
                src={"学友会アイコン.png"}
                alt="学友会ロゴ"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                {/* 🌟 ここに font-serif を追加！ */}
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
          {/* ... 以下、元のHeaderのコード（ナビゲーションやボタン等）をそのまま配置 ... */}
        </div>
      </div>
    </header>
  );
}
