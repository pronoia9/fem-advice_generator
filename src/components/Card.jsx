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
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
`;

const Container = styled.div`
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${cardAnimation} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;
