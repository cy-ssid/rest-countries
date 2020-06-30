import React from 'react';
import { connect } from "react-redux";
import {ThemeProvider} from 'styled-components';
import { getTheme } from "../../store/home";
import { RootState } from "../../interfaces";

type Theme = {
  isDark: boolean
}

const mapStateToProps = (state: RootState) => {
  return {
    isDark: getTheme(state)
  };
};

const Theme: React.FunctionComponent<Theme> = props => {
  const theme = {
    'appBG': props.isDark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    'cardBG': props.isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    'text': props.isDark ? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)',
    'input': 'hsl(0, 0%, 52%)',
  }
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default connect(mapStateToProps)(Theme);
