import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&#39;existe pas.</p>
      <Link to="/">Retourner sur la page d&#39;accueil</Link>
    </div>
  )
}
  
  export default Error;