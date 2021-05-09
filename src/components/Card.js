import React from "react";
import { numberFormat } from "../tools/numberFormat";

/**
 *
 * @param {country} param0
 * @returns
 */
const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flag} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>{country.capital}</li>
          <li>Pop. {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
