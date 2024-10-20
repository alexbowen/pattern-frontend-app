import Link from 'next/link'

import tags from '../../styles/tags.module.scss'

import '../globals.scss';

export default function Navigation() {
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="/about">About</Link>
      </li>
    </ul>
  )
}
