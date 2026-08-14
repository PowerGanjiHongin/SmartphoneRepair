"use client";

import { useEffect } from "react";
import Hero from "@/src/components/Hero";
import BrandStory from "@/src/components/BrandStory";
import Trust from "@/src/components/Trust";
import Reviews from "@/src/components/Reviews";
import Location from "@/src/components/Location";
import Recipt from "../components/Recipt";
import BlogSection from "../components/BlogSection";

export default function Home() {
  // 스크롤 리빌: .reveal 요소가 화면에 들어오면 .in 클래스를 붙여줍니다
  // (Hero/BrandStory/Trust/Reviews로 나뉘어도 마운트 후 DOM 전체를 훑기 때문에 그대로 동작합니다)
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
