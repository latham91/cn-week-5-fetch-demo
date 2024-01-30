import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <h1 className="main-title">
            <Link to="/">Studio Ghibli Movies</Link>
        </h1>
    );
}
