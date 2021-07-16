import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="mx-auto">
                <Link to="/">
                    My Shop
                </Link>
            </div>
        </nav>
    );
}

export default Header;
