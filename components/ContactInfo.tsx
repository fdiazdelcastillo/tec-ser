"user client";
import Image from "next/image";
import { SignupForm } from "./SignupForm";

export const ContactInfo = () => {
  return (
    <div className="block md:flex md:justify-between">
      <div className="mx-auto mt-2">
        <h4 className="text-3xl text-text font-mont font-bold">
          Información de Contacto
        </h4>
        <p className="text-text font-pop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center gap-x-4 mt-10">
          <Image
            src="/email.png"
            width={30}
            height={30}
            alt="logo mail"
            className="max-w-36 sm:max-w-full"
          />
          <p className="text-text font-pop text-xl">correo01@omnitreck.com</p>
        </div>
        <div className="flex items-center gap-x-4 mt-4">
          <Image
            src="/email.png"
            width={30}
            height={30}
            alt="logo mail"
            className="max-w-36 sm:max-w-full"
          />
          <p className="text-text font-pop text-xl">correo02@omnitreck.com</p>
        </div>
        <div className="flex items-center gap-x-4 mt-4">
          <Image
            src="/email.png"
            width={30}
            height={30}
            alt="logo mail"
            className="max-w-36 sm:max-w-full"
          />
          <p className="text-text font-pop text-xl">correo03@omnitreck.com</p>
        </div>
        <div className="flex items-center gap-x-4 mt-8">
          <Image
            src="/whatsapp.png"
            width={30}
            height={30}
            alt="logo whatsapp"
            className="max-w-36 sm:max-w-full"
          />
          <p className="text-text font-pop text-xl">+57 3524856241</p>
        </div>
      </div>
      <SignupForm />;
    </div>
  );
};
