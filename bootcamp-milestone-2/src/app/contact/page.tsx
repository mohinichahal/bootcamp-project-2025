'use client';
import React, { useState } from "react";
//import "../../../globals.css"; 
import Footer from "../../components/footer/footer";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_g6klrqk",
        "template_1sproby",
        formData,
        "YdDY6cD0zpGDgdSOG"
      );
      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <>
      <main className="contact" >
        <h3 style={{ marginBottom: "30px", textAlign: "center" }}>
          Feel free to enter your information below or reach me directly at{" "}
          <em>mohinichahal@gmail.com</em>
        </h3>

        <form className="contact-form" onSubmit={handleSubmit}>
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
          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </form>
      </main>

      <Footer />
    </>
  );
}
