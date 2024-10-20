import { NavLink } from "react-router-dom"
import "./ui/header.css"

export default function Header() {
  return (
    <header className="header">
        <h1 className="header__title">About Cats</h1>
        <div className="header__right">
            <NavLink to="/" className="header__link">Home</NavLink>
            <NavLink to="/facts" className="header__link">Facts</NavLink>
            <NavLink to="/breeds" className="header__link">Breeds</NavLink>
        </div>
    </header>
  )
}
