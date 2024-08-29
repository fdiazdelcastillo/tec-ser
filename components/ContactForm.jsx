"use client";

export function ContactForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    // Success & error handling should come here
  };

  return (
    <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col items-center">
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email (optional)" />
      <button type="submit" className="text-text">Submit</button>
    </form>
  );
}