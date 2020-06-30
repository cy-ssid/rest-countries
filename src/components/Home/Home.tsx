import React from 'react';

type HomeProps = {
  fetchCountries: () => void
};

export default class Home extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return <div>asdf</div>
  }
}
