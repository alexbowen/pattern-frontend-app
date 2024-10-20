'use client'

import '../globals.scss';
import styles from './styles/player.module.scss'

import { memo } from 'react';
import { usePlayer } from './playerContext';

const test = () => {
  console.log('test')
}

const Player = memo(function Player() {

  const [cart] = usePlayer();

  console.log('cart', cart)

  const url = cart.url.length > 0 ? `${cart.url}&mini=1&hide_cover=1&hide_artwork=1&autoplay=1&light=1` : ''

  return (
    <div className={ styles.playerFooter }>
      <iframe id={'player-id'} height={60} width={'100%'} allow={'autoplay'} src={ url } onLoad={ test }>
      </iframe>
    </div>
  )
})

export default Player;
