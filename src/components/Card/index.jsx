function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt="Housing" className="card-img" />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
