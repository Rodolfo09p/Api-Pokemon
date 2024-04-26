export const getPoke = async (category) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${category}`; // Replace with actual endpoint

  const response = await fetch(url);
  const pokemonData = await response.json();

  const pokemon = {
    id: pokemonData.id,
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.front_default,
    hp: pokemonData.stats.find((stat) => stat.stat.name === "hp").base_stat,
    attack: pokemonData.stats.find((stat) => stat.stat.name === "attack")
      .base_stat,
    defense: pokemonData.stats.find((stat) => stat.stat.name === "defense")
      .base_stat,
    speed: pokemonData.stats.find((stat) => stat.stat.name === "speed")
      .base_stat,
    abilities: pokemonData.abilities.map((ability) => ability.ability.name),
    types: pokemonData.types.map((type) => type.type.name),
  };

  // console.log(pokemon.imageUrl);

  return pokemon;
};
