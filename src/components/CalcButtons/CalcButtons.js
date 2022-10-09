import React, {useContext} from 'react';
import Context from '../ContextApi/Context';
import CalcButton from './CalcButton/CalcButton';
import CalcInput from './CalcInput/CalcInput';

const CalcButtons = ( props ) => {
   const asset = {
      value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      operator: ['+', '*', '-', '/', '.'],
      text: ['AC', '%', '≠', '⌫'],
   };
   const context = useContext( Context );
   
   return (
      <React.Fragment>
         <div className="calc-button-row">
            <CalcButton class="c" text={asset.text[0]} />
            <CalcButton class="l" text={asset.text[1]} />
            <CalcButton class="l" text={asset.text[2]} />
            <CalcInput class="l" text={asset.operator[0]} />
         </div>
         <div className="calc-button-row">
            <CalcInput class="" text={asset.value[7]} />
            <CalcInput class="" text={asset.value[8]} />
            <CalcInput class="" text={asset.value[9]} />
            <CalcInput class="l" text={asset.operator[1]} />
         </div>
         <div className="calc-button-row">
            <CalcInput class="" text={asset.value[4]} />
            <CalcInput class="" text={asset.value[5]} />
            <CalcInput class="" text={asset.value[6]} />
            <CalcInput class="l" text={asset.operator[2]} />
         </div>
         <div className="calc-button-row">
            <CalcInput class="" text={asset.value[1]} />
            <CalcInput class="" text={asset.value[2]} />
            <CalcInput class="" text={asset.value[3]} />
            <CalcInput class="l" text={asset.operator[3]} />
         </div>
         <div className="calc-button-row">
            <CalcInput class="" text={asset.operator[4]} />
            <CalcInput class="" text={asset.value[0]} />
            <CalcButton class="" text={asset.text[3]} />
            <input
               type="button"
               className="button l"
               value="="
               onClick= {context.setFinal}
            />
         </div>
      </React.Fragment>
   );
};

export default CalcButtons;
