import React from 'react';
import StyledFlagCard from './StyledFlagCard';
import {Link} from 'react-router-dom';
import { Country } from '../../interfaces';
import {
  InfoRow, InfoHeading, Info
} from '../Styled';
import { numberWithCommas } from '../../helpers';

export default function FlagCard({
  name,
  alpha3Code,
  flag,
  population, region, capital
}: Country) {
  return (
    <StyledFlagCard>
      <Link to={'country/' + alpha3Code}>
        <img src={flag} alt={'Flag of ' + name} className="home__flag" />
      </Link>
      <div className="country__info">
        <h2 className="home__countryHeading">{name}</h2>
        <InfoRow>
          <InfoHeading>Population: </InfoHeading>
          <Info>{numberWithCommas(population)}</Info>
        </InfoRow>
        <InfoRow>
          <InfoHeading>Region: </InfoHeading>
          <Info>{region}</Info>
        </InfoRow>
        <InfoRow>
          <InfoHeading>Capital: </InfoHeading>
          <Info>{capital}</Info>
        </InfoRow>
      </div>
    </StyledFlagCard>
  )
}
