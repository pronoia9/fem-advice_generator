import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Card } from './components';

const App = () => {
  const [advice, setAdvice] = useState({ id: null, advice: '' });

  const fetchAdvice = async () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const data = response.data.slip;
        advice?.id !== data.id ? setAdvice(data) : fetchAdvice();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <Container>
      <Card advice={advice} fetchAdvice={fetchAdvice} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #1f2632;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
