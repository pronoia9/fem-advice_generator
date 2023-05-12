import styled, { keyframes } from 'styled-components';
import { Text, Button } from '.';

const Card = ({ advice, fetchAdvice }) => {
  return (
    <Container key={`card-${advice.id}`}>
      <Text advice={advice} />
      <Button fetchAdvice={fetchAdvice} />
    </Container>
  );
};

export default Card;

const cardAnimation = keyframes`
  0% {
    -webkit-transform: rotateX(-80deg);
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
