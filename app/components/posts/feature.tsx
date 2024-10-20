import Link from 'next/link'
import Tags from '../tags'

import '../../globals.scss';

export default function Feature({ item }) {

  return (
    <div>
      <h4 className="font-dark" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h4>
      <div className="mb-3 clearfix">
        {item['_embedded']['wp:featuredmedia'] && item['_embedded']['wp:featuredmedia'][0] && <img src={item['_embedded']['wp:featuredmedia'][0]['source_url']} className="me-3 mb-2 float-start" width="200" height="200" alt="Picture of the author" />}
        <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></p>

        <Link href={`/posts/${item.id}`}>read more</Link>
        <Tags tags={item['_embedded']['wp:term'][1]} style={'badge'} />
      </div>
    </div>
  )
}

