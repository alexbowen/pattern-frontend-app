// import Episode from '../../components/episodes/index'

const shows = require('./shows');

import List from '../../components/episodes/dataSet'

import {useSearchParams} from 'next/navigation'

interface SearchProps {
  q: string,
  offset?: string,
  limit?: string,
}
export default async function Browse({ params }: { params: { id: string } }) {
  return (
    <div className="container-fluid">
      <List offset={ 0 } limit={ 6 } q={ params.id.trim().toLowerCase().replace(/-/g, '+') } />
    </div>
  )
}