import React, { useState } from 'react';
import About from './About/About';
import Compettion from './Compettion/Compettion';
import FranchiseInquiry from './FranchiseInquiry/FranchiseInquiry';
import Mainswiper from './MainSwiper/MainSwiper';
import Map from './Map/Map';
import Menu from './Menu/Menu';
import Quickbutton from './Quickbutton/Quickbutton';


function Main() {
  return (
    <>
    <Mainswiper></Mainswiper>
    <Menu></Menu>
    <About></About>
    <Compettion></Compettion>
    <Map></Map>
    <FranchiseInquiry></FranchiseInquiry>
    <Quickbutton></Quickbutton>
    </>
  )
}

export default Main
