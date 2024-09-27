import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const NewTransactions = ({ onTransaction }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const [name, setName] = useState('');

    const handleAddTransaction = () => {
        if (amount && name) {
            onTransaction(name, Number(amount), type);
            setAmount('');
            setName('');
        }
    };

    return (
        <Box>
            <Typography variant='h5'>New Transaction</Typography>
            <TextField 
                label="Transaction Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth 
                margin="normal"
            />
            <TextField 
                label="Amount" 
                type="number"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                fullWidth 
                margin="normal"
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
            </select>
            <Button onClick={handleAddTransaction}>Add Transaction</Button>
        </Box>
    );
};

export default NewTransactions;



