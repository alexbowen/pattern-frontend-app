'use client'

import { useTabs } from "./tabsContext";
import styles from './styles/tabs.module.scss';

export default function Tab(props: any) {

  const [, setTabs] = useTabs();

  return (
    <button className={ props.active ? styles.tabSelected : styles.tabDeselected } aria-selected="true" onClick={() => setTabs({active: props.categoryId})}>
      <span className={ styles.tabsTitle }>
        { props.title }
      </span>
      <span className={ styles.tabsDetail }>{ props.subTitle }</span>
    </button>
  )
}
