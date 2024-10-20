import Tags from '../../components/tags'
import Play from '../../components/episodes/play'

import Posts from '../../components/posts/dataSet'
import Episodes from '../../components/episodes/dataSet'

import episodeStyles from '../../components/episodes/styles/episode.module.scss'
import playable from '../../components/episodes/styles/playable.module.scss'

const getEpisode = async (id) => {
  const episodeResponse = await fetch(`http://localhost:3000/api/episode/${id}`, {
    method: 'GET',
  })

  return episodeResponse.json()
}

export default async function Browse({ params }: { params: { id: string } }) {

  const episode = await getEpisode(params.id)

  return (
    <div>
      <div className="container-fluid content content__primary content--theme-dark">
        <div className="content__container">
          <h1 className="font-dark">{episode.name}</h1>

          <div className="d-md-flex">
            <div className={`${playable.playable} flex-fill`}>
              <div className={episodeStyles.episode__header}>
                <img
                  srcSet={`${episode.pictures.medium} 100w, ${episode.pictures.large} 300w`}
                  sizes="(max-width: 1200px) 100px, 300px"
                  src={episode.pictures.large}
                  alt={episode.name}
                  className=" float-start me-3" />

                {/* <Image className="card-img-top" src={ episode.pictures.large } alt={ episode.name } width={300} height={300} /> */}

                <div className={`${episodeStyles.playable__button} ${playable.playable__button}`}>
                  <Play url={episode.key} />
                </div>
              </div>
            </div>

            <p>{episode.description}</p>

          </div>

          <div className="d-md-flex mt-3">
            <h5 className="flex-fill font-dark">{` ${Math.floor(episode.audio_length * 1000 / 60000)} mins`}</h5>
            <Tags tags={episode.tags} style={'button'} className="align-self-end" />
          </div>
        </div>
        <span className="content__background"></span>
      </div>

      <div className="container-fluid content content--theme-light">
        <h2 className="font-dark">Related Reading</h2>
        <Posts heading_text={'Related reading'} episode_context={episode.tags} per_page={2} template={'feature'} />
      </div>

      <div className="container-fluid content content--theme-dark">
        <h2 className="font-dark">Related Listening</h2>
        <Episodes offset={0} limit={6} heading_text={'Related listening'} episode_context={episode.tags} tabs_context={false} />
      </div>
    </div>
  )
}
