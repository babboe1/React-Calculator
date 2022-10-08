import React, { useContext } from 'react';
import Context from '../../ContextApi/Context';

const CalcButton = (props) => {
   const context = useContext(Context);
   context.btnClickHandler = (e) => {
      e.preventDefault();
      if ('%' === props.text) {
         context.operation += props.text;
         context.setScreen();
      }else if (props.text === 'AC') {
         context.operation = '';
         context.clearScreen();
      } else if (props.text === '⌫') {
         context.operation = context.operation.slice(0, -1);
         context.setScreen();
      }
   };

   return (
      <button
         onClick={context.btnClickHandler}
         className={`button ${props.class}`}
      >
         {props.text}
      </button>
   );
};

export default CalcButton;
