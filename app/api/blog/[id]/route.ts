import type { NextRequest, NextResponse } from 'next/server'

import wordpress from 'wordpress'
const client = wordpress.createClient({
	url: "patternradio.com",
	username: "alex",
	password: "YKpifYPkZjM73cT"
})

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const data = await new Promise((resolve, reject) => {
    client.getPost(res.params.id, function( error, post ) {
      if (error) {
        reject(error)
      }
      resolve(post);
    })
  })

  return Response.json(data)
}
