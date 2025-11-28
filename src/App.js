import { useState } from "react";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onSidebarClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar flutuante */}
      <Sidebar className={sidebarOpen ? "sidebar open" : "sidebar"} />

      <div className="container">
        <main className="left-column">
          <Stories />
          <Feed />
        </main>
        <aside className="right-column">
          {/* Removido o User daqui, só permanece dentro do Sidebar */}
        </aside>
      </div>
    </>
  );
}

export default App;
