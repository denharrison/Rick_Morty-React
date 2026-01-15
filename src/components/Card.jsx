const Card = ({ character, onCardClick }) => {

  const { image, name, status, species } = character;

  return (
    <article className="card" onClick={() => onCardClick(character)}>
      <img src={image} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <div className="status">
          <span className="status-icon status-alive"></span>
          <span>{`${status} - ${species}`}</span>
        </div>
      </div>
    </article>
  );
};

export default Card