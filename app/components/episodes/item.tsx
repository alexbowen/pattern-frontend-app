'use client'
// import Link from 'next/link'
// import Image from 'next/image'

import '../../globals.scss';
import episodeStyles from './styles/episode.module.scss'
import playable from './styles/playable.module.scss'

import Play from './play'
import Card from './card'

import Tags from '../tags'
import Link from 'next/link'

const timeToMinutes = (d) => Math.floor(d * 1000 / 60000)


const showData = (name) => {
  const parts = name.split('-');
  return {
    title: parts[0],
    host: parts[1],
    detail: parts[2],
  }
}

const showTitleId = (title) => title.trim().toLowerCase().replace(/ /g, '-')

export default function Item({ item }) {

  return (
    <div>
      <Card item={item} />

      <div className={ episodeStyles.episode__title }>
      {item.user.username === 'patternradio'
        ? <div>
          <h4>{showData(item.name).title}</h4>
          <h4>
            <Link href={`/episodes/${item.slug}`} className="nav-link mb-1">{showData(item.name).host} - {showData(item.name).detail}</Link>
          </h4>
        </div>
        : <div>
          <h4>{item.user.name}</h4>
          <h4>{showData(item.name).title}</h4>
        </div>
      }
      </div>

      <Tags tags={item.tags} />
    </div>
  )
}
