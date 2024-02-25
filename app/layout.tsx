import type { Metadata } from 'next'
import Link from 'next/link'

import '../styles/globals.scss';
import styles from '../styles/main.module.scss'

import SocialToolbar from '../components/social'
import Player from '../components/player'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.patternradio.net'),
  title: 'Pattern Radio - Online Music Broadcasting',
  description: 'Streamed music from across the spectrum curated for enlightened listening. Live mixes, selections and soundtracks for you to enjoy and share',
  openGraph: {
    title: 'Pattern Radio - Online Music Broadcasting',
    description: 'Streamed music from across the spectrum curated for enlightened listening. Live mixes, selections and soundtracks for you to enjoy and share',
    images: '/images/misc/patternradiosocial.jpg',
    url: '/',
    type: 'music.radio_station',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={ styles.header }>
          <nav className={`${ styles.navigation } navbar navbar-expand-md navbar-dark bg-dark py-2`}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="/images/brand/logo_white.png" height="55" width="55"/>
              </a>

              <SocialToolbar />
            
              <a className="nav-link toggle-link order-md-2 ps-2" data-bs-toggle="collapse" data-bs-target=".multi-collapse" href="#filter-controls" role="button" aria-expanded="false" aria-controls="filter-controls">
                Preferences
                <span className="filters-selected-status" data-filters-target="status"></span>
                <span className="toggle-link__icon"></span>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnavdropdown" aria-controls="navbarnavdropdown" aria-expanded="false" aria-label="toggle navigation" data-filters-target="indicator">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse pt-3 pt-md-0" id="navbarnavdropdown">
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
              </div>
            </div>
          </nav>
        </header>

        <main className={ styles.main }>
          {children}
        </main>

        <footer className="container-fluid py-3">
          <span>&copy; Pattern Radio 2024</span>
        </footer>

        <Player />
      </body>
    </html>
  )
}