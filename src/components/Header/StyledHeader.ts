import styled from 'styled-components';
import { maxCenter, themeCardBGText } from '../Styled';

const StyledHeader = styled.header`
  ${themeCardBGText}
  padding: 1em 0;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${maxCenter};
  }

  .header__title {
    margin: 0;
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }

  .header__button {
    ${themeCardBGText}
    border: none;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    &:active, &:hover {
      opacity: .8;
    }

    .fa {
      padding-right: 10px;
    }
  }
`;

export default StyledHeader;
