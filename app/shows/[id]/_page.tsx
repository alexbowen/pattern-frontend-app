import List from '../../components/episodes/dataSet'

export default async function Browse({ params }: { params: { id: string } }) {
  return (
    <div className="container-fluid">
      <List offset={ 0 } limit={ 6 } q={ params.id.trim().toLowerCase().replace(/-/g, '+') } />
    </div>
  )
}