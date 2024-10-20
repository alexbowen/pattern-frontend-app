'use server'

const getPosts = async(url) => {

  const releasesResponse = await fetch(url, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getPosts