import './Card.scss';

export default function Card({ icon, quote, buttonClick }) {
  return (
    <main className='card'>
      <h1 className='card__number'>Advice #117</h1>
      <p className='card__quote'>{quote}</p>
      <div className='card__dice' onClick={buttonClick}>
        <img src={icon.default} alt='dice' />
      </div>
    </main>
  );
}