import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {Typography } from '@mui/material';
const ExpenseList = ({ transactions }) => {
    return (
        <Box mt={3}>
            <Typography variant='h5'>Expense List</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>lDate</TableCell>
                            <TableCell>Expenses</TableCell>
                            <TableCell>Debit</TableCell>
                            <TableCell>Credit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell>{transaction.name}</TableCell>
                                <TableCell>{transaction.type === 'debit' ? transaction.amount : ''}</TableCell>
                                <TableCell>{transaction.type === 'credit' ? transaction.amount : ''}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ExpenseList;
