export default function BookCard({ book: { id, title, author, available }, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>
      <button onClick={() => onReserve(id)}>
        Reservar
      </button>
    </article>
  );
}