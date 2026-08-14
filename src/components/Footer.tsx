import Image from "next/image";
import HeroButtons from "./HeroButtons";

export default function Footer() {
  return (
    <footer id="location">
      
      <div className="footer-top">
        <div className="f-brand">
          <a href="#top" className="brand">
            <span className="brand-mark">
              <Image src="/logo-icon.png" alt="" width={22} height={27} />
            </span>
            <span className="brand-text">
              <span className="kr">스마트폰 전문수리점</span>
              <span className="en">SMARTPHONE REPAIR EXPERTS</span>
            </span>
          </a>
          <p>
            속지 않는다는 안심을 파는 수리 브랜드. 사진으로 남기고, 부품은 직접
            검수하고, 과장하지 않습니다.
          </p>
        </div>

        <div className="f-col">
          <h4>바로가기</h4>
          <ul>
            <li><a href="#philosophy">철학</a></li>
            <li><a href="#service">서비스</a></li>
            <li><a href="#trust">수리 견적</a></li>
            <li><a href="#reviews">후기</a></li>
          </ul>
        </div>

        <div className="f-col">
          <h4>고객 지원</h4>
          <ul>
            <li><a href="#pickup">택배접수 안내</a></li>
            <li><a href="#reserve">수리 예약하기</a></li>
            <li><a href="#">카카오톡 채널</a></li>
            <li><a href="#">자주 묻는 질문</a></li>
          </ul>
        </div>


      </div>

      <div className="footer-bottom">
        <div className="wrap">
          <span>© 2026 스마트폰 전문수리점. All rights reserved.</span>
          <span>상호명 · 사업자등록번호 · 통신판매업신고번호 등은 실제 정보로 교체해 주세요.</span>
        </div>
      </div>
    </footer>
  );
}
