import styled, {
  css, createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }

  img {
    width: 100%;
  }
`;

export const maxCenter = css`
  width: min(90%, 1200px);
  margin: 0 auto;
`;

export const themeCardBGText = css`
  color: ${({theme}) => theme['text']};
  background: ${({theme}) => theme['cardBG']};
  transition: 1s;
`;

export const Container = styled.main`
  background: ${({theme}) => theme['appBG']};
  padding: 2em 0;
  min-height: 100vh;
  box-shadow: 0 7px 9px -7px rgba(0, 0, 0, .5) inset;
`;

export const Grid = styled.div`
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  ${maxCenter};

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


export const InfoRow = styled.div`
  margin: 0.5em 0;
`

export const InfoHeading = styled.span`
  font-weight: 800;
`;

export const Info = styled.span``;

export const linkStyle = css`
  ${themeCardBGText};
  padding: .5em 1em;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .5);
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin: 0 5px;
`;
