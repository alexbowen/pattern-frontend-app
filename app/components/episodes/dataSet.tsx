'use client'

import '../../globals.scss';

import { useEffect, useState } from 'react';

import Item from './item'
import ListComponent from '../list'
import Pagination from '../pagination'
import getEpisodes from './actions'

import { useTabs } from '../tabsContext'
import { useTaxonomy } from '../taxonomyContext'

export interface ParamsInt { episode_context?: Array<object>, tabs_context?: boolean, pagination_control?: boolean, limit: number, offset: number, heading_text?: string, q?: string, creator?: string, filters?: Array<string> }

const categoryMap = {
  category21: [
    'broken beat',
    'electro',
    'electronica',
    'house',
    'techno',
    'deep house',
    'deep techno'
  ],
  category25: [
    'blues',
    'broken beat',
    'disco',
    'dub',
    'funk',
    'hip hop',
    'jazz',
    'punk',
    'reggae',
    'rock',
    'soul',
    'world'
  ]
}

const getTagIds = (episodeTags, taxonomyTags) => {
  const tagIds:number[] = []

  episodeTags.forEach(tag => {
    const taxonomyItem = taxonomyTags.find(t => tag.name.toLowerCase().includes(t.name.toLowerCase()));
    
    if (taxonomyItem) {
      tagIds.push(taxonomyItem.name) // eslint-disable-line
    }
  })

  return tagIds
}

export default function DataSet(params: ParamsInt) {

  const [tabs] = useTabs();
  const [taxonomy] = useTaxonomy();

  const [ listItems, setListItems ] = useState([]);

  const params2 = structuredClone(params)

  let filters = ''
  // console.log('tabs context', params, tabs, categoryMap[`category${tabs.active}`])
  if (params.tabs_context && categoryMap[`category${tabs.active}`]) {
    filters = categoryMap[`category${tabs.active}`]
  }
// console.log('episode context', params, taxonomy.tags)
  if (params.episode_context && params.episode_context.length && taxonomy.tags) {
    const tagIds = getTagIds(params.episode_context, taxonomy.tags)
    filters = tagIds.join(',')
  }

  const params3 = { ...params2, filters }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEpisodes(params3)
        setListItems(data.items);
        // setLoading(false);
      } catch (error) {
        console.log('error episdoes data set', error)
        // setError(error);
        // setLoading(false);
      }
    };

    fetchData();
  }, [tabs.active]);

  return (
    <div>
      {params.pagination_control && <Pagination /> }
      <ListComponent items={ listItems } Template={ Item } />
    </div>
  )
}