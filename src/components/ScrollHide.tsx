'use client';

import { useState, useEffect, useRef } from 'react';
import HeroButtons from './HeroButtons';

export default function IntersectionHideSection() {
  const [isVisible, setIsVisible] = useState(true);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 특정 지점(triggerRef)이 화면에 보이는지 감시합니다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // trigger 영역이 지워지거나 위로 넘어가면 사라지게 함
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% 이상 보일 때 visible
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* 1. 최상단에 센서(Trigger) 역할을 하는 아주 작은 빈 감지기 배치 */}
      <div ref={triggerRef} className="h-1 w-full" />

      {/* 2. 감지기가 스크롤되어 사라지면 이 섹션도 Fade Out */}
      <div
        className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-purple-600 text-white p-4 rounded-xl">
          <HeroButtons />
        </div>
      </div>
    </div>
  );
}