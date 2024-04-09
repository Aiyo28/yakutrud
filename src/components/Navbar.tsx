import Image from "next/image";
import Link from "next/link";
import logo from "../assets/SnowflakeLogo.png";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="item-center m-auto flex max-w-5xl justify-between px-3 py-5 ">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="YakuTrud" />
          <span className="text-xl font-bold tracking-tight">ЯкуТруд</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Опубликовать вакансию</Link>
        </Button>
      </nav>
    </header>
  );
}
