import Link from "next/link"
import MenuIcon from "../icons/menu-icon"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Input } from "../ui/input"
import UserIcon from "../icons/user-icon"
import ShoppingCartIcon from "../icons/shopping-cart-icon"

type LinkType = {
  url: string,
  label: string,
  icon: JSX.Element
}

const links: LinkType[] = [
  {
    url: '#',
    label: 'Cuenta',
    icon: <UserIcon />
  },
  {
    url: '#',
    label: 'Carrito',
    icon: <ShoppingCartIcon />
  }
];

export default function DropdownMenuContainer(): JSX.Element {

  return (
    <div className="md:hidden flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="border-2 p-2 rounded-xl">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {
            links.map((link) => {
              return (
                <DropdownMenuLabel key={link.label}>
                  <Link className="flex items-center gap-2 p-2 text-lg" href={link.url}>
                    {link.icon}
                    {link.label}
                  </Link>
                </DropdownMenuLabel>
              )
            })
          }
          <DropdownMenuLabel>
            <Input
              type="search"
              placeholder='Buscar...'
              className="max-w-60"
            />
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}