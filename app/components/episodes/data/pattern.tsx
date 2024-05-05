export async function getData(params) {
  const res = await fetch(`https://patternradio-api-e873df4d91a5.herokuapp.com/api/shows?${new URLSearchParams(params)}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}