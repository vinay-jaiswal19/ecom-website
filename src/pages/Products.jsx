function Products() {
  const products = [
    {
      name: "Premium Jacket",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      name: "Running Shoes",
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
    {
      name: "Backpack",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
    },
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Our Products</h1>
      <p>Explore our latest fashion collection.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 2px 8px gray",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;