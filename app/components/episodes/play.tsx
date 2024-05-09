'use client'

import { usePlayer } from "../playerContext";

export default function Play(props: any) {

  const [, setPlayer] = usePlayer();

  return (
    <span className="button">
      <button onClick={() => setPlayer({ url: `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.url }`})}></button>
    </span>
  )
}
