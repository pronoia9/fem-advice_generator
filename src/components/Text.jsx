import styled from 'styled-components';

const Text = ({ advice }) => {
  return (
    <>
      <Id>Advice #{advice.id}</Id>
      <Quote>{advice.advice}</Quote>
    </>
  );
};

export default Text;

const Id = styled.p`
  color: #52ffa8;
  text-transform: uppercase;
  font-size: 0.651rem;
  letter-spacing: 3px;
  padding: 2.5rem 0 1.5rem 0;

  @media (min-width: 800px) {
    font-size: 0.9rem;
    letter-spacing: 3px;
    padding: 3.25rem 0 1.5rem 0;
  }
`;

const Quote = styled.p`
  width: 85%;
  color: #cee3e9;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: url('/pattern-divider-mobile.svg');
    padding: 1rem;
    overflow: hidden;
  }

  @media (min-width: 800px) {
    font-size: 1.75rem;

    &::after {
      content: url('/pattern-divider-desktop.svg');
    }
  }
`;
