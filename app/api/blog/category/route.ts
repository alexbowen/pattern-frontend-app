export async function GET() {

  const url = 'https://hrr.xwi.mybluehost.me/wp-json/wp/v2/categories'

  const response = await fetch(url)

  const data = await response.json()
 
  return Response.json(data)

  // console.log('categories', response.json())
 
  // if (!response.ok) {
  //   throw new Error('Failed to fetch data')
  // }
}
