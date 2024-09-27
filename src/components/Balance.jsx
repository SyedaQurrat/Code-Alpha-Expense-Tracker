import { Box, Typography, styled } from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`;

const Balance = ({ balance }) => {
    return (
        <Box>
            <BalanceText>Balance: Rs. {balance}</BalanceText>
        </Box>
    );
};

export default Balance;

