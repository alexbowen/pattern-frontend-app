"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface iDefault {
    defaultValue: string | null
}

export default function Search() {

  const searchParams = useSearchParams()

  const initial = searchParams && searchParams.get("q")

  const router = useRouter()

  const [inputValue, setValue] = useState(initial)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
      const inputValue = event.target.value;
      setValue(inputValue);
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (inputValue) return router.push(`/episodes?q=${inputValue}`);
    if (!inputValue) return router.push("/episodes")
  }

  const handleKeyPress = (event: { key: any; }) => {
      if (event.key === "Enter") return handleSearch(event)
  }

  return (
    <form className="input-group input-group-sm" id="search" role="search" method="get" onSubmit={handleSearch}>
      <input type="text" className="form-control" placeholder="search all content" name="q" aria-label="search shows" aria-describedby="button-addon2" 
          id="inputId"
          value={inputValue ?? ""} onChange={handleChange} onKeyDown={handleKeyPress}  />
      <button className="btn btn-secondary" type="submit" id="button-addon2">Go</button>
    </form>
  )
}
