import List from '../components/episodes/list'

export default function Browse() {
  return (
    <div className="container-fluid gx-4 gx-sm-5">
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="list__heading row pt-0 pb-2">
            <div className="col-12">
              <h3 className="mb-0" data-heading-target="title">Browse All Shows</h3>
            </div>
            <div className="col-12">
              <span className="d-none" data-heading-target="preferences">
                (Preferences Applied)
                <button className="reset" data-heading-target="reset" data-action="click->episodes#clearFilters">reset</button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-3 mb-md-0">
          <form className="input-group input-group-sm" id="search" role="search" data-action="submit->search#request">
            <input type="text" className="form-control" placeholder="search all shows" aria-label="search shows" aria-describedby="button-addon2" data-search-target="query"></input>
            <button className="btn btn-secondary" type="button" id="button-addon2" data-action="click->search#request">Go</button>
          </form>
        </div>
      </div>
      <List offset={ 0 } limit={ 12 } />
    </div>
  )
}