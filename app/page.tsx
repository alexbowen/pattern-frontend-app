import styles from './styles/page.module.scss'
import List from './components/episodes/list'

export default function Home() {
  return (

    <div className="container-fluid">
      <div className={`${ styles.row } row mb-3 mb-md-0`}>
        <div className={ styles.orange }>
          <div className="col-12 col-xl-4 pb-4">
            <div className="flex-fill">
              <h1>Musical selections and discovery for enlightened listening</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`${ styles.row } row`}>
        <div className="col-12 mb-2">
          <div className="order-lg-1 episodes list" id="episodes" data-controller="episodes heading" data-action="episodes:heading->heading#update" data-episodes-creator-value="internal" data-episodes-title-value="New On Pattern Radio" data-filtered="true" data-episodes-items-value="6" data-episodes-offset-value="0">
            {/* <div className="heading d-flex">
              {% include "partial/list/_heading.njk" %}
            </div> */}

            <div className={`${ styles.footer } d-flex p-2`}>
              <div className="flex-grow-1">
                <p className="mb-0">Click show to load in player</p>
              </div>
              <a data-action="click->navigation#navigate" className="nav-link" href="/browse">Browse all shows</a>
            </div>
            
            <List offset={ '0' } limit={ '6' } creator={ 'internal' } />

            <div className={`${ styles.footer } d-flex p-2`}>
              <div className="flex-grow-1">
                <p className="mb-0">Click show to load in player</p>
              </div>
              <a data-action="click->navigation#navigate" className="nav-link" href="/browse">Browse all shows</a>
            </div>

            <List offset={ '0' } limit={ '6' } creator={ 'external' } />

          </div>
        </div>
      </div>
    </div>
  )
}
