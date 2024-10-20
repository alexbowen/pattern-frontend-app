'use client'

import { usePlayer } from "../playerContext";

export default function Play({ props }) {

  const [, setPlayer] = usePlayer();

  return (
    <span className="button">
      <button onClick={() => setPlayer({ id: props.id, url: `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.url }`})}></button>
    </span>
  )
}
