import type { NextRequest } from 'next/server'
 
export async function GET(
  req: NextRequest
) {
  const searchParams = req.nextUrl.searchParams

  const response = await fetch(`http://localhost:5000/api/shows?${new URLSearchParams(searchParams)}`)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}
