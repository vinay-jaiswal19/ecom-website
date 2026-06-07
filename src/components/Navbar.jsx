function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 50px",
      }}
    >
      <h2>StyleHub</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>Shop</span>
        <span>Products</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;