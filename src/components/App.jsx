import { useEffect, useState } from 'react';
import Footer from './Footer';
import './App.scss';

function App() {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice));
  }, []);

  return (
    <>
      <Footer />
    </>
  );
}

export default App;