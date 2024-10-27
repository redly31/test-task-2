import { Link } from "react-router-dom"
import "./home.css"

export function HomePage() {
  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">Welcome</h1>
        <h2 className="home__subtitle">This is site about cats</h2>
        <div className="home__links">
          <Link to="/facts">Facts about cats</Link>
          <Link to="/facts">Cats Breeds</Link>
        </div>
      </div>
    </div>
  )
}
