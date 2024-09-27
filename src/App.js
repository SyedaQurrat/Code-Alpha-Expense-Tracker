import React, { useState } from 'react';
import './App.css';
import { Typography, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/newTransactions';
import ExpenseList from './components/ExpenseList'; 

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  
  const handleTransaction = (name, amount, type) => {
    const transaction = {
      name,
      amount,
      type,
      date: new Date().toLocaleDateString() 
    };
    
    setTransactions(prev => [...prev, transaction]);
    
    if (type === 'debit') {
      setIncome(prev => prev + amount);
    } else if (type === 'credit') {
      setExpense(prev => prev + amount);
    }
  };

  return (
    <Box className="App">
      <Typography variant="h4">Expense Tracker</Typography>
      <Balance balance={income - expense} />
      <ExpenseCard income={income} expense={expense} />
      <NewTransactions onTransaction={handleTransaction} />
      <ExpenseList transactions={transactions} /> 
    </Box>
  );
}

export default App;




