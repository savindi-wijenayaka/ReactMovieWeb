import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setstate] = useState({ movies: [] });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const handleFetchMovies = async endpoint => {
    setloading(true);
    seterror(false);

    const isLoading = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();

      setstate(prev => ({
        ...prev,
        movies:
          isLoading !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      seterror(true);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    handleFetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, handleFetchMovies];
};
