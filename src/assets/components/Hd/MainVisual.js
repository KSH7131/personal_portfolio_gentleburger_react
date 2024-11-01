import React, { useEffect, useState, useRef } from 'react';

const MainVisual = () => {
  const [paddingTop, setPaddingTop] = useState(0);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setPaddingTop(headerRef.current.offsetHeight);
      }
    };

    handleResize(); // 초기 높이 설정

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export default MainVisual;
