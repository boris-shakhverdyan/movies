import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.css";

const Nav = () => {
    const links = [
        { id: 1, icon: "search.png", title: "Search", isActive: false },
        { id: 2, icon: "home.png", title: "Home", isActive: true },
        { id: 3, icon: "shows.png", title: "TV Shows", isActive: false },
        { id: 4, icon: "movies.png", title: "Movies", isActive: false },
        { id: 5, icon: "genres.png", title: "Genres", isActive: false },
        { id: 6, icon: "later.png", title: "Watch Later", isActive: false },
    ];

    return (
        <nav>
            {links.map(({ id, icon, title, isActive }) => (
                <Link key={id} to="#" className={classNames({ active: isActive })}>
                    <div className="image">
                        <img src={`/assets/icons/${icon}`} alt={title} />
                    </div>
                    <span>{title}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
