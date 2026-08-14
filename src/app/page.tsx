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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/repair-receipt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // 서버 응답 상태 파악 디버깅
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      alert(`접수 실패 (${res.status}): ${errorData.error || "서버 오류가 발생했습니다."}`);
      return;
    }

    alert("접수증이 성공적으로 제출되었습니다! 확인 후 신속히 연락드리겠습니다.");
    setFormData({ model: "", symptom: "", request: "", phone: "" });

  } catch (err: any) {
    // 실제 catch 에러 메시지를 팝업에 출력하여 원인 파악
    console.error("전송 에러:", err);
    alert(`네트워크/전송 오류: ${err.message || "서버에 연결할 수 없습니다."}`);
  } finally {
    setIsSubmitting(false);
  }
};
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