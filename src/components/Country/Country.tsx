import React from 'react';
import { Currency, Language } from '../../interfaces';
import { Redirect, Link } from 'react-router-dom';
import StyledCountry from './StyledCountry';
import {
  InfoRow, InfoHeading, Info
} from '../Styled';
import { numberWithCommas } from '../../helpers';

type CountryProps = {
  countries: any,
}

export default function Country({countries}: CountryProps) {
  const alpha = window.location.pathname.split('/')[2];
  const country = countries[alpha];

  if (!country) {
    return <Redirect to="/" />
  }
  const {
    flag, name, nativeName,
    population, region, subregion,
    capital, topLevelDomain, currencies,
    languages, borders
  } = country;

  const neighbors = Object.values(countries).filter((e: any) => borders.indexOf(e.alpha3Code) > -1);

  return (
    <StyledCountry>
      <Link to="/" className="nav__link">
        <span className="fa fa-long-arrow-left" />  Back
      </Link>
      <div className="country__info">
        <div className="country__flag">
          <img src={flag} alt={'Flag of ' + name} />
        </div>
        <div className="info">
          <div className="info__text">
            <div className="info__primary">
              <h2 className="country__heading">
                {name}
              </h2>
              <InfoRow>
                <InfoHeading>Native Name: </InfoHeading>
                <Info>{nativeName}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Population: </InfoHeading>
                <Info>{numberWithCommas(population)}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Region: </InfoHeading>
                <Info>{region}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Sub Region: </InfoHeading>
                <Info>{subregion}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Capital: </InfoHeading>
                <Info>{capital}</Info>
              </InfoRow>
            </div>
            <div className="info__secondary">
              <InfoRow>
                <InfoHeading>Top Level Domain: </InfoHeading>
                <Info>{topLevelDomain}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Currencies: </InfoHeading>
                <Info>{currencies.map((e: Currency) => e.name).join(', ')}</Info>
              </InfoRow>
              <InfoRow>
                <InfoHeading>Languages: </InfoHeading>
                <Info>{languages.map((l: Language) => l.name).join(', ')}</Info>
              </InfoRow>
            </div>
          </div>
          {neighbors.length > 0 && <InfoRow>
            <InfoHeading>Border Countries: </InfoHeading>
            <Info>{neighbors.map((n: any) => <Link className="nav__link border__links" key={n.alpha3Code} to={'/country/' + n.alpha3Code}>{n.name}</Link>)}</Info>
          </InfoRow>}
        </div>
      </div>
    </StyledCountry>
  )
}
