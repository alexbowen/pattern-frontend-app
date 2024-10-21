

import List from '../components/episodes/dataSet'
import Posts from '../components/posts/dataSet'

export default function Browse({ searchParams }) {

  return (
    <div>
    <div className="container-fluid content content__primary content--theme-dark">
      <div className="content__container">
        <h1 className="font-dark" data-heading-target="title">{searchParams.q ? `Search Results for '${searchParams.q}'` : 'Browse Shows'}</h1>
        <List offset={ 0 } limit={6} q={searchParams.q} pagination_control={ true } />
      </div>
      <span className="content__background"></span>
    </div>

<div className="container-fluid content content--theme-light">
<h2 className="font-dark">Related Reading</h2>
<Posts heading_text={'Related reading'} episode_context={ []} per_page={2} exclude={0} template={'feature'} offset={2} categories={[20]} tax_relation={'OR'} />
</div>
</div>
  )
}
