'use client'

import { useCart } from "../../app/PlayerContext";

export default function Play(props) {

  const [, setCart] = useCart();

  return (
    <span className="button">
      <button onClick={() => setCart({ url: `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.url }`})}></button>
    </span>
  )
}
