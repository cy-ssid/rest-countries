import styled from 'styled-components';
import { themeCardBGText } from '../Styled';

const StyledFlagCard = styled.div`
  ${themeCardBGText};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5);
  display: grid;
  grid-template-rows: 200px 1fr;

  .home__flag {
    height: 100%;
    object-fit: cover;
  }

  .home__countryHeading {
    font-weight: 800;
  }

  .country__info {
    padding: 1em;
  }
`;

export default StyledFlagCard;
