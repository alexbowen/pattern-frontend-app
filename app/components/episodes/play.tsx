'use client'

import { useCart } from "../playerContext";

export default function Play(props: any) {

  const [, setCart] = useCart();

  return (
    <span className="button">
      <button onClick={() => setCart({ url: `https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=${ props.url }`})}></button>
    </span>
  )
}
