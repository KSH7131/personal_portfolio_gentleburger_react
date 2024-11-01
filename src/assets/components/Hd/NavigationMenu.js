// NavigationMenu.js
import React from 'react';

const NavigationMenu = ({ navData }) => {
  return (
    <nav id="navmenu">
      <ul>
        {navData.map((item, index) => (
          <li key={index}>
            <a href={item.d1href} target={item.target}>
              {item.d1text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
