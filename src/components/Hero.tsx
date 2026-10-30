import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="hero hero-split" id="hero">
      <div className="hero-half hero-half-left">
        <div className="hero-half-content">
          <span className="hero-half-eyebrow">TRUSTED · SAME-DAY</span>
          <h2>
            신뢰있는
            <br />
            당일 수리
          </h2>
        </div>
      </div>

      <div className="hero-half hero-half-right">
        <div className="hero-half-content">
          <span className="hero-half-eyebrow">GENUINE STOCK</span>
          <h2>
            정품재고
            <br />
            실시간 보유
          </h2>
        </div>
      </div>

      {/* 히어로 섹션 중앙 안내 문구 및 전화번호 */}
      <div className="hero-center-contact">
        <span className="contact-badge">상담 및 점검 무료</span>
        <a href="tel:01046151052" className="contact-number">
          010-4615-1052
        </a>
      </div>

      {/* 스크롤에 따라 감춰지고 나타나는 버튼 오버레이 */}
      <HeroButtons />

      <div className="scroll-cue" />
    </section>
  );
}