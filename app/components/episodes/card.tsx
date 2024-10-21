'use client'

import '../../globals.scss';
import episodeStyles from './styles/episode.module.scss'
import playable from './styles/playable.module.scss'

import Play from './play'

import { usePlayer } from '../playerContext';

const timeToMinutes = (d) => Math.floor(d * 1000 / 60000)

export default function Item({ item, active_text }) {

  const [cart] = usePlayer();

  return (
    <div id={ item.id } key={ item.id } className={`${ episodeStyles.episode }`}>
      
      <div className={ episodeStyles.episode__header }>
      { cart.id === item.id && <div className={ `${episodeStyles.active} d-flex` }><span>Press play in audio player<br />to listen to { active_text }</span></div>}
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
