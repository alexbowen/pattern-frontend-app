import styles from './styles/page.module.scss'
import List from './components/episodes/list'

export default function Home() {
  return (

    <div className="container-fluid">
      <div className={`${ styles.row } ${ styles.primary } row mb-3 mb-md-0`}>


          <h1>Musical selections and discovery for enlightened listening</h1>


          <div className={`col-12 col-md-4 my-4`}>
          <div className={`${ styles.content }`}>
            <p>stream ui</p>
            </div>
          </div>

          <div className={`col-12 col-md-4 my-4`}>
          <div className={`${ styles.content }`}>
            news
          </div>
          </div>

          <div className={`col-12 col-md-4 my-4`}>
          <div className={`${ styles.content }`}>
            shows
          </div>
          </div>

  

      </div>


<h2>New On Pattern Radio</h2>
      <List offset={ '0' } limit={ '6' } creator={ 'internal' } />

      <h2>New Recommended Shows</h2>
            <List offset={ '0' } limit={ '6' } creator={ 'external' } />



    </div>
  )
}
