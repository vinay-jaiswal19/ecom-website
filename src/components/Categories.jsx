function Categories() {
  const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories",
  ];

  return (
    <section style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Categories</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {categories.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "white",
              padding: "25px",
              width: "150px",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0 2px 8px gray",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;