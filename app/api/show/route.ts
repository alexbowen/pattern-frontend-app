import type { NextRequest } from 'next/server'
 
export async function GET(
  req: NextRequest
) {
  const searchParams = req.nextUrl.searchParams

  const response = await fetch(`https://patternradio-api-e873df4d91a5.herokuapp.com/api/shows?${new URLSearchParams(searchParams)}`)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}
