import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data => setQuote(data.slip.advice))
  }, [])

  return (
    <div className='attribution'>
      Challenge by{' '}
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
        Frontend Mentor
      </a>
      . Coded by <a href='https://github.com/pronoia9'>Jay Ansin</a>.
    </div>
  );
}

export default App;