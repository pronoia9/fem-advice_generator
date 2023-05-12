import styled from 'styled-components';
import { Text, Button } from '.';

const Card = ({ advice, fetchAdvice }) => {
  return (
    <Container>
      <Text advice={advice} />
      <Button fetchAdvice={fetchAdvice} />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #1f2632;
  font-family: 'Manrope', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
