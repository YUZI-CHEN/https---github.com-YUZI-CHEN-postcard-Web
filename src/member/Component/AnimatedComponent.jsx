  {/* npm i gsap */}
import gsap from "gsap";

import { useEffect, useRef } from "react";

export default function AnimatedComponent() {
  const elementRef = useRef(null);
  useEffect(() => {
    // 在組件載入時執行動畫
  gsap.to(elementRef.current,  {
        duration: 1,
        top: "94px",
        opacity: 1,
        left: "40px",
        scale: 1,
      
        ease: "bounce.out", // 使用 Bounce 緩動效果
    });
  }, []);
  return (
    <div>
      {/* 勾勾動畫  */}
      <div id="ck-animation"  >
        <img className="finish-approved" src="./images/success-stamp.png" ref={elementRef} />

      </div>
    </div>

  );
}