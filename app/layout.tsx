import type { Metadata } from 'next'
import Script from 'next/script'

import PlayerProvider from "./PlayerContext";

import '../styles/globals.scss';
import styles from '../styles/main.module.scss'

import SocialToolbar from '../components/social'
import Player from '../components/player'
import Navigation from '../components/navigation'
import Preferences from '../components/preferences'

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
      <PlayerProvider>
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
                <Navigation></Navigation>
              </div>
            </div>
          </nav>

          <div className="container-fluid header__dropdown">

            <div className="collapse multi-collapse scroll-collapse" id="filter-controls" data-filters-target="panel">
              <div className="filters">
                <div className="d-md-flex flex-row">
                  <div className="filters-header">
                    <Preferences></Preferences>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={ styles.main }>
          <div>{children}</div>
        </main>

        <footer className="container-fluid py-3">
          <span>&copy; Pattern Radio 2024</span>
        </footer>

        <Player url={'https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=/patternradio/the-lightbox-alex-bowen-4-may-2024/'} />
        </PlayerProvider>
      </body>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
    </html>
  )
}