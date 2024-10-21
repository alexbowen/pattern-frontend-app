'use client'

import tagStyles from './styles/tags.module.scss'

export default function Tags({ tags }) {
  return (
    <ul className={`${tagStyles.tags} ps-0`}>
      {tags.map((tag, key) => (
        <li key={key}>
          <a className="btn badge me-2">{tag.name || tag}</a>
        </li>
      ))}
    </ul>
  )
}
