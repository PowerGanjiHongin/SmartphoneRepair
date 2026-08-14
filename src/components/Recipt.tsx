"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogSection from "@/src/components/BlogSection";

export default function IphoneRepairPage() {
  // 접수증 폼 상태
  const [formData, setFormData] = useState({
    model: "",
    symptom: "",
    request: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 입력 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 접수 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 💡 API Route로 데이터 전송 (이메일/문자 발송)
      const res = await fetch("/api/repair-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("접수증이 성공적으로 제출되었습니다! 빠른 시간 내에 연락드리겠습니다.");
        setFormData({ model: "", symptom: "", request: "", phone: "" });
      } else {
        alert("접수 중 오류가 발생했습니다. 전화 문의를 이용해 주세요.");
      }
    } catch (err) {
      // API 세팅 전 테스트용 알림
      alert(`[접수 완료 테스트]\n기종: ${formData.model}\n연락처: ${formData.phone}\n접수가 완료되었습니다.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const REPAIR_SERVICES = [
    { icon: "📱", title: "액정 / 파손 수리", tag: "15분 완성" },
    { icon: "🔋", title: "정품 배터리 교체", tag: "10분 완성" },
    { icon: "💻", title: "메인보드 정밀 수리", tag: "당일 수리" },
    { icon: "📸", title: "카메라 / 후면 유리", tag: "외관 복원" },
  ];

  return (
    <div id="recipt">
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
        padding: "50px 20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // 👈 세로 중앙 정렬 핵심 추가!
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* 메인 레이아웃 (좌: 접수증 폼 / 우: 안내 카드) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* [좌측] 온라인 접수증 폼 */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "28px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                borderBottom: "2px solid #f1f5f9",
                paddingBottom: "12px",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#8b5cf6", fontWeight: "bold" }}>
                ONLINE RECEIPT
              </span>
              <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#1e293b", margin: 0 }}>
                수리 접수증 작성
              </h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* 1. 핸드폰 기종 */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold", color: "#334155", marginBottom: "6px" }}>
                  핸드폰 기종 <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  name="model"
                  required
                  placeholder="예: 아이폰 14 프로, 아이폰 13, 맥북 프로 16 등"
                  value={formData.model}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              {/* 2. 고장 증상 (type을 text로 수정함) */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold", color: "#334155", marginBottom: "6px" }}>
                  고장 증상 <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  name="symptom"
                  required
                  placeholder="예: 액정 파손, 배터리 방전 등"
                  value={formData.symptom}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              {/* 3. 상담 가능 전화번호 */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold", color: "#334155", marginBottom: "6px" }}>
                  상담 가능 전화번호 <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              {/* 4. 기타 요청 사항 */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold", color: "#334155", marginBottom: "6px" }}>
                  기타 요청 사항
                </label>
                <textarea
                  name="request"
                  rows={3}
                  placeholder="수리 희망 시간, 세부 증상 등을 자유롭게 적어주세요."
                  value={formData.request}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: "8px",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#7c3aed",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {isSubmitting ? "접수 중..." : "✉️ 수리 접수증 제출하기"}
              </button>
            </form>
          </div>

          {/* [우측] 서비스 안내 및 빠른 통화 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#0f172a", margin: "0 0 12px 0" }}>
                전문 수리 항목
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {REPAIR_SERVICES.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px",
                      borderRadius: "10px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>
                      {s.icon} {s.title}
                    </span>
                    <span style={{ fontSize: "11px", color: "#7c3aed", fontWeight: "bold", backgroundColor: "#f3e8ff", padding: "3px 8px", borderRadius: "6px" }}>
                      {s.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 빠른 전화 상담 카드 */}
            <div
              style={{
                backgroundColor: "#0f172a",
                borderRadius: "20px",
                padding: "24px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 6px 0" }}>
                급하신 수리는 바로 통화하세요!
              </h4>
              <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "16px" }}>
                실시간 친절 상담 연결
              </p>
              <a
                href="https://talk.naver.com/profile/wlm83s7"
                style={{
                  display: "block",
                  padding: "14px",
                  borderRadius: "10px",
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                📞 바로 전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}