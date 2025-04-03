'use client'

import Link from "next/link";
import { useState } from "react";

type LinkType = {
  url: string,
  name: string,
  label: string
}

const links: LinkType[] = [
  {
    url: '#',
    name: 'all',
    label: 'Todo'
  },
  {
    url: '#',
    name: 'drinks',
    label: 'Bebidas'
  },
  {
    url: '#',
    name: 'food',
    label: 'Comida'
  }
]

export default function NavLinksContainer(): JSX.Element {
  const [selectedLink, setSelectedLink] = useState<string>('all');

  return (
    <ul className="flex gap-8 items-center h-full">
      {
        links.map((link) => {
          return (
            <li key={link.name} >
              <Link
                href={link.url}
                className={`${selectedLink === link.name ? 'border-ring' : 'border-transparent'} border-b-4 pb-1 transition-all`}
                onClick={() => setSelectedLink(link.name)}
              >
                {link.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}