import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "./style.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="wrapper">
                <div className="top">
                    <Header />
                    <Nav />
                </div>
                <Footer />
            </div>
        </aside>
    );
};

export default Sidebar;
