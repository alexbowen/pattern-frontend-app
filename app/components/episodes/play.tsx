'use client'

import { usePlayer } from "../playerContext";

export default function Play({ url, id }) {

  const [, setPlayer] = usePlayer();

  return (
    <span className="button">
      <button onClick={() => setPlayer({ id: id, url: `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ url }`})}></button>
    </span>
  )
}
