import PostsContent from '../components/posts/dataSet'

interface SearchProps {
  q: string,
  offset?: string,
  limit?: string,
}

export default async function Posts({offset = '0', limit = '2', q = ''}) {
  return (
    <div className="container-fluid content content--theme-dark">
      <PostsContent offset={ 0 } per_page={ 25 } pagination_control={ true } />
    </div>
  )
}
