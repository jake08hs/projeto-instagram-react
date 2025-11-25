export default function Navbar() { 
    return (
        <div className="navbar">
            <div className="container">

                {/* Logo como ícone */}
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="pesquisa">
                    <input placeholder="Pesquisar" />
                </div>
  
                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}
