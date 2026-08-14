"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { text: "🛠️  체험단 상시 모집 — 배터리 무상 · 수리비 페이백!", bg: "var(--orange)" },
  {
    text: "💬  카카오톡 채널 추가 시 ",
    accent: "5,000원 할인!",
    bg: "var(--yellow)",
  },
  { text: "📦  전국 어디서나 택배 접수 — 왕복 배송비 무료!", bg: "var(--orange)" },
];

export default function AnnounceBar() {
  const [idx, setIdx] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => (prev + 1) % SLIDES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const bg = SLIDES[idx].bg;
    const match = bg.match(/^var\((--[\w-]+)\)$/);
    el.style.backgroundColor = match
      ? getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim()
      : bg;
  }, [idx]);

  return (
    <div className="announce-bar" ref={barRef}>
      {SLIDES.map((slide, i) => (
        <span key={i} className={`slide${i === idx ? " active" : ""}`}>
          {slide.text}
          {slide.accent && <span className="accent">{slide.accent}</span>}
        </span>
      ))}
    </div>
  );
}
