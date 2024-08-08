import Image from "next/image";
import Logo from "@/assets/images/omnitrek-hor-white.svg";
import { navbarData } from "@/data/Data";
import Link from "next/link";

type HeaderProps = {};

let navbarLinks: React.ReactNode[] = [];

for (let i = 0; i < navbarData.length; i++) {
  let navbarLink = navbarData[i];
  navbarLinks = [
    ...navbarLinks,
    <Link key={i} href={navbarLink.link} className="text-text">
      {navbarLink.name}
    </Link>,
  ];
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <div className="flex justify-start items-center">
      <div>
        <Image src={Logo} alt="omnitrek logo" width={180} />
      </div>
      <div>{navbarLinks}</div>
    </div>
  );
};

export default Header;
