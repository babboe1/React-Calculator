import React from 'react';

const CalcScreen = (props) => {

   return (
      <div className="calc-screen">
         <div className="calc-operation">{ props.operation}</div>
         <div className="calc-typed">
            <span className="calc-typed__text">{ props.result}</span>
            <span className="blink-me">_</span>
         </div>
      </div>
   );
};

export default CalcScreen;