import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="hidden md:flex">
        <Image
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={80}
          height={32}
          className="md:block"
        />
        <p className="font-extrabold hidden md:flex justify-center items-center">
          Scribbly
        </p>
      </Link>
      <Link href="/" className="md:hidden">
        <Image
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={80}
          height={80}
          className="mr-2"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
