import { useState, useEffect } from "react";

import { getPoke } from "../helpers/getPoke";

export const useFetchPoke = (category) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonData = async () => {
    try {
      const newPokemon = await getPoke(category);
      setPokemon(newPokemon);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return {
    pokemon,
    isLoading,
  };
};
