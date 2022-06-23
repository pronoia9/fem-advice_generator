import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';

function App() {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice));
  }, []);

  return (
    <>
      <Card />
      <Footer />
    </>
  );
}

export default App;