"use client";
import { useState } from "react";

export function FeedbackForm() {
const [message, setMessage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        setMessage("Thank you for your feedback!");
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("There was an error submitting your feedback. Please try again.");
    }
  };

  return (
    <form name="feedback" onSubmit={handleFormSubmit} className="flex flex-col items-center bg-background w-full">
      <input type="hidden" name="form-name" value="feedback" />
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email (optional)" />
      <button type="submit" className="text-text">Submit</button>
    </form>
  );
}
