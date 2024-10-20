'use client'

import Item from './item'
import Tags from '../tags'
import Posts from '../posts/dataSet'

export default function Episode({ episode, posts }) {

  return (
    <div>
      <h1>{ episode.name }</h1>
      <div className="d-md-flex">
      
        <Item episode={ episode } />

        <div className="flex-grow-1">
      {/* {% set title = showData(data.episode.name).title %}

<h3>{{ showData(data.episode.name).detail }}</h3>

<h2 class="mb-1">{{showData(data.episode.name).host}}</h2>

<p class="mb-1">{{ showData(data.episode.name).title }}</p> */}


        </div>
      </div>
      <pre>
      <p>
        { episode.description }
      </p>
      </pre>
      <Posts items={ posts.items } />
    </div>
  )
}
