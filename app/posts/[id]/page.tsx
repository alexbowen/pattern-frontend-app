import Tags from '../../components/tags'

import Posts from '../../components/posts/dataSet'
import Episodes from '../../components/episodes/dataSet'

const getPosts = async (id) => {

  console.log(process.env)

  const postsResponse = await fetch(`https://pattern-frontend-app-a4f7fa601daf.herokuapp.com//api/blog/${id}`, { cache: 'no-store' });

  return postsResponse.json()
}

const getCustomField = (fields, key) => {
  return fields.find((f) => f.key === key)
}

export default async function Browse({ params }: { params: { id: string } }) {
  const item = await getPosts(params.id)

  return (
    <div>
      <div className="container-fluid content content__primary content--theme-dark">
        <div className="content__container">
          <h1 className="font-dark">{item.title}</h1>
          <h3>{ getCustomField(item.customFields, 'title:sub').value }</h3>
          <div className="mb-3 clearfix">
            <img src={item.thumbnail.thumbnail} className="me-3 mb-2 float-start" width="200" height="200" />
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
          <div className="row">
            {item.customFields.length ? <span className="col-12 col-md-6"><a className="nav-link" target="_blank" href={getCustomField(item.customFields, 'link:url').value}>{getCustomField(item.customFields, 'link:title').value}</a></span> : ''}
            <div  className="col-12 col-md-6 text-md-end mt-3 mt-md-0">
            <Tags tags={item.terms.filter(t => t.taxonomy === 'post_tag')} />
            </div>
          </div>
        </div>
        <span className="content__background"></span>
      </div>

      <div className="container-fluid content content--theme-light">
        <h2 className="font-dark">Related Reading</h2>
        <Posts categories={[20]} per_page={2} exclude={ item.id } template={'feature'} offset={0} episode_context={item.terms} tax_relation={'OR'} />
      </div>

      <div className="container-fluid content content--theme-dark">
        <h2 className="font-dark">Related Listening</h2>
        <Episodes offset={0} limit={6} tabs_context={false} episode_context={item.terms} />
      </div>
    </div>
  )
}
