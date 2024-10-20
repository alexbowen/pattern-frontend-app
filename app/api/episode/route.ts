import type { NextRequest } from 'next/server'
 
export async function GET(
  req: NextRequest
) {
  const searchParams = req.nextUrl.searchParams

  const url = `https://api.mixcloud.com/patternradio/${searchParams.get('id')}`

  const response = await fetch(url)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}
