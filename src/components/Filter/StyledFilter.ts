import styled from 'styled-components';
import { maxCenter, themeCardBGText } from '../Styled';

const StyledFilter = styled.section`
  ${maxCenter};
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }

  .search, .region__filter {
    ${themeCardBGText};
    display: block;
    padding: 1em;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 1em;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    @media (min-width: 600px) {
      margin-bottom: none;
    }
  }

  .search {
    width: 100%;
    @media (min-width: 600px) {
      width: 350px;
    }
  }

  .region__filter option {
    ${themeCardBGText}
  }
`;

export default StyledFilter;
