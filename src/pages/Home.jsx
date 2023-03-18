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
      <h1>Select a game</h1>
      <CardsWrapper>
        {links.map(({ url, heading }) => (
          <Link to={url} key={url}>
            <Card heading={heading} />
          </Link>
        ))}
      </CardsWrapper>
    </div>
  );
}

export default Home;
