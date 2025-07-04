import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#aboutme">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contactme">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
