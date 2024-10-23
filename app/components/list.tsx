'use client'

import styles from './styles/list.module.scss'

export interface ParamsInt { limit: string, offset: string, q?: string, creator?: string, filters?: Array<string> }

export default function List({ items = [], Template }) {
  return (
    <ul className={`row ${styles.list}`}>
      {items.map((item, key) => (
        <li className="col-6 col-md-4 col-xl-2 mt-4 playable" key={key}>
          <Template item={item} />
        </li>
      ))}
    </ul>
  )
}