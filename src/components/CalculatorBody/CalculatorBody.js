import React, { useState, useContext } from 'react';
import CalcButtons from '../CalcButtons/CalcButtons';
import CalcScreen from '../CalcScreen/CalcScreen';
import Context from '../ContextApi/Context';

const CalculatorBody = () => {
   const context = useContext(Context);
   const [result, setResult] = useState(0);
   const [operation, setOperation] = useState('0');

   const setScreenHandler = () => {
      setOperation(context.operation);
   };
   const setResultHandler = () => {
      // eslint-disable-next-line no-eval
      context.result = eval( context.operation );
      setResult(context.result);
   };

   const clearScreenHandler = () => {
      setOperation('0');
      setResult(0);
   }

   context.setScreen = setScreenHandler;
   context.setResult = setResultHandler;
   context.clearScreen = clearScreenHandler;
   return (
      <form className="calc-body">
         <CalcScreen operation={operation} result={result} />
         <CalcButtons />
      </form>
   );
};

export default CalculatorBody;
