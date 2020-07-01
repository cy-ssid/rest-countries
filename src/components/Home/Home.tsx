import React from 'react';
import { Country } from '../../interfaces';
import FilterContainer from '../Filter/FilterContainer';
import { Grid } from '../Styled';
import FlagCard from '../FlagCard/FlagCard';

type HomeProps = {
  fetchCountries: () => void,
  loading: boolean,
  // TODO: remove any
  countries: any,
  error: string,
};

export default class Home extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const {
      loading, error, countries,
    } = this.props;

    return (
      <React.Fragment>
        <FilterContainer />
        {loading && !error &&
        <div style={{'textAlign': 'center'}}>Loading...</div>}
        {!loading && error &&
        <div style={{'textAlign': 'center'}}>Error loading data. Please try again later.</div>}
        { !loading && !error && countries.length === 0 &&
        <div style={{'textAlign': 'center'}}>No matching results</div>}
        <Grid>
          {countries
          .map((country: Country) => <FlagCard {...country} key={country.alpha3Code} />)}
        </Grid>
      </React.Fragment>
    )
  }
}
