import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    const links = ["Language", "Get help", "Exit"];

    return (
        <footer>
            {links.map((link) => (
                <Link key={link} to="#">
                    {link}
                </Link>
            ))}
        </footer>
    );
};

export default Footer;
