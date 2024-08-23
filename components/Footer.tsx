type FooterProps = {};

const Footer: Component<FooterProps> = (props) => {
  return (
    <div className="flex flex-col items-center font-thin bg-background py-4 mt-7 w-screen">
      <div className="font-pop font-light text-sm text-text text-center">
        ©2024 with ❤ by{" "}
        <a
          className="text-elements"
          href="https://omnitrek.co/"
          target="_blank"
        >
          omnitrek
        </a>
        . <br />
        All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
