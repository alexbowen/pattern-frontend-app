'use client'

import Link from 'next/link'
// import Image from 'next/image'

import '../../styles/globals.scss';
import episode from '../../styles/episode.module.scss'
import playable from '../../styles/playable.module.scss'
import tags from '../../styles/tags.module.scss'

const showData = (name) => {
  const parts = name.split('-');
  return {
    title: parts[0],
    host: parts[1],
    detail: parts[2],
  }
}

const showTitleId = (title) => title.toLowerCase().replace(/ /g, '-')

const timeToMinutes = (d) => Math.floor(d * 1000 / 60000)

export default function Item(props) {
  return (
    <div key={ props.episode.id } className={`${ episode.episode } ${ playable.playable }`}>
      <div className={ episode.episode__header }>
        <img
          srcSet={ `${ props.episode.pictures.medium } 100w, ${ props.episode.pictures.large } 300w` }
          sizes="(max-width: 1200px) 100px, 300px"
          src={ props.episode.pictures.large }
          alt={ props.episode.name }
          className="card-img-top" />

          {/* <Image className="card-img-top" src={ props.episode.pictures.large } alt={ props.episode.name } width={300} height={300} /> */}

        <div className={`${ episode.playable__button } ${ playable.playable__button }`}>
          <span className="button">
            {/* <button onClick={props.playEpisodeHandler(`https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.episode.key }`)}></button> */}
            <button onClick={async () => {
      await props.playEpisodeHandler(`https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.episode.key }`);
    }}></button>
          </span>
        </div>

        <div className={`d-flex p-2 pb-0 ${ episode.statistics }`}>
          <div className="flex-grow-1">
            <span>{ timeToMinutes(props.episode.audio_length) } min</span>
          </div>

          { props.episode.favorite_count > 0 && props.episode.user.username === 'patternradio' &&
          <div className={`${episode.statistics__likes} ${ episode.statistics__count}`}>
            <span>{ props.episode.favorite_count }</span>
          </div>
          }

          { props.episode.repost_count > 0 && props.episode.user.username === 'patternradio' &&
          <div className={`${episode.statistics__reposts} ${ episode.statistics__count} ms-2` }>
            <span>{ props.episode.repost_count }</span>
          </div>
          }
        </div>
      </div>

      <div className="card-body">
  
      { props.episode.user.username === 'patternradio'
      ? <div>
          <h5 className="card-title">
            <a href="/episode/{{ props.episode.slug }}" className="nav-link mb-1">{ showData(props.episode.name).detail }</a>
          </h5>

          <h5 className="card-title">
            { showData(props.episode.name).host }
          </h5>

          <Link href={`/show/${showTitleId(showData(props.episode.name).title)}`} className="nav-link fs-6">{ showData(props.episode.name).title }</Link>
        </div>
      : <div>
          <h5 className="card-title">{ showData(props.episode.name).title }</h5>
          <p className="card-text">{ props.episode.user.name }</p>
        </div>
      }

        <ul className={`${tags.tags} ps-0 mt-1`} data-action="click->episodes#tagSearch">
        {props.episode.tags.map((tag) => (
          <li key={ tag.name }>
            <span className="me-1 badge">{ tag.name }</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}