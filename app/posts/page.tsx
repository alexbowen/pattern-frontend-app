import PostsContent from '../components/posts/dataSet'

interface SearchProps {
  q: string,
  offset?: number,
  limit?: number,
}

export default async function Posts({offset = 0, limit = 2, q = ''}) {
  return (
    <div className="container-fluid content content--theme-dark">
      <PostsContent offset={ offset } per_page={ limit } pagination_control={ true } />
    </div>
  )
}
