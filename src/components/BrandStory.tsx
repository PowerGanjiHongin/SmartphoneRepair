import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="story" id="philosophy">
      <div className="story-inner reveal">
        <span className="tag">브랜드 이야기</span>
        <h2
          style={{
            fontSize: "clamp(26px,4vw,40px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.35,
          }}
        >
          이름 대신 <span style={{ color: "var(--orange)" }}>태도</span>를 걸었습니다
        </h2>
        <div className="story-mark">
          <Image src="/logo-icon.png" alt="브랜드 아이콘" width={108} height={132} />
        </div>
        <blockquote>
          휴대폰을 고치는 손이 아니라,
          <br />
          <em>손님의 하루</em>를 고치는 손이고 싶었습니다.
        </blockquote>
        <blockquote>
          고장 난 기기 때문에 속상하셨겠지만, 나가실 때는
          <br />
          말끔히 고쳐진 기기와 함께 홀가분한 마음을 안고 가셨으면 합니다.
        </blockquote>
      </div>
    </section>
  );
}
