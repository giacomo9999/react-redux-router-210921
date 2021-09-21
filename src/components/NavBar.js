import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className="nav-item-group">
          <li>
            <Link to="/">
              <h2>Isobar Takehome</h2>
            </Link>
          </li>
        </div>
        <div className="nav-item-group">
          <li>
            <Link to="/states">
              <h3>States</h3>
            </Link>
          </li>
          <li>
            <Link to="/guess">
              <h3>Guess</h3>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
