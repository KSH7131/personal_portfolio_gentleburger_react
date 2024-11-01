// App.js
import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Card from './Card';
import MainVisual from './MainVisual';

// navidata 배열 정의
const navidata = [
  {
    d1text: "브랜드 소개",
    d1href: "#intro",
    __target: ""
  },
  {
    d1text: "메뉴 소개",
    d1href: "#menu",
    target: ""
  },
  {
    d1text: "브랜드 경쟁력",
    d1href: "#Compettion",
    target: ""
  },
  {
    d1text: "브랜드 만족도",
    d1href: "#satisfaction",
    __target: ""
  },
  {
    d1text: "매장안내",
    d1href: "#info",
    target: ""
  },
  {
    d1text: "가맹문의",
    d1href: "#inquiry",
    target: ""
  }
];

const App = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  return (
    <div>
      <button className={`mobile-nav-toggle ${isMobileNavActive ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}>
        Toggle Menu
      </button>
      <NavigationMenu navData={navidata} />
      <div className={`mobile-nav-active ${isMobileNavActive ? 'active' : ''}`}>
        <MainVisual />
        <Card onClick={() => console.log('Card toggled')}>Card Content</Card>
      </div>
    </div>
  );
};

export default App;
