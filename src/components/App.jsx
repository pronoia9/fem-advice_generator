import { useEffect, useState } from 'react';
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
      <Footer />
    </>
  );
}

export default App;