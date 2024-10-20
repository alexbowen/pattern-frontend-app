'use client'

import '../../globals.scss'
import styles from '../styles/list.module.scss'

import Feature from './feature'
import Item from './item'
import getPosts from './actions'
import Pagination from '../pagination'

import { useEffect, useState } from 'react';

import { useTabs } from '../tabsContext'

export interface ParamsInt { episode_context: Array<object>, tabs_context?: boolean, pagination_control?: boolean, exclude: number, per_page: number, offset: number, heading_text?: string, categories: Array<number>, tax_relation: string, template?: string }

const ParamsDefaults: ParamsInt = {
  tabs_context: false,
  exclude: 0,
  offset: 0,
  per_page: 2,
  pagination_control: false,
  categories: [],
  episode_context: [],
  heading_text: '',
  tax_relation: 'AND',
  template: 'item',
}

import { useTaxonomy } from '../taxonomyContext'

const templateMapping = {
  item: Item,
  feature: Feature
}

const getTagIds = (episodeTags, taxonomyTags) => {
  const tagIds:number[] = []

  episodeTags.forEach(tag => {
    const taxonomyItem = taxonomyTags.find(t => tag.name.toLowerCase() === t.name.toLowerCase())

    if (taxonomyItem) {
      tagIds.push(taxonomyItem.id)
    }
  })

  return tagIds
}

export default function DataSet(params: ParamsInt) {

  const completeParams = { ...ParamsDefaults, ...params }

  console.log('comparams', completeParams)

  const [items, setItems] = useState([]);

  const [tabs] = useTabs()
  const [taxonomy] = useTaxonomy()

  const ItemTemplate = templateMapping[completeParams.template || 'item']

  useEffect(() => {
    const fetchData = async () => {

      const url = new URL(`http://localhost:3000/api/blog`)
      const searchParams = url.searchParams

      let allCategories

      searchParams.set('exclude', completeParams.exclude.toString())
      searchParams.set('offset', completeParams.offset.toString())
      searchParams.set('per_page', completeParams.per_page.toString())

      if (completeParams.tabs_context) {
        allCategories = [...completeParams.categories, tabs.active]
        searchParams.set('categories[terms]', allCategories)
        searchParams.set('categories[operator]', completeParams.tax_relation.toString())
        searchParams.set('tax_relation', completeParams.tax_relation.toString())
      }

      if (completeParams.episode_context.length && taxonomy.tags) {
        const tagIds = getTagIds(completeParams.episode_context, taxonomy.tags)
        searchParams.set('tags[terms]', tagIds.join(','))
        searchParams.set('tax_relation', 'AND')
      }

      try {
        const data = await getPosts(url.href)
        setItems(data)
        // setLoading(false);
      } catch (error) {
        console.log('error client url', error)
        // setError(error);
        // setLoading(false);
      }
    }

    fetchData();
  }, [tabs.active]);

  return (
    <div>
      {params.pagination_control && <Pagination /> }
      <ul className={`row g-4 ${styles.list}`}>
        {items.map((item, key) => (
          <li className="col-12 col-xl-6 playable" key={key}>
            <ItemTemplate item={item} />
          </li>
        ))}
      </ul>
      {params.pagination_control && <Pagination /> }
    </div>
  )
}
