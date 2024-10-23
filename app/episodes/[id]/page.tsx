import Tags from '../../components/tags'
import Play from '../../components/episodes/play'

import Posts from '../../components/posts/dataSet'
import Episodes from '../../components/episodes/dataSet'

import episodeStyles from '../../components/episodes/styles/episode.module.scss'
import playable from '../../components/episodes/styles/playable.module.scss'

const getEpisode = async (id) => {
  const episodeResponse = await fetch(`https://pattern-frontend-app-a4f7fa601daf.herokuapp.com//api/episode/${id}`, {
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

          <div className="d-flex">

              <div className={episodeStyles.episode__header}>
                <img
                  srcSet={`${episode.pictures.medium} 200w, ${episode.pictures.large} 300w`}
                  sizes="(max-width: 1200px) 200px, 300px"
                  src={episode.pictures.large}
                  alt={episode.name} />

                {/* <Image className="card-img-top" src={ episode.pictures.large } alt={ episode.name } width={300} height={300} /> */}
                <div className={`${episodeStyles.playable__button} ${playable.playable__button}`}>
                  <Play url={episode.key} id={episode.id} />
                </div>
              </div>


            <p className="ms-3">{episode.description}</p>

          </div>

          <div className="d-md-flex mt-3">
            <h5 className="flex-fill font-dark">{` ${Math.floor(episode.audio_length * 1000 / 60000)} mins`}</h5>
            <Tags tags={episode.tags} />
          </div>
        </div>
        <span className="content__background"></span>
      </div>


      <div className="container-fluid content content--theme-light">
        <div className="row">

          <div className="col-12">
            <h2 className="font-dark">Reviews & Releases</h2>
            <Posts offset={0} per_page={2} exclude={0} categories={[39]} tax_relation={'AND'} tabs_context={true} episode_context={[]} template={'feature'} />
          </div>

          <div className="col-12">
            <h2 className="font-dark">Whats On</h2>
            <Posts offset={0} per_page={2} exclude={0} categories={[33]} tax_relation={'AND'} tabs_context={true} episode_context={[]} template={'feature'} />
          </div>
        </div>
      </div>

      <div className="container-fluid content content--theme-dark">
        <h2 className="font-dark">Related Listening</h2>
        <Episodes offset={0} limit={6} heading_text={'Related listening'} episode_context={episode.tags} tabs_context={false} />
      </div>
    </div>
  )
}
