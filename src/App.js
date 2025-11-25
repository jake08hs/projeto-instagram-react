import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import User from "./components/User";
import Suggestions from "./components/Suggestions";

function App() {
    return (
        <>
            <Navbar />

            <div className="container">
                <main className="left-column">
                    <Stories />
                    <Feed />
                </main>

                <aside className="right-column">
                    <User />
                    <Suggestions />
                </aside>
            </div>
        </>
    );
}

export default App;
