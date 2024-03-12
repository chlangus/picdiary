import Image from "next/image";
import Link from "next/link";
import useHeader from "../../hooks/useHeader";

export default function Header() {
  const { email, handleClick } = useHeader();

  return (
    <nav className={`flex justify-around my-10`}>
      <Link href="/">
        <Image
          className="text-left"
          width={220}
          height={40}
          src="/PICDIARY.svg"
          alt="logo"
        />
      </Link>
      <div>
        <span>{email}</span>
        <span
          className="ml-5 text-gray-700 cursor-pointer hover:text-red-700"
          onClick={handleClick}
        >
          로그아웃
        </span>
      </div>
    </nav>
  );
}
