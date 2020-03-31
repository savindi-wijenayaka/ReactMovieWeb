import React from "react";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Grid from "./elements/Grid";
import Actor from "./elements/Actor";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movieData, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Ooops... Something went wrong!</div>;
  if (loading || !movieData.original_title) return <Spinner />;

  return (
    <>
      <Navigation movie={movieData.original_title} />{" "}
      <MovieInfo movie={movieData} />{" "}
      <MovieInfoBar
        time={movieData.runtime}
        budget={movieData.budget}
        revenue={movieData.revenue}
      />
      <Grid header="Actors">
        {movieData.actors.map(actor => (
            <Actor key={actor.credit_id} actor={actor}/>
        ))}
      </Grid>
    </>
  );
};

export default Movie;
