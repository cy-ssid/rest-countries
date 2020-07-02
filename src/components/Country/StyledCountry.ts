import styled from 'styled-components';
import {maxCenter, linkStyle} from '../Styled';

const StyledCountry = styled.div`
  padding: 1em 0;
  ${maxCenter}
  color: ${({theme}) => theme['text']};

  .nav__link {
    ${linkStyle}
  }

  .country__info {
    margin-top: 5em;
  }

  .border__links{
    margin-bottom: 5px;
  }

  .info__primary{
    margin-bottom: 3em;
  }

  @media (min-width: 600px) {
    .info__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 800px) {
    .info__primary {
      margin-bottom: 0;
    }
    .info__text {
      display: block;
    }

    .country__info {
      display: flex;
      justify-content: space-between;
    }

    .country__flag {
      width: 40%;
      margin-right: 5%;
    }

    .info {
      align-self: center;
      width: 55%;
    }
  }

  @media (min-width: 900px) {
    .info__text {
      display: flex;
    }
  }
`;

export default StyledCountry;
