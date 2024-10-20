import type { NextRequest, NextResponse } from 'next/server'


// export const dynamic = 'force-dynamic'
 
export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const searchParams = req.nextUrl.searchParams;

  // console.log('searchParams', req);

  

  let url = 'https://hrr.xwi.mybluehost.me/wp-json/wp/v2/categories'

  const response = await fetch(url)

  const data = await response.json()

  // console.log('data', data)
 
  return Response.json(data)

  // console.log('categories', response.json())
 
  // if (!response.ok) {
  //   throw new Error('Failed to fetch data')
  // }

  return Response.json(response)

}
