import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/ui/Card';
import links from '../constants/home';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

function Home() {
  return (
    <div>
      <h2>Select a game</h2>
      <CardsWrapper>
        {links.map(({ url, heading, image, text }) => (
          <Link to={url} key={url}>
            <Card heading={heading} image={image} text={text} />
          </Link>
        ))}
      </CardsWrapper>
    </div>
  );
}

export default Home;
