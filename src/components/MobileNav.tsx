export default function MobileNav() {
  return (
    <>

      <nav className="mobile-nav">
        <a href="#top" className="active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10h14V10" />
          </svg>
          홈
        </a>
        <a href="#trust">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M14.7 6.3a4 4 0 015.6 5.6l-8 8a4 4 0 01-5.6-5.6z" />
          </svg>
          수리 견적
        </a>
        <a href="#reviews">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 4h16v12H7l-3 3z" />
          </svg>
          후기
        </a>
        <a href="#pickup">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 7v10l9 4 9-4V7" />
          </svg>
          택배접수
        </a>
        <a href="#" className="chat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M21 11.5a8.4 8.4 0 01-9 8.4A8.9 8.9 0 013 11.5 8.4 8.4 0 0112 3a8.4 8.4 0 019 8.5z" />
          </svg>
          예약하기
        </a>
      </nav>
    </>
  );
}
