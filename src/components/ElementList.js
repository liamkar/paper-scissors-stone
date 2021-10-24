import React from "react";
import { ELEMENTS } from './constants'
import icons from './Icons'

const ElementList = ( {onClick} ) => {
  return (
    <div>
            {Object.keys(ELEMENTS).map(element => (        
                <button key={ELEMENTS[element]} onClick={() => onClick(ELEMENTS[element])}><img src={icons[element]} alt={element} title={element} style={{width:'25px', height:'25px'}}/></button>
            ))}  
    </div>
  );
};

export default ElementList;
