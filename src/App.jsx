import { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from './components';

const App = () => {
  const [advice, setAdvice] = useState(null);

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

  return <Card advice={advice} setAdvice={setAdvice} />;
};

export default App;
