"use client";

import { useRouter, useSearchParams } from "next/navigation"
import { useState, ChangeEvent } from "react"

export default function Search() {

  const searchParams = useSearchParams()

  const initial = searchParams && searchParams.get('q')

  const router = useRouter()

  const [inputValue, setValue] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
      setValue(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (inputValue) return router.push(`/episodes?q=${inputValue}`)
    if (!inputValue) return router.push("/episodes")
  }

  const handleKeyPress = (e: { key: any }) => {
      if (e.key === 'Enter') return handleSearch(e)
  }

  return (
    <form className="input-group input-group-sm" id="search" role="search" method="get" onSubmit={handleSearch}>
      <input type="text" autoComplete="off" className="search-focus" placeholder="search all content" name="q" aria-label="search shows" aria-describedby="button-addon2" id="inputId" onChange={handleChange} onKeyDown={handleKeyPress}  />
    </form>
  )
}
