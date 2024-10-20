'use client'

import '../../globals.scss';

import Tags from '../tags'
import List from '../list'

export default function List({ items }) {
  return (
    <div className="row gx-2 gx-sm-4">
    {items && items.map((item) => (
      <div key={ item.id }>
        <h1>{ item.title.rendered }</h1>
        <div dangerouslySetInnerHTML={{ __html:item.content.rendered }}></div>
        {/* <Tags tags={ item.labels } /> */}
      </div>
    ))}
    </div>
  )
}
