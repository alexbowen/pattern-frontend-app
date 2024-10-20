import type { NextRequest, NextResponse } from 'next/server'
 
export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const searchParams = req.nextUrl.searchParams

  const url = `https://api.mixcloud.com/patternradio/${searchParams.get('id')}`

  console.log('blog route', searchParams, url)

  const response = await fetch(url)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}
