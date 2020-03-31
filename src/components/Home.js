import React, { useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";

//import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

//import custom hooks
import { useHomeFetch } from "../components/hooks/useHomeFetch";

//import images
import NoImage from "./images/no_image.jpg"

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();

  const [searchterm, setsearchterm] = useState("");

  console.log(movies);

  if (!movies[0]) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchterm ? "Search Results" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            movieId={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      <LoadMoreBtn />
      <Spinner />
    </>
  );
};

export default Home;
