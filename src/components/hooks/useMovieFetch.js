import { useState, useEffect, useCallback } from "react";
import { API_KEY, API_URL } from "../../config";

export const useMovieFetch = movieId => {
  const [state, setstate] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const fetchData = useCallback(async () => {
    setloading(true);
    seterror(false);

    try {
      const movieEndpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const movieResult = await (await fetch(movieEndpoint)).json();

      const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditEndpoint)).json();

      const directors = creditResult.crew.filter(
        member => member.job === "Director"
      );

      setstate({
        ...movieResult,
        actors: creditResult.cast,
        directors
      });
    } catch (error) {
      seterror(true);
    } finally {
      setloading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, loading, error];
};
