'use client'

import '../globals.scss';
import styles from './styles/player.module.scss'

import { memo } from 'react';
import { usePlayer } from './playerContext';

const Player = memo(function Player() {

  const [cart] = usePlayer();

  return (
    <div className={ styles.playerFooter }>
      <iframe id={'player-id'} height={120} width={'100%'} allow={'autoplay'} src={cart.url}>
      </iframe>
    </div>
  )
})

export default Player;
