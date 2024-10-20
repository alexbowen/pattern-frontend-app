import type { NextRequest, NextResponse } from 'next/server'
 
export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const url = `https://api.mixcloud.com/patternradio/${res.params.id}`

  const response = await fetch(url)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}
