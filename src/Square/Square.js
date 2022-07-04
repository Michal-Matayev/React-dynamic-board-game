import "./style.css";

import React, { Component } from 'react';
// import "./style.css";
// import axios from 'axios';
import { useEffect, useState, useContext } from "react";

export default function Square(props) {
  
  
  console.log(props);
  const { col, row } = props;
  console.log();
  console.log(col+" + "+row+"="+col+row);
  // const col=props.col
  console.log(col);
  useEffect(() => {


  }, []);




  return (
   
<div className={`square  ${(parseInt(col)+parseInt(row)) %2==0? "blackColor " :"whiteColor "}`}>
<div className={`  ${(parseInt(col)+parseInt(row)) %2==0? " player-r" :" player-b"}`}></div>

</div>

  );

}





