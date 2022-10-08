import React from 'react';
import './App.css';
import CalculatorBody from './components/CalculatorBody/CalculatorBody';
import Context from './components/ContextApi/Context';
import Layout from './components/Layout/Layout';

const App = () => {
   const contextValue = {
      operation: '',
      result: 0,
      setScreen: () => {},
      setResult: () => {},
      clearScreen: () => {},
   };
   return (
      <Context.Provider value={contextValue}>
         <Layout>
            <h2 className="h2--text">My React Calculator</h2>
            <CalculatorBody />
         </Layout>
         <div class="attribution">
            Coded by <a href="https://github.com/babboe1">babboeCodes</a>
         </div>
      </Context.Provider>
   );
};

export default App;
