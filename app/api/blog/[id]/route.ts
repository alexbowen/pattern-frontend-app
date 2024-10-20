import type { NextRequest, NextResponse } from 'next/server'
// var WordPressClient = require("wp-api-client")

// const client = new WordPressClient('https://hrr.xwi.mybluehost.me');

import wordpress from 'wordpress'
const client = wordpress.createClient({
	url: "patternradio.com",
	username: "alex",
	password: "YKpifYPkZjM73cT"
})





// export const dynamic = 'force-dynamic'
 
export async function GET(
  req: NextRequest,
  { params }
) {
  const searchParams = req.nextUrl.searchParams;

  console.log('dynamic route', params)


  // let url = `https://hrr.xwi.mybluehost.me/wp-json/wp/v2/posts/${params.id}?_embed=custom_fields,author,_links,wp:term,wp:featuredmedia&_fields=custom_fields,title,id,excerpt,author,content,_links,_embedded`
  // // const key = 'key=AIzaSyBmMuXYMxLwnJQ9V2HSvRhXcoTLmQ1A-o8'

  // console.log('searchParams', searchParams, url);

  // const response = await fetch(url, { cache: 'no-store' });

  // const data = await response.json()

  // 

  const data = await new Promise((resolve, reject) => {
    client.getPost(params.id, function( error, post ) {
      resolve(post);
    })
  })

  return Response.json(data)
}
