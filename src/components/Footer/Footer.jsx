import './Footer.scss';

export default function Footer({ data }) {
  return (
    <footer className='attribution'>
      Challenge by <a href={data.challengeURL} target='_blank' rel='noreferrer'>Frontend Mentor</a>. Coded by <a href={data.githubURL}>{data.name}</a>.
    </footer>
  );
}