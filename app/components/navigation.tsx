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
      <Link className="nav-link" aria-current="page" href="/browse">Browse</Link>
    </li>
    <li className="nav-item">
      <a data-action="click->navigation#navigate" className="nav-link" href="/shows">Shows</a>
    </li>
    <li className="nav-item">
      <a data-action="click->navigation#navigate" className="nav-link" href="/live" data-external="true">Live</a>
    </li>
    <li className="nav-item">
      <a data-action="click->navigation#navigate" className="nav-link" href="/posts">Blog</a>
    </li>
    <li className="nav-item">
      <a data-action="click->navigation#navigate" className="nav-link" href="/about">About</a>
    </li>
  </ul>
  )
}
