import '../../globals.scss';

import Item from './item'

import { getData } from './data/pattern'

export type Params = { limit: number, offset: number, q?: string, creator?: string }

export default async function List(params: Params) {

  const data = await getData(params)

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