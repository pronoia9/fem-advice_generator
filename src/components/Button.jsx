import styled, { keyframes } from 'styled-components';

const Button = ({ fetchAdvice }) => {
  return (
    <Container onClick={fetchAdvice}>
      <img src='/icon-dice.svg' />
    </Container>
  );
};

export default Button;

const buttonAnimation = keyframes`
 0% {
    box-shadow: none;
  }
  100% {
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;

const Container = styled.div`
  background: #53ffaa;
  border-radius: 50%;
  position: relative;
  bottom: 32px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    animation: ${buttonAnimation} 0.25s ease-in-out;
  }

  @media (max-width: 768px) {
    bottom: 64px;
  }

  img {
    width: 24px;
  }
`;
