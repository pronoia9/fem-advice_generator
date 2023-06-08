import { Tilt } from 'react-tilt';
import styled from 'styled-components';

import { Text, Button } from '.';

const Card = ({ advice, fetchAdvice }) => {
  const options = {
    reverse: false, // reverse the tilt direction
    max: 5, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };
  
  return (
    <Container options={options}>
      <Text advice={advice} />
      <Button fetchAdvice={fetchAdvice} />
    </Container>
  );
};

export default Card;

const Container = styled(Tilt)`
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
