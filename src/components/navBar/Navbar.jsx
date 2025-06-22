import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><a  href="#aboutme">About Me</a></li>
          <li className="nav-item"><a  href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#contactme">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
