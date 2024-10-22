'use client'
import Link from 'next/link'

import '../../globals.scss';
import episodeStyles from './styles/episode.module.scss'

import Card from './card'

import Tags from '../tags'

const showData = (name) => {
  const parts = name.split('-');
  return {
    title: parts[0],
    host: parts[1],
    detail: parts[2],
  }
}

export default function Item({ item }) {

  return (
    <div>
      <Card item={item} active_text={ showData(item.name).title } />

      <div className={ episodeStyles.episode__title }>
      {item.user.username === 'patternradio'
        ? <div>
          <h4>{showData(item.name).title}</h4>
          <h4>
            <Link href={`/episodes/${item.slug}`} className={ `${episodeStyles.episode__link} mb-1` }>{showData(item.name).detail}</Link>
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
