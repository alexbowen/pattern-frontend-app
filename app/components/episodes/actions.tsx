'use server'

const getEpisodes = async(params) => {

  const url = `http://localhost:3000/api/episode/?${new URLSearchParams(params)}`

  console.log('url', url)

  const releasesResponse = await fetch(url, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getEpisodes