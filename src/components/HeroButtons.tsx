"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const HERO_BUTTONS = [
 
  { label: "아이폰 수리관련", icon: "📱", href: "/iphone-repair", colorKey: "purple" },
  { label: "패드 수리관련", icon: "📲", href: "/ipad-repair", colorKey: "pink" },
  { label: "맥북 수리관련", icon: "💻", href: "#macbook", colorKey: "slate" },
  { label: "수리점 소개", icon: "🏪", href: "#philosophy", colorKey: "blue" },
  { label: "찾아오시는길", icon: "🗺️", href: "#location", colorKey: "amber" },
  { label: "수리후기", icon: "⭐", href: "#reviews", colorKey: "green" },
];

export default function HeroButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

 useEffect(() => {
    const handleScroll = () => {
      // window.scrollY 외에도 documentElement / body 스크롤 위치를 모두 확인
      const currentScrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const delta = currentScrollY - lastScrollY.current;

      // 상단 근처에서는 항상 표시
      if (currentScrollY < 0) {
        setIsVisible(true);
      } else {
        // 스크롤을 아래로 10px 이상 내리면 숨김
        if (delta > 0) {
          setIsVisible(false);
        }
        // 스크롤을 위로 5px 이상 올리면 다시 표시
        else if (delta < -1) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // window 및 document 레벨 모두에 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        transition: "all 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(-50%, 0)" : "translate(-50%, 30px)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="hero-buttons-overlay"
    >
      
      <div className="hero-buttons-container">
        {HERO_BUTTONS.map((btn) => (
          <Link
            key={btn.label}
            href={btn.href}
            className="hero-button-card"
            data-color={btn.colorKey}
          >
            <span className="hero-button-icon">{btn.icon}</span>
            <span className="hero-button-label">{btn.label}</span>
          </Link>
          
        ))}
      </div>
    </div>
    
  );
}