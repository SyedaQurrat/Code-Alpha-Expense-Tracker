import { Box, Card, CardContent, Typography, styled } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

const ExpenseCard = ({ income, expense }) => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: 'green' }}>{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: 'red' }}>{expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ExpenseCard;

