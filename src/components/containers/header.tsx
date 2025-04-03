import Image from "next/image";
import ThemeToggleButton from "../ui/theme-toggle-button";
import { Input } from "@/components/ui/input";
import ShoppingCartIcon from "../icons/shopping-cart-icon";
import UserIcon from "../icons/user-icon";
import Link from "next/link";
import DropdownMenuContainer from "./dropdown-menu-container";
import NavLinksContainer from "./nav-links-container";

export default function Header(): JSX.Element {  

  return (
    <header className="grid md:grid-cols-4 grid-cols-1 md:px-8 md:py-0 sticky gap-8 mt-10 md:mt-0">
      <nav className="flex flex-col md:flex-row items-center gap-6 justify-center md:col-span-2">
        <Image
          src='/images/logo.webp'
          alt='Logo'
          width={150}
          height={0}
          className="w-[200px] md:w-[300px]"
        />
        <DropdownMenuContainer />
        <NavLinksContainer />
      </nav>

      <div className="hidden md:flex items-center justify-center md:justify-end">
        <Input
          type="search"
          placeholder='Buscar...'
          className="max-w-60"
        />
      </div>

      <div className="hidden md:flex items-center justify-center md:justify-end gap-6">
        <Link href='#'>
          <UserIcon />
        </Link>
        <Link href='#'>
          <ShoppingCartIcon />
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  )
}
