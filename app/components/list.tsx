'use client'

import styles from './styles/list.module.scss';

import { useEffect, useState } from 'react';

import Item from './posts/item'
import Tags from './tags'
import Link from 'next/link'

import { useTabs } from './tabsContext';

// export type params = { limit: string, offset: string, q?: string, creator?: string }

// const config = { Item }

export interface ParamsInt { limit: string, offset: string, q?: string, creator?: string, filters?: Array<string> }



export default function List({ items = [], Template, heading_text }) {
  return (
      <ul className={`row g-5 ${ styles.list }`}>
        {items.map((item, key) => (
          <li className="col-6 col-md-4 col-xl-2 playable" key={ key }>
          <Template item={ item } />
          </li>
        ))}
      </ul>

  )
}