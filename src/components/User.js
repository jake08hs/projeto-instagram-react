import React from "react";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
  const suggestions = [
    { user: "bad.vibes.memes", status: "Segue você", img: "assets/img/bad.vibes.memes.svg" },
    { user: "chibirdart", status: "Seguir", img: "assets/img/chibirdart.svg" },
    { user: "razoesparaacreditar", status: "Seguir", img: "assets/img/razoesparaacreditar.svg" },
    { user: "adorable_animals", status: "Seguir", img: "assets/img/adorable_animals.svg" },
    { user: "smallcutecats", status: "Seguir", img: "assets/img/smallcutecats.svg" },
  ];

  return (
    <aside className="sidebar">
      <User />
      <Suggestions suggestions={suggestions} />
      {/* Rodapé permanece aqui */}
    </aside>
  );
};

export default Sidebar;
