import { Link } from "react-router-dom"
import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Bienvenido a Nuestro Sitio</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/blog">Blog y Opiniones</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent