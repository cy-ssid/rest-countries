import styled, {
  css, createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  font-family: 'Nunito Sans', sans-serif;
`;

export const maxCenter = css`
  width: min(95%, 1200px);
  margin: 0 auto;
`;
