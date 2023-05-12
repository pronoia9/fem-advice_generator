import styled from 'styled-components';

const Button = ({ fetchAdvice }) => {
  return (
    <Container>
      <img src='/icon-dice.svg' />
    </Container>
  );
};

export default Button;

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
    box-shadow: 0px 0px 40px #53ffaa;
  }

  @media (max-width: 768px) {
    bottom: 64px;
  }

  img {
    width: 24px;
  }
`;
