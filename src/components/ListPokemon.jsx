import { DetailPokemon } from "./DetailPokemon";
import { useFetchPoke } from "../hooks/useFetchPoke";

export const GifGrid = ({ category }) => {
  const { pokemon, isLoading } = useFetchPoke(category);

  return (
    <>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <div>{pokemon && <DetailPokemon key={pokemon.id} {...pokemon} />}</div>
      )}
    </>
  );
};
