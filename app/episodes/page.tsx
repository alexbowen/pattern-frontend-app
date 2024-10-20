'use client';

import List from '../components/episodes/dataSet'

import { useSearchParams } from 'next/navigation'

export default function Browse({ offset = 0, limit = 12, q = '' }) {

  const searchParams = useSearchParams();

  const query = searchParams && searchParams.get("q") ? searchParams.get("q")! : q;

  return (
    <div className="container-fluid content content__primary content--theme-dark">
      <div className="content__container">
        <h1 className="font-dark" data-heading-target="title">{query ? `Search Results for '${query}'` : 'Browse Shows'}</h1>
        <List offset={offset} limit={limit} q={query} pagination_control={ true } />
      </div>
      <span className="content__background"></span>
    </div>
  )
}
