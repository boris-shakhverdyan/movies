import Sidebar from "../Sidebar";
import Featured from "../Featured";
import Trending from "../Trending";
import "./style.css";

const Layout = () => {
    return (
        <div id="app">
            <Sidebar />
            <main>
                <Featured />
                <Trending />
            </main>
        </div>
    );
};

export default Layout;
