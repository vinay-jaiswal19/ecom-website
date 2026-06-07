function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#2563eb",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        Discover Your Perfect Style
      </h1>

      <p>
        Explore the latest fashion trends with premium quality products.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "white",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}

export default Hero;