import {connect} from 'react-redux';
import { RootState } from '../../interfaces';
import { RouteProps } from 'react-router-dom';
import { getCountries } from '../../store/countries';
import Country from './Country';

const mapStateToProps = (state: RootState, props: RouteProps) => {
  return {
    countries: getCountries(state)
  }
}

export default connect(mapStateToProps)(Country);
