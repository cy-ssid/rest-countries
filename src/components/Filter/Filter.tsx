import StyledFilter from "./StyledFilter";
import React from 'react';

type FilterProps = {
  search: string,
  region: string,
  onChange: (a: string, b: string) => void,
}

export default function Filter({
  search,
  region,
  onChange
}: FilterProps) {
  const onInputChange = (name: string) => (e: { target: { value: any; }; }) => onChange(name, e.target.value);

  return (
    <StyledFilter>
      <input
        value={search}
        onChange={onInputChange('search')}
        className="search"
        placeholder="Search for a country..."
      />
      <select value={region} onChange={onInputChange('region')} className="region__filter">
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </StyledFilter>
  )
}
