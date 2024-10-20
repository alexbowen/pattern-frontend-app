'use server'

const getEpisodes = async(params) => {

  const releasesResponse = await fetch(`http://localhost:3000/api/search/?${new URLSearchParams(params)}`, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getEpisodes