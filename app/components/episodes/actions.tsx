'use server'

const getEpisodes = async(params) => {

  const url = `https://pattern-frontend-app-a4f7fa601daf.herokuapp.com//api/episode/?${new URLSearchParams(params)}`

  console.log('url', url)

  const releasesResponse = await fetch(url, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getEpisodes