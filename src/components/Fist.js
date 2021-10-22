import React from "react";
import fist from '../assets/icons8-fist-48.png'
import Img from './Img'

const Fist = ({mirror}) => {  

  return (
    <Img mirror={mirror} src={fist} alt="fist"/>
  );
};

export default Fist;
