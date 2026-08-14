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

      {/* 스크롤에 따라 감춰지고 나타나는 버튼 오버레이임 */}
      <HeroButtons />

      <div className="scroll-cue" />
    </section>
  );
}