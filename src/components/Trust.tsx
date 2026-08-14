export default function Trust() {
  return (
    <section className="trust" id="trust">
      <div className="section-head reveal">
        <span className="tag">안심의 근거</span>
        <h2>
          &quot;믿어주세요&quot;가 아니라
          <br />
          <span className="orange">&quot;확인해보세요&quot;</span>
        </h2>
        <p>
          수리를 맡길 때 가장 불안한 건 비싼 가격이 아니라{" "}
          <b style={{ color: "rgba(255,255,255,0.75)" }}>불합리한 가격</b>입니다.
          <br />
          그렇기에 저희는 최대한 고객님이 불안하지 않게끔 최선을 다하겠습니다.
        </p>
      </div>

      <div className="trust-grid">
        <div className="trust-card reveal">
          <div className="num">01</div>
          <h3>
            모든 과정을
            <br />
            사진으로 기록합니다
          </h3>
          <p>
            분해 전 · 교체 부품 · 조립 후까지 단계마다 찍어 남깁니다.{" "}
            <b>IMEI와 수리 전후 사진</b>이 담긴 수리확인서는 카카오톡으로
            그대로 전달드립니다.
          </p>
        </div>
        <div className="trust-card reveal">
          <div className="num">02</div>
          <h3>
            부품은 저희가
            <br />
            직접 검수합니다
          </h3>
          <p>
            남이 보내준 걸 그냥 끼우지 않습니다. <b>직접 검수한 부품</b>만
            사용하고 재고를 갖추고 있어 주문 대기 없이 <b>대부분 당일에</b>{" "}
            끝납니다.
          </p>
        </div>
        <div className="trust-card reveal">
          <div className="num">03</div>
          <h3>
            무리한 수리는
            <br />
            먼저 말리는 편입니다
          </h3>
          <p>
            침수 기기의 <b>100% 복구는 약속드리지 않습니다.</b> 오래 안
            쓰실 기기라면, 굳이 비싼 수리 대신 현실적인 대안을 먼저
            안내합니다.
          </p>
        </div>
      </div>
      <div className="trust-foot reveal">
          고객님이 같은 일로 두 번 오지 않는 가게.
        <br />
          손님을 단골로 만들기보다, 지인에게 당연하게 소개할 수 있는 가게.
        <br />
        <span className="strong-line">다른 사람에게 추천해 드릴 수 있는 가게가 되겠습니다.</span>
      </div>
    </section>
  );
}
