'use client'

import Image from "next/image";
import ThemeToggleButton from "./theme-toggle-button";
import { Input } from "@/components/ui/input";
import ShoppingCartIcon from "./icons/shopping-cart-icon";
import UserIcon from "./icons/user-icon";
import MenuIcon from "./icons/menu-icon";
import { Button } from "@/components/ui/button"

export default function NavBar(): JSX.Element {

  return (
    <nav className="grid md:grid-cols-4 grid-cols-1 p-4 md:px-8 md:py-0 sticky gap-8">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center md:col-span-2">
        <Image
          src='/images/logo.webp'
          alt='Logo'
          width={300}
          height={0}
        />
        <div className="md:hidden flex justify-center">
          <Button variant='outline'>
            <MenuIcon />
          </Button>
        </div>
        <ul className="flex gap-8 items-center h-full">
          <li className="border-b-2 border-green-700">Todo</li>
          <li>Bebidas</li>
          <li>Comida</li>
        </ul>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <Input
          type="search"
          placeholder='Buscar...'
          className="max-w-60"
        />
      </div>
      <div className="hidden md:flex items-center justify-center md:justify-end gap-6">
        <UserIcon />
        <ShoppingCartIcon />
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
