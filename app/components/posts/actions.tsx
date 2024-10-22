'use server'

const getPosts = async(params) => {

  const url = `https://pattern-frontend-app-a4f7fa601daf.herokuapp.com//api/blog/?${new URLSearchParams(params)}`

  console.log('get posts url', url)

  const releasesResponse = await fetch(url, {
    method: 'GET'
  })

  return releasesResponse.json()
}

export default getPosts
