import styled from 'styled-components';
import { maxCenter } from '../Styled';

const StyledHeader = styled.header`
  color: ${({theme}) => theme['text']};
  background: ${({theme}) => theme['cardBG']};
  padding: 1em 0;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .5);
  transition: 0.2s;

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
    background: none;
    border: none;
    color: ${({theme}) => theme['text']};
    font-size: 1rem;
    outline: none;
    transition: 0.5s;
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
