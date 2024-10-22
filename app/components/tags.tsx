'use client'

import Link from 'next/link'

import tagStyles from './styles/tags.module.scss'

export default function Tags({ tags }) {
  return (
    <ul className={`${tagStyles.tags} ps-0`}>
      {tags.map((tag, key) => (
        <li key={key}>
          <Link href={`/episodes?q=${tag.name || tag}`} className="btn badge me-2">{tag.name || tag}</Link>
        </li>
      ))}
    </ul>
  )
}
