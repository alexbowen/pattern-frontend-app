import '../styles/globals.scss';
import styles from '../styles/main.module.scss'

// import React, { useState, useEffect } from 'react'

export function playEpisode(url: string) {
  console.log(url)
}

export const increment = (state, props) => ({
  value: state.value + 1
});

export default function Player() {
  // const [count, setCount] = useState({ value: 0 });

  // const handleIncrement = () => this.setState(increment);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // })

  return (
    <div className={ styles.playerFooter }>
      <div ></div>
    </div>
  )
}

// const player = document.createElement('iframe');
// player.height = '120';
// player.width = '100%';
// player.allow = 'autoplay';
// player.src = src;
// this.playerTarget.insertAdjacentElement('beforeend', player);