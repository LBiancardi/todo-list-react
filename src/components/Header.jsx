import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="main-title">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: "rgb(255,240,220)",
            }}
          >
            Add a new task
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
