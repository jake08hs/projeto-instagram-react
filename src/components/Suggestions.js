export default function Suggestions({ suggestions }) {
  return (
    <div className="sugestoes-lista">
      {suggestions.map((s, i) => (
        <div className="sugestao" key={i}>
          <div className="sugestao-info">
            <img src={s.img} alt={s.user} />
            <div className="texto-sugestao">
              <strong>{s.user}</strong>
              <span>{s.status}</span>
            </div>
          </div>
          <button className={s.status === "Seguir" ? "seguir" : "segue-voce"}>
            {s.status}
          </button>
        </div>
      ))}
    </div>
  );
}
