'use client'

import Link from 'next/link'
import Tags from '../tags'

import '../../globals.scss';

export default function Feature({ item }) {

  return (
    <div>
      <h3 className="font-dark" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h3>
      <div className="mb-3 clearfix">
        {item['_embedded']['wp:featuredmedia'] && item['_embedded']['wp:featuredmedia'][0] && <img src={item['_embedded']['wp:featuredmedia'][0]['source_url']} className="me-3 float-start" width="120" height="120" alt="Picture of the author" />}
        <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></p>

        <Link href={`/posts/${item.id}`} className="link-secondary">Read more</Link>
        <Tags tags={item['_embedded']['wp:term'][1]} />
      </div>
    </div>
  )
}

