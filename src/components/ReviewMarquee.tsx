"use client";

import React from "react";

// 네이버 플레이스에서 가져온 리뷰 데이터 예시
const REVIEWS = [
  { id: 1, author: "김*철", text: "사장님이 너무 친절하시고 아이폰 액정 수리 15분 만에 깔끔하게 끝났습니다!", rating: "5.0", date: "네이버 예약 방문" },
  { id: 2, author: "이*진", text: "다른 곳에서는 메인보드 교체해야 된다고 했는데 여기서 당일 수리받았습니다. 감동!", rating: "5.0", date: "네이버 영수증 리뷰" },
  { id: 3, author: "박*훈", text: "정품 배터리로 교체해주시고 내부 먼지 청소까지 서비스로 해주셨어요.", rating: "5.0", date: "네이버 예약 방문" },
  { id: 4, author: "최*영", text: "가격 정찰제라 신뢰가 가고 제 앞에서 직접 수리 과정을 보여주셔서 안심되었습니다.", rating: "5.0", date: "네이버 영수증 리뷰" },
];

export default function ReviewMarquee() {
  // 무한 스크롤이 끊기지 않도록 배열을 2배로 늘려줍니다.
  const doubledReviews = [...REVIEWS, ...REVIEWS];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {doubledReviews.map((review, index) => (
          <div key={`${review.id}-${index}`} className="review-card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>{review.author}</span>
              <span style={{ color: "#ffc02e", fontSize: "13px" }}>★ {review.rating}</span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: "1.5", margin: "0 0 12px 0" }}>
              "{review.text}"
            </p>
            <span style={{ fontSize: "11px", color: "#03c75a", fontWeight: "600" }}>
              N {review.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}