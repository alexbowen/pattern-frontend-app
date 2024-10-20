export async function GET(
  req,
  res
) {
  const url = `https://api.mixcloud.com/patternradio/${res.params.id}`

  const response = await fetch(url)
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response;
}


