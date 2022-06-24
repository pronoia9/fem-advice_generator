import './Card.scss';

export default function Card({ icon, card, buttonClick }) {
  return (
    <main className='card'>
      <h1 className='card_id'>Advice #{card && card.id ? card.id : ''}</h1>
      <p className='card_advice'>{card && card.advice ? card.advice : ''}</p>
      <div className='card_button' onClick={buttonClick}>
        <img src={icon.default} alt='dice' />
      </div>
    </main>
  );
}
