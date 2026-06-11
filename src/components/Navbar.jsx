import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link
        to="/products"
        style={{ color: "white", textDecoration: "none" }}
      >
        Products
      </Link>

      <Link
        to="/contact"
        style={{ color: "white", textDecoration: "none" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;