export const InfoPokemon = ({ label, value }) => {
  return (
    <article className="stat">
      <p className="stat-label color">{label}</p>
      <div className="stats-bar">
        <span className="stats-value color">{value}</span>
        <progress className="stats-progress" value={value} max="100"></progress>
      </div>
    </article>
  );
};
