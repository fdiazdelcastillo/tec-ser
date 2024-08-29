// components/ContactForm.tsx
"use client";

import React, { FC, ChangeEvent, useState } from "react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="bg-background text-text"
    >
      <p>
        <label>
          Tu Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-background"
          />
        </label>
      </p>
      <p>
        <label>
          Tu Correo:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </p>
      <p style={{ display: "none" }}>
        <label>
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
  );
};

export default ContactForm;
