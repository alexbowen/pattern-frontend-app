

import List from '../components/episodes/dataSet'
import Posts from '../components/posts/dataSet'

export default function Browse({ searchParams }) {

  return (
    <div>
      <div className="container-fluid content content__primary content--theme-dark">
        <div className="content__container">
          <h1 className="font-dark" data-heading-target="title">{searchParams.q ? `Search Results for '${searchParams.q}'` : 'Browse Shows'}</h1>
          <List offset={0} limit={6} q={searchParams.q} pagination_control={true} />
        </div>
        <span className="content__background"></span>
      </div>

      <div className="container-fluid content content--theme-light">
      <h2 className="font-dark">Reviews & Releases</h2>
      <Posts offset={0} per_page={2} exclude={0} categories={[39]} tax_relation={'AND'} tabs_context={true} episode_context={[]} template={'feature'} />

      </div>

      <div className="container-fluid content content--theme-dark">
      <h2 className="font-dark">Whats On</h2>
      <Posts offset={0} per_page={2} exclude={0} categories={[33]} tax_relation={'AND'} tabs_context={true} episode_context={[]} template={'feature'} />
      </div>
    </div>
  )
}
