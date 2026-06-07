function Testimonials() {
  return (
    <section
      style={{
        padding: "50px",
        backgroundColor: "#e5e7eb",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Customer Reviews
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          ⭐⭐⭐⭐⭐
          <p>Great quality and fast delivery.</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          ⭐⭐⭐⭐⭐
          <p>Amazing customer support.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;