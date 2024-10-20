import type { NextRequest, NextResponse } from 'next/server'

 
export async function GET(
  request: NextRequest,
) {
  const searchParams = request.nextUrl.searchParams;

  let url = `https://hrr.xwi.mybluehost.me/wp-json/wp/v2/posts?_embed=author,_links,wp:term,wp:featuredmedia&_fields=title,id,excerpt,author,content,_links,_embedded&${new URLSearchParams(searchParams)}`

  console.log('blog route', searchParams, url)
  const response = await fetch(url);

  const data = await response.json()
 
  return Response.json(data)
}
