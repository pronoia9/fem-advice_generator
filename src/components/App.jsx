import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
const icon = require('../images/icon-dice.svg');
const data = require('../data/data.json');

function App() {
  const [card, setCard] = useState();
  // sets the state of card with a fetched id (number) + advice (string) object
  const setAdvice = () => { fetchAdvice().then(setCard); }
  useEffect(() => setAdvice(), []);

  return (
    <>
      <Card icon={icon} card={card} buttonClick={setAdvice} />
      <Footer data={data.footer} />
    </>
  );
}

// returns an object with an id (number) and an advice (string)
const fetchAdvice = () => fetch('https://api.adviceslip.com/advice').then((response) => response.json()).then((data) => data.slip);

export default App;