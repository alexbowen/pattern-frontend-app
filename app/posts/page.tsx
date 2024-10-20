import PostsContent from '../components/posts/dataSet'

export default async function Posts({offset = 0, limit = 2}) {
  return (
    <div className="container-fluid content content--theme-dark">
      <PostsContent offset={ offset } per_page={ limit } pagination_control={ true } />
    </div>
  )
}
