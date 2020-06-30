import { connect } from 'react-redux';
import Header from './Header';
import { changeHomeAction, getTheme } from '../../store/home';
import { RootState } from '../../interfaces';

const mapStateToProps = (state: RootState) => ({
  isDark: getTheme(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onThemeChange: (theme: boolean) => dispatch(changeHomeAction({name: 'isDark', value: theme}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
