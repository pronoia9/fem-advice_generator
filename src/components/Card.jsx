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
  width: 540px;
  background-color: #323a49;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 343px; /* clamp(295px, 90%, 34rem); */
    max-width: 91.5%;
    margin-bottom: 2rem;
  }
`;
