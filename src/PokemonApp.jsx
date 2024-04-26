import { useState } from "react";
import { SearchPokemon, GifGrid } from "./components";

export const PokemonApp = () => {
  const [categories, setCategories] = useState(["pikachu"]);

  const onAddCategory = (onNewCategory) => {
    const lowercaseCategories = categories.map((category) =>
      category.toLowerCase()
    );
    const lowercaseNewCategory = onNewCategory.toLowerCase();

    if (lowercaseCategories.includes(lowercaseNewCategory)) return;

    setCategories([onNewCategory, ...categories]);
  };

  return (
    <>
      {/* Ttulo */}
      <div className="parent-container">
        <h1 className="color">Pokémon App</h1>
        {/* Input */}
        <SearchPokemon onNewCategory={(event) => onAddCategory(event)} />
      </div>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
