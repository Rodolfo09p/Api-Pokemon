import { InfoPokemon } from "./InfoPokemon";

export const DetailPokemon = ({
  imageUrl,
  name,
  id,
  types,
  hp,
  attack,
  speed,
  defense,
}) => {
  return (
    <section className="pokemon-cards">
      <article className="pokemon">
        <div className="pokemon-image-container">
          <img src={imageUrl} alt={name} />
        </div>

        <div className="pokemon-info">
          <h2 className="name color">
            {name} <span className="id">#{id}</span>
          </h2>
          <span className="type">{types}</span>

          <section className="pokemon-stats">
            <InfoPokemon label="HP" value={hp} />
            <InfoPokemon label="ATTACK" value={attack} />
          </section>
          <section className="pokemon-stats">
            <InfoPokemon label="SPEED" value={speed} />
            <InfoPokemon label="DEFENSE" value={defense} />
          </section>
        </div>
      </article>
    </section>
  );
};
