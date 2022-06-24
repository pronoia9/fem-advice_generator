import './Card.scss';

export default function Card({ icon, card, buttonClick }) {
  return (
    <main className='card'>
      <h1 className='card__number'>Advice #{card && card.id ? card.id : ''}</h1>
      <p className='card__quote'>{card && card.advice ? card.advice : ''}</p>
      <div className='card__dice' onClick={buttonClick}>
        <img src={icon.default} alt='dice' />
      </div>
    </main>
  );
}
