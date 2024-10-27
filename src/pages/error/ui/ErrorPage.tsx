import { Link } from "react-router-dom"
import "./error.css"

export function ErrorPage() {
  return (
    <div className="error">
      <h1 className="error__title">Error!</h1>
      <h2 className="error__subtitle">Page not found</h2>
      <Link to="/">To home page</Link>
    </div>
  )
}
