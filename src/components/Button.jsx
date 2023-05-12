import styled from 'styled-components';

const Button = ({ fetchAdvice }) => {
  return (
    <Container onClick={fetchAdvice}>
      <img src='/icon-dice.svg' />
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52ffa8;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: relative;
  bottom: -2rem;

  img {
    height: 1.5rem;
  }

  &:hover {
    box-shadow: 0rem 0rem 1rem #52ffa8;
    cursor: pointer;
  }

  @media (min-width: 800px) {
  }
`;
