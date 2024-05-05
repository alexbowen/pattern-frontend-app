'use client'

import '../styles/globals.scss';
import styles from '../styles/main.module.scss'

import { memo } from 'react';
import { useCart } from '../app/PlayerContext';

export type Params = { url?: string }

const Player = memo(function Player( params: Params ) {

  const [cart] = useCart();

  return (
    <div className={ styles.playerFooter }>
      <iframe id={'player-id'} height={120} width={'100%'} allow={'autoplay'} src={cart.url}>
      </iframe>
    </div>
  )
})

export default Player;
