import React from 'react'
import Link from 'next/link'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Posts',
    href: '/posts'
  }
]
const Navigation = () => {
  return (
    <header className="flex h-24 border-2">
      <nav>
        <ul className="flex flex-row gap-2 p-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
