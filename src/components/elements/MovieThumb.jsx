import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="movie image" />
    ) : (
      <img src={image} alt="movie image" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
