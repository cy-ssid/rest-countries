import {
  getSearch, getRegion,
  changeHomeAction,
} from '../../store/home';
import Filter from './Filter';
import { connect } from 'react-redux';
import { RootState } from '../../interfaces';

const mapStateToProps = (state: RootState) => {
  return {
    search: getSearch(state),
    region: getRegion(state)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChange: (name: string, value: string) => dispatch(changeHomeAction({name, value}))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
