import { div } from "three/webgpu";

type FormProps = {};

const Form: React.FC<FormProps> = (props) => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col bg-background items-center"
    >
      <input type="text" name="name" placeholder="Nombre" />
      <input type="email" name="email" placeholder="Correo" />
      <textarea name="message" placeholder="Mensaje"></textarea>
      <button type="submit" className="text-text">
        Enviar
      </button>
    </form>
  );
};

export default Form;
