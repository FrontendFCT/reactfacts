import logo from "./logo.svg";


export default function Header() {
    return (
        <nav>
            <img src={logo} className="nav-logo" alt="Navbar React Logo" />
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-content">React Course - Project 1</h4>
        </nav>
    );
}