'use client'

import tagStyles from './styles/tags.module.scss'

export default function Tags({ tags, style = 'button' }) {

  const Tag = (props) => {
    if (style === 'button') {
      return <a className="btn btn-outline-light me-2">{props.name}</a>
    } else {
      return <span className="me-1 badge">{props.name}</span>
    }
  }

  return (
    <ul className={`${tagStyles.tags} ps-0`}>
      {tags.map((tag, key) => (
        <li key={key}>
          <Tag name={tag.name || tag} />
        </li>
      ))}
    </ul>
  )
}
