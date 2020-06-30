import React from 'react';
import StyledHeader from './StyledHeader';

type HeaderProps = {
  onThemeChange: (theme: boolean) => void,
  isDark: boolean
}

export default function Header({
  isDark,
  onThemeChange
}: HeaderProps) {
  const themeSwitchHandler = () => onThemeChange(!isDark);
  return (
    <StyledHeader>
      <div className="header__container">
        <h1 className="header__title">Where in the world?</h1>
        <button onClick={themeSwitchHandler} className="header__button">
          <i className="fa fa-moon-o"></i>
          Dark Mode
        </button>
      </div>
    </StyledHeader>
  )
}
