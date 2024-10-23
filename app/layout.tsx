import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import localFont from 'next/font/local'
import { Suspense } from 'react'

import PlayerProvider from "./components/playerContext";
import TabsProvider from "./components/tabsContext";
import TaxonomyProvider from "./components/taxonomyContext";

import styles from './styles/app.module.scss';

import SocialToolbar from './components/social'
import Footer from './components/footer'
import Player from './components/player'
import Search from './components/search'

const myFont = localFont({
  src: '../public/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
})

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

function SearchBarFallback() {
  return <>placeholder</>
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
          <TabsProvider>
            <header className={styles.header}>
              <nav className={`${styles.navigation} navbar navbar-expand-md navbar-dark bg-dark py-2`}>
                <div className="container-fluid">
                  <Link className="navbar-brand" href="/">
                    <img src="/images/brand/logo_white.png" height="60" width="60" />
                  </Link>

                  <div className="mx-2 flex-fill">
                    <Suspense fallback={<SearchBarFallback />}>
                      <Search />
                    </Suspense>
                  </div>

                  <SocialToolbar />


                  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnavdropdown" aria-controls="navbarnavdropdown" aria-expanded="false" aria-label="toggle navigation" data-filters-target="indicator">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse pt-3 pt-md-0" id="navbarnavdropdown">
                  <Navigation></Navigation>
                </div> */}
                </div>
              </nav>

              {/* <div className="container-fluid header__dropdown">

              <div className="collapse multi-collapse scroll-collapse" id="filter-controls" data-filters-target="panel">
                <div className="filters">
                  <div className="d-md-flex flex-row">
                    <div className="filters-header">
                      <Preferences></Preferences>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            </header>

            <TaxonomyProvider>
              <main className={styles.main}>
                {children}
              </main>
            </TaxonomyProvider>

          </TabsProvider>

          <Footer />

          <Player />
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
