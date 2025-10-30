import React from "react";
import "../globals.css"; 
import Footer from "../../components/footer/footer";

export default function Contact() {
  return (
    <>
      <main className="contact" >
        <h3 style={{ marginBottom: "30px", textAlign: "center" }}>
          Feel free to enter your information below or reach me directly at{" "}
          <em>mohinichahal@gmail.com</em>
        </h3>

        <form className="contact-form">
          <div>
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label>Message:</label>
            <textarea id="message" name="message" rows={5} required />
          </div>

          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </main>

      < Footer />
    </>
  );
}
