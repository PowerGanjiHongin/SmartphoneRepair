
import BlogSection_ipad from "@/src/components/BlogSection_ipad";
import Link from "next/link";

export default function IphoneRepairPage() {
  const REPAIR_SERVICES = [
    {
      icon: "📱",
      title: "액정 / 파손 수리",
      desc: "정품 추출 및 고품질 패널 사용으로 터치감, 선명한 화질, TrueTone 기능을 완벽하게 유지합니다.",
      tag: "당일 15분 완성",
    },
    {
      icon: "🔋",
      title: "정품 배터리 교체",
      desc: "광속 방전, 발열, 스웰링 현상을 해결해 드립니다. 성능 상태 100% 최적화 세팅을 진행합니다.",
      tag: "당일 10분 완성",
    },
    {
      icon: "💻",
      title: "메인보드 / 정밀 수리",
      desc: "전원 불량, 무한 사과, 침수 타격, 충전 인식 불량 등 난수리를 첨단 장비로 정밀 수리합니다.",
      tag: "전문가 직수리",
    },
    {
      icon: "📸",
      title: "카메라 / 후면 유리 교체",
      desc: "카메라 초점 불량, 렌즈 파손, 후면 백글래스 파손을 깔끔하고 유격 없이 원상복구합니다.",
      tag: "외관 완벽 복원",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "60px 20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* 1. 상단 네비게이션 & 헤더 */}
        <div>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#64748b",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← 메인 페이지로 돌아가기
          </Link>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "36px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            }}
          >
            <span
              style={{
                color: "#8b5cf6",
                fontWeight: "800",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              iPhone Repair Service
            </span>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#0f172a",
                margin: "8px 0 12px 0",
              }}
            >
              아이폰 전문 수리 센터
            </h1>
            <p
              style={{
                color: "#475569",
                fontSize: "16px",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              투명한 부품 검수와 오랜 노하우로 최상의 수리 품질을 약속드립니다.
              <br />
              모든 수리는 데이터 손실 없이 **당일 즉시 수리**를 원칙으로 합니다.
            </p>
          </div>
        </div>

        {/* 2. 수리 서비스 카드 그리드 (2x2) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {REPAIR_SERVICES.map((service, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "36px" }}>{service.icon}</span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#7c3aed",
                      backgroundColor: "#f3e8ff",
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#1e293b",
                    margin: "0 0 8px 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. 아이폰 수리 관련 블로그 최신글 영역 추가 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
          }}
        >
          
        </div>

        {/* 4. 하단 실시간 상담 & 예약 안내 배너 */}
        <div
          style={{
            backgroundColor: "#0f172a",
            borderRadius: "20px",
            padding: "32px",
            color: "#ffffff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 6px 0" }}>
              내 아이폰 수리 견적이 궁금하신가요?
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
              기종과 고장 증상을 알려주시면 즉시 정확한 견적을 안내해 드립니다.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://talk.naver.com/profile/wlm83s7"
              style={{
                backgroundColor: "#10b981",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "12px",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              📞 전화 문의하기
            </a>
          </div>
          
        </div>
        <BlogSection_ipad />
      </div>
    </main>
  );
}