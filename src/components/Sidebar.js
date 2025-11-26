import React from "react";

const suggestions = [
  { user: "bad.vibes.memes", status: "Segue você", img: "assets/img/bad.vibes.memes.svg" },
  { user: "chibirdart", status: "Seguir", img: "assets/img/chibirdart.svg" },
  { user: "razoesparaacreditar", status: "Seguir", img: "assets/img/razoesparaacreditar.svg" },
  { user: "adorable_animals", status: "Seguir", img: "assets/img/adorable_animals.svg" },
  { user: "smallcutecats", status: "Seguir", img: "assets/img/smallcutecats.svg" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Usuário maior */}
      <div className="usuario-principal">
        <img src="assets/img/catanacomics.svg" alt="catanacomics" />
        <div className="usuario-texto">
          <strong>catanacomics</strong>
          <ion-icon name="pencil-outline"></ion-icon>
        </div>
      </div>

      {/* Título sugestões */}
      <div className="sugestoes-titulo">
        <span>Sugestões para você</span>
        <span className="ver-tudo">Ver tudo</span>
      </div>

      {/* Lista de sugestões */}
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

      {/* Rodapé */}
      <div className="sidebar-rodape">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
};

export default Sidebar;
