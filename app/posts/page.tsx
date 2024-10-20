import PostsContent from '../components/posts/dataSet'



export default function Posts() {

  return (
    <div className="container-fluid content content--theme-dark">
      <PostsContent offset={ 0 } per_page={ 6 } pagination_control={ true } exclude={0} episode_context={[]} categories={[]} tax_relation={'OR'} />
    </div>
  )
}
