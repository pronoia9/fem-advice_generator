import styled from 'styled-components';
import { Text, Button } from '.';

const Card = ({ advice, fetchAdvice }) => {
  console.log(advice);

  return (
    <Container>
      <Text advice={advice} />
      <Button fetchAdvice={fetchAdvice} />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #323a49;
  position: absolute;
  width: clamp(295px, 90%, 34rem);
  margin-top: 7.5rem;
  border-radius: 0.5rem;

  @media (min-width: 800px) {
    margin-top: 0;
    margin-bottom: 2rem;
    width: 34rem;
  }
`;
