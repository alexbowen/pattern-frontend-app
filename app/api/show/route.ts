import type { NextRequest, NextResponse } from 'next/server'
 
export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const searchParams = req.nextUrl.searchParams

  const response = await fetch(`https://patternradio-api-e873df4d91a5.herokuapp.com/api/shows?${new URLSearchParams(searchParams)}`)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}


// fetch(`${host}/api/shows/?${new URLSearchParams(req.query)}`)
// .then((response) => response.json())
// .then((episodes) => {
//   let  data = {
//     layout: 'partial/list/_layout.njk',
//     data: { list: episodes }
//   }
//   res.render(`partial/episode/_${template}.njk`, data);
// });
