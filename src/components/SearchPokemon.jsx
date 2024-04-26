import { useState } from "react";

export const SearchPokemon = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInpuntChange = (e) => {
    const lowerCaseValue = e.target.value.toLowerCase();
    setInputValue(lowerCaseValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Pokémon"
          value={inputValue}
          onChange={onInpuntChange}
        />
      </form>
    </>
  );
};
