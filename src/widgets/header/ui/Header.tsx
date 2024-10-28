import { NavLink } from "react-router-dom"
import "./header.css"
import { links } from "@shared/constants/Links"
import { ILink } from "@shared/types/Link"

export function Header() {
  return (
    <header className="header">
        <h1 className="header__title">About Cats</h1>
        <div className="header__right">
          {links.map((link: ILink) =>
            <NavLink key={link.id} to={link.route} className="header__link">{link.name}</NavLink>
          )}
        </div>
    </header>
  )
}
