export async function GET() {

  const url = 'https://hrr.xwi.mybluehost.me/wp-json/wp/v2/tags'

  const response = await fetch(url)

  const data = await response.json()

  return Response.json(data)
}
