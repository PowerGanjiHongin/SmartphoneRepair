"use client";

import React from "react";

export default function Location() {
  const LOCATION_INFO = {
    storeName: "스마트폰 수리 전문점",
    address: "충청남도 천안시 동남구 고재 10길 3, 2층",
    phone: "010-0000-0000",
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357b29e933050c77%3A0x8a3409cf009b1cdf!2z7LKc7JWIIOyKpOuniO2KuO2PsCDsoITrrLjsiJjrpqzsoJA!5e0!3m2!1sko!2skr!4v1786505168197!5m2!1sko!2skr",
    naverMapUrl: "https://map.naver.com/p/entry/place/2034841822?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608121229%26locale%3Dko%26svcName%3Dmap_pcv5",
    kakaoMapUrl: "https://place.map.kakao.com/1045781673",
    googleMapUrl: "https://www.google.com/maps/place/%EC%B2%9C%EC%95%88+%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0+%EC%A0%84%EB%AC%B8%EC%88%98%EB%A6%AC%EC%A0%90/data=!4m2!3m1!1s0x0:0x8a3409cf009b1cdf?sa=X&ved=1t:2428&ictx=111",
    naverTalkURL: "https://talk.naver.com/profile/wlm83s7",
  };

  return (
    <section
      id="location"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 1. 상단 제목 (가운데 정렬) */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            LOCATION & CONTACT
          </span>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#0f172a",
              margin: "8px 0 4px 0",
            }}
          >
            찾아오시는 길
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
            {LOCATION_INFO.address}
          </p>
        </div>

        {/* 2. 중앙 컨테이너 (좌: 지도 / 우: 정보 및 버튼) */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* 좌측: 지도 약도 */}
          <div
            style={{
              minHeight: "380px",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <iframe
              title="네이버 지도 약도"
              src={LOCATION_INFO.mapIframeUrl}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "380px",
                border: "none",
              }}
              loading="lazy"
            />
          </div>

          {/* 우측: 매장정보 & URL 버튼 패널 */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "28px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  margin: "0 0 6px 0",
                }}
              >
                {LOCATION_INFO.storeName}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                원하시는 지도 앱 서비스로 길찾기 및 전화 상담을 바로 연결해 보세요.
              </p>
            </div>

            {/* 버튼 리스트 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* 전화 상담 연결 */}
              <a
                href={LOCATION_INFO.naverTalkURL}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                <span>💬 톡톡 상담 연결</span>
                <span
                  style={{
                    fontSize: "11px",
                    backgroundColor: "rgba(0,0,0,0.15)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  바로 통화
                </span>
              </a>

              {/* 네이버 지도 URL */}
              <a
                href={LOCATION_INFO.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#03C75A",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                <span>N 네이버 지도로 보기</span>
                <span
                  style={{
                    fontSize: "11px",
                    backgroundColor: "rgba(0,0,0,0.15)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  URL 연결
                </span>
              </a>

              {/* 카카오맵 URL */}
              <a
                href={LOCATION_INFO.kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#FEE500",
                  color: "#191919",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                <span>🟡 카카오맵으로 보기</span>
                <span
                  style={{
                    fontSize: "11px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  URL 연결
                </span>
              </a>

              {/* 구글 맵스 URL */}
              <a
                href={LOCATION_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#1e293b",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                <span>📍 구글 맵스로 보기</span>
                <span
                  style={{
                    fontSize: "11px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  URL 연결
                </span>
              </a>
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                textAlign: "center",
                margin: 0,
              }}
            >
              방문 전 전화 문의를 주시면 더 빠르게 안내받으실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}