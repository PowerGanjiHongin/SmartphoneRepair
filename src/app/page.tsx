"use client";

import { useEffect } from "react";
// 모든 components 경로를 uniform하게 맞춰줍니다!
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Recipt from "@/components/Recipt";

export default function Home() {
  // 스크롤 리빌 애니메이션
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Recipt />
      <Location />
      <BrandStory />
      <Trust />
      <Reviews />
    </>
  );
}