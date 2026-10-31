"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const HERO_BUTTONS = [
  { label: "아이폰 수리관련", icon: "📱", href: "/iphone-repair", colorKey: "purple" },
  { label: "패드 수리관련", icon: "📲", href: "/ipad-repair", colorKey: "pink" },
  { label: "맥북 수리관련", icon: "💻", href: "/macbook-repair", colorKey: "slate" },
  { label: "수리점 소개", icon: "🏪", href: "#philosophy", colorKey: "blue" },
  { label: "찾아오시는길", icon: "🗺️", href: "#location", colorKey: "amber" },
  { label: "수리후기", icon: "⭐", href: "#reviews", colorKey: "green" },
];

export default function HeroButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollUpDistance = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // 1. 전체 스크롤 가능한 최대 높이 계산
      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // 2. 현재 스크롤 위치를 퍼센트(0~100)로 변환
      const scrollPercent =
        totalScrollHeight > 0 ? (currentScrollY / totalScrollHeight) * 100 : 0;

      const delta = currentScrollY - lastScrollY.current;

      // 3. 최상단 근처 (상위 5% 이내)에서는 무조건 표시

        if (delta > 0) {
          // 아래로 스크롤 중: 숨기고 위로 누적 거리 초기화
          setIsVisible(false);
          scrollUpDistance.current = 0;
        } else if (delta < 0) {
          // 위로 스크롤 중: 누적 거리 합산
          scrollUpDistance.current += Math.abs(delta);

          // 4. 💡 전체 페이지 높이의 10%에 해당하는 픽셀 값을 계산
          const thresholdDistance = totalScrollHeight * 0.10;

          // 위로 누적해서 올린 거리가 전체 높이의 10% 이상이 되면 다시 표시
          if (scrollUpDistance.current >= thresholdDistance) {
            setIsVisible(true);
          }
        }
      

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(-50%, 0)" : "translate(-50%, 30px)",
        pointerEvents: isVisible ? "auto" : "none",
        visibility: isVisible ? "visible" : "hidden",
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
            tabIndex={isVisible ? 0 : -1}
          >
            <span className="hero-button-icon">{btn.icon}</span>
            <span className="hero-button-label">{btn.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}