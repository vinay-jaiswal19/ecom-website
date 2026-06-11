function Contact() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Get in touch with us using the
        information below.
      </p>

      <div
        style={{
          maxWidth: "500px",
          margin: "30px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 8px gray",
        }}
      >
        <h3>📧 Email</h3>
        <p>support@stylehub.com</p>

        <h3>📞 Phone</h3>
        <p>+91 98765 43210</p>

        <h3>📍 Address</h3>
        <p>Mumbai, Maharashtra, India</p>
      </div>
    </div>
  );
}

export default Contact;