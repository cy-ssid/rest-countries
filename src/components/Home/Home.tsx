import React from 'react';
import { Country } from '../../interfaces';

type HomeProps = {
  fetchCountries: () => void,
  loading: boolean,
  region: string,
  search: string,
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
      loading, region, search, error, countries,
    } = this.props;

    if (loading && !error) {
      return <div style={{'textAlign': 'center'}}>Loading...</div>
    }

    if(!loading && error) {
      return <div style={{'textAlign': 'center'}}>Error loading data. Please try again later.</div>
    }

    if (!loading && !error && countries.length === 0) {
      return <div style={{'textAlign': 'center'}}>No matching results</div>
    }

    return (
      countries.map((c: Country) => <div>{c.name}</div>)
    )
  }
}
