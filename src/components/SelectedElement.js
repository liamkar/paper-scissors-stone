import React from "react";
import { ELEMENTS } from "./constants";
import icons from './Icons'


const SelectedElement = ({ selectionId }) => {  
    let element = Object.keys(ELEMENTS).find(key => ELEMENTS[key] === selectionId);

  return (
    <img src={icons[element]} alt="selection"/>
  );
};

export default SelectedElement