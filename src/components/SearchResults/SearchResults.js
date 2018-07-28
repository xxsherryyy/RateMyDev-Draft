import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <img alt="Dev" src={result} className="img-fluid" />
      </li>
    ))}
  </ul>
);

export default SearchResults;
