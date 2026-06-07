function Products() {
  const products = [
    {
      name: "Premium Jacket",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      name: "Sneakers",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      name: "Luxury Watch",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    },
  ];

  return (
    <section style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Featured Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px gray",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;