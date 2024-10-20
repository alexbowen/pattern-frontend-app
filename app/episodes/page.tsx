

import List from '../components/episodes/dataSet'

export default function Browse({ searchParams }) {

  return (
    <div className="container-fluid content content__primary content--theme-dark">
      <div className="content__container">
        <h1 className="font-dark" data-heading-target="title">{searchParams.q ? `Search Results for '${searchParams.q}'` : 'Browse Shows'}</h1>
        <List offset={ 0 } limit={12} q={searchParams.q} pagination_control={ true } />
      </div>
      <span className="content__background"></span>
    </div>
  )
}
