export async function GET() {
  const url1 = 'https://hrr.xwi.mybluehost.me/wp-json/wp/v2/tags'

  let response = await fetch(url1)

  const tagData = await response.json()

  const url2 = 'https://hrr.xwi.mybluehost.me/wp-json/wp/v2/categories'

  response = await fetch(url2)

  const categoryData = await response.json()

  const [categories, tags] = await Promise.all([categoryData, tagData])
 
  return Response.json({
    categories,
    tags
  })
}
