'use server'

const getPosts = async(params) => {

  const url = `http://localhost:3000/api/blog/?${new URLSearchParams(params)}`

  console.log('get posts url', url)

  const releasesResponse = await fetch(url, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getPosts
