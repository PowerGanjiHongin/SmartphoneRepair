"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "#philosophy", label: "철학" },
  { href: "#location", label: "오시는길" },
  { href: "#recipt", label: "수리접수" },
  { href: "#pickup", label: "택배접수" },
  { href: "#reviews", label: "후기" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 메인 페이지 이동 및 스크롤 핸들러 (이전 이슈 해결)
  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // 메인이 아닐 때는 preventDefault가 실행되지 않고 정상적으로 "/" 경로로 넘어갑니다.
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={handleBrandClick}>
          <span className="brand-mark">
            <Image src="/logo-icon.png" alt="" width={22} height={27} />
          </span>
          <span className="brand-text">
            <span className="kr">아이폰 아이패드 맥북 전문수리점</span>
            <span className="en">SMARTPHONE REPAIR EXPERTS</span>
          </span>
        </Link>

        <nav className="main-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <a href="https://talk.naver.com/profile/wlm83s7" className="btn-reserve">
            수리 예약
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <button className="nav-toggle" aria-label="메뉴 열기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}