import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpence} from './components/IncomeExpence';
import { Transaction } from './components/Transaction';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvider>
         <Header/>
         <div className="container">
              <Balance/>
              <IncomeExpence/>
              <Transaction/>
              <AddTransaction/>
         </div>
    </GlobalProvider>
  );
}

export default App;

