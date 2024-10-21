
import { Suspense } from 'react'

import Episodes from './components/episodes/dataSet'
import Posts from './components/posts/dataSet'
import Tabs from './components/tabs'

function LoadingFallback() {
  return <p>loading</p>
}

export default async function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className={`row mb-1`}>
          <Tabs />
          {/* <div className="col-12 p-3">
            <div>
              <p>stream ui</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container-fluid content content__primary content--theme-dark">
        <div className="content__container">
          <h2 className="font-medium">New On Pattern Radio</h2>
          <Episodes offset={0} limit={6} creator={'internal'} tabs_context={true} />
        </div>
        <span className="content__background"></span>
      </div>

      <div className="container-fluid content content--theme-light">
        <Suspense fallback={<LoadingFallback />}>
          <div className="row">

            <div className="col-12 col-md-6">
              <h3 className="font-dark">Reviews & Releases</h3>
              <Posts offset={0} per_page={2} exclude={0} categories={[39]} tax_relation={'AND'} tabs_context={true} episode_context={[]} />
            </div>

            <div className="col-12 col-md-6">
              <h3 className="font-dark">Whats On</h3>
              <Posts offset={0} per_page={2} exclude={0} categories={[33]} tax_relation={'AND'} tabs_context={true} episode_context={[]} />
            </div>
          </div>
        </Suspense>
      </div>

      <div className="container-fluid content content__primary content--theme-dark">
      <div className="content__container">
        <h2 className="font-medium">New Recommended Shows</h2>
        <Episodes offset={0} limit={6} creator={'external'} tabs_context={true} />
        </div>
        <span className="content__background"></span>
      </div>
    </div>
  )
}
