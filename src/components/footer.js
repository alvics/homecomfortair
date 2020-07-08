import React from "react"

const Footer = () => {
  return (
    <>
      <footer id="footer-main">
        <div class="grid-300">
          <section class="footer-1 text-center">
            <h4>Services 1</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section class="footer-2 text-center">
            <h4>Services 2</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section class="footer-3 text-center">
            <h4>Services 3</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section class="footer-4 text-center">
            <h4>Services 4</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>
        </div>
      </footer>
      <div className="text-center">
        <span style={{ fontSize: "12px" }}>
          {" "}
          © {new Date().getFullYear()}
          <a href="https://ewebdesigns.com.au">Powered by | eWebDesigns</a>
        </span>
      </div>
    </>
  )
}

export default Footer
