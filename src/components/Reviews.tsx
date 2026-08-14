import ReviewMarquee from "./ReviewMarquee";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-head reveal">
        <span className="tag">고객 후기</span>
        <h2>
          숫자가 증명하는
          <br />
          <span className="orange">스마트폰 전문수리점</span>의 가치
        </h2>
      </div>

      <div className="rating-row reveal">
        <span className="rating-num">4.9</span>
        <div className="rating-stars">
          <span className="stars">★★★★★</span>
          <small>네이버 플레이스 영수증 리뷰 기준</small>
        </div>
      </div>

      <div className="naver-box reveal">
        <p>
          <b>아래 후기는 실제 방문 고객 후기 예시입니다.</b>
          <br />
          더 많은 후기는 지점별 네이버 플레이스에서 확인하실 수 있어요.
        </p>
        <a href="https://map.naver.com/p/entry/place/2034841822?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608121229%26locale%3Dko%26svcName%3Dmap_pcv5%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608141023%26locale%3Dko%26svcName%3Dmap_pcv5" className="btn-naver">
          <span className="n-badge">N</span> 지점별 플레이스에서 후기 더 보기
        </a>
      </div>
      <div style={{ marginTop: "40px" }}>
        <ReviewMarquee />
      </div>
    </section>
  );
}
