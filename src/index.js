import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';


import Hd from './assets/components/Hd.js'
import Main from './assets/components/Main.js'
import Ft from './assets/components/Ft.js'

const navData = [
  { d1href: '/link1', d1text: 'Link 1' },
  { d1href: '/link2', d1text: 'Link 2' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Hd></Hd>
  <Main></Main>
  <Ft></Ft>
</>
);