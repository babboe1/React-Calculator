import React, {useContext} from 'react';
import Context from '../../ContextApi/Context';

const CalcInput = ( props ) => {
   const context = useContext( Context );
   context.inputClickHandler = ( e ) => {
      
      context.operation += e.target.value;
      context.setScreen();
      context.setResult();
      if ( [ '+', '-', '/', '*' ].includes( e.target.value ) ) {
      } 
   };
   return (
      <input
         type="button"
         className={`button ${props.class}`}
         value={props.text}
         onClick={context.inputClickHandler}
      />
   );
};

export default CalcInput;
