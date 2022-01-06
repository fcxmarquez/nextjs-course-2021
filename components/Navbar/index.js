import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
  return (
      <nav>
        <menu>
          <Link href="/"><a >Home</a></Link>
          <Link href="/about"><a>About</a></Link>
        </menu>
      </nav>
  )
}