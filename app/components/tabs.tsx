'use client'

import styles from './styles/tabs.module.scss';

import { useTabs } from './tabsContext';

import Tab from './tab'

import { useEffect, useState } from 'react';

export default function Tabs() {

  const [cart] = useTabs();

  const [ active, setActive ] = useState(cart.active);

  useEffect(() => {
    if (cart.active) {
      // localStorage.setItem('pattern-radio-style', cart.active.toString());
      setActive(cart.active)
    }
  }, [cart]);

  return (
    <ul className={ styles.tabs } role="tablist" data-tabs-active={ active ? true : false }>
      <li>
    <Tab title="Electronic sounds" subTitle="House, Techno, Electronica, Dubstep, Broken Beat, Electro, Breaks, Downtempo" categoryId="21" />
    </li>
    <li>
    <Tab title="Organic sounds" subTitle="Jazz, Funk, Soul, World, Latin, Afro, Disco, Dub, Reggae, Punk" categoryId="25" />
    </li>
  </ul>
  )
}
