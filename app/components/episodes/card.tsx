'use client'
// import Link from 'next/link'
// import Image from 'next/image'

import '../../globals.scss';
import episodeStyles from './styles/episode.module.scss'
import playable from './styles/playable.module.scss'

import Play from './play'

import { usePlayer } from '../playerContext';

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

  const [cart] = usePlayer();

  return (
    <div id={ item.id } key={ item.id } className={`${ episodeStyles.episode } ${ playable.playable }`}>
      { cart.id === item.id && <span>active</span>}
      <div className={ episodeStyles.episode__header }>
        <img
          srcSet={ `${ item.pictures.medium } 100w, ${ item.pictures.large } 300w` }
          sizes="(max-width: 1200px) 100px, 300px"
          src={ item.pictures.large }
          alt={ item.name }
          className="card-img-top img-fluid" />

          {/* <Image className="card-img-top" src={ episode.pictures.large } alt={ episode.name } width={300} height={300} /> */}

        <div className={`${ episodeStyles.playable__button } ${ playable.playable__button }`}>
          <Play url={item.key} id={item.id} />
        </div>
      </div>

      <div className={`d-flex py-1 ${ episodeStyles.statistics }`}>
        <div className="flex-grow-1 font-dark">
          <span>{ timeToMinutes(item.audio_length) } min</span>
        </div>

        { item.favorite_count > 0 && item.user.username === 'patternradio' &&
        <div className={`${episodeStyles.statistics__likes} ${ episodeStyles.statistics__count} font-dark`}>
          <span>{ item.favorite_count }</span>
        </div>
        }

        { item.repost_count > 0 && item.user.username === 'patternradio' &&
        <div className={`${episodeStyles.statistics__reposts} ${ episodeStyles.statistics__count} ms-2 font-dark` }>
          <span>{ item.repost_count }</span>
        </div>
        }
      </div>
      </div>
  )
}
