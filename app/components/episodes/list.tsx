import '../../globals.scss';

import Item from './item'

export type Params = { limit: string, offset: string, q?: string, creator?: string }

export default async function List(params: Params) {

  console.log('parama', params)

  const response = await fetch(`http://localhost:3000/api/search/?${new URLSearchParams(params)}`, {
    method: 'GET',
  })

  const data = await response.json()

  return (
    <div className="row episodes gx-2 gx-sm-4">
    {data.items.map((e) => (
      <div className="col-6 col-sm-4 col-xl-3 col-xxl-2 playable episode card" key={ e.id }>
        <Item episode={ e } />
      </div>
    ))}
    </div>
  )
}