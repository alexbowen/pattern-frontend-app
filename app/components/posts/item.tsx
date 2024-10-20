'use client'
import Link from 'next/link'
// import Image from 'next/image'

import Tags from '../tags'

import '../../globals.scss';
import styles from './styles/post.module.scss';

export default function Item({ item }) {

  return (
    <div key={item.id}>
      <div className={styles.highlight}>
        <h4 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h4>
        <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></p>
      </div>

      <Tags tags={item['_embedded']['wp:term'][1]} />
      <Link href={`/posts/${item.id}`}>read more</Link>
    </div>
  )
}
