"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";


export function SignupForm() {
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
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white bg-background">
      <h2 className="font-bold text-xl font-mont text-text">
      Contáctanos
      </h2>
      <p className="text-text font-pop text-sm max-w-sm mt-2">
      Estamos aquí para ayudarte. Cuéntanos en qué podemos colaborar contigo.
      </p>

      <form name="feedback" className="my-8" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="feedback" />
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Nombre <span className="text-[#FF0000] text-xl">*</span></Label>
            <Input name="name" placeholder="Nombre Completo" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Correo Electrónico <span className="text-[#FF0000] text-xl">*</span></Label>
          <Input name="email" placeholder="projectmayhem@fc.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Teléfono</Label>
          <Input name="phone" placeholder="Telefono" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Mensaje</Label>
          <textarea name="message" placeholder="Mensaje" rows={4} cols={40} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black block w-full bg-secondaryBg text-text rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Enviar &rarr;
          <BottomGradient />
        </button>
        <div id="success" style={{display:"none;"}}>
          <p>Your message was sent successfully!</p>
        </div>
        <div id="error" style={{display:"none;"}}>
          <p>There was an error sending your message. Please try again.</p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
