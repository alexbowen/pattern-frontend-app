import filters from '../styles/filters.module.scss'

import '../styles/globals.scss';

export default function Preferences() {
  return (

<ul data-filters-target="groups">
{/* <li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="blues">
  <button className="mb-2 mb-md-0 badge">Blues</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="broken beat">
  <button className="mb-2 mb-md-0 badge">Broken Beat</button>
</li> */}

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="disco">
  <button className="mb-2 mb-md-0 badge">Disco</button>
</li>
{/* 
<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="dub">
  <button className="mb-2 mb-md-0 badge">Dub</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="electro">
  <button className="mb-2 mb-md-0 badge">Electro</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="electronica">
  <button className="mb-2 mb-md-0 badge">Electronica</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="funk">
  <button className="mb-2 mb-md-0 badge">Funk</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="hip hop">
  <button className="mb-2 mb-md-0 badge">Hip Hop</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="house">
  <button className="mb-2 mb-md-0 badge">House</button>
</li> */}

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="jazz">
  <button className="mb-2 mb-md-0 badge">Jazz</button>
</li>

{/* <li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="punk">
  <button className="mb-2 mb-md-0 badge">Punk</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="reggae">
  <button className="mb-2 mb-md-0 badge">Reggae</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="rock">
  <button className="mb-2 mb-md-0 badge">Rock</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="soul">
  <button className="mb-2 mb-md-0 badge">Soul</button>
</li> */}

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="techno">
  <button className="mb-2 mb-md-0 badge">Techno</button>
</li>

{/* <li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="genre" data-filter="world">
  <button className="mb-2 mb-md-0 badge">World</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="afro">
  <button className="mb-2 mb-md-0 badge">Afro</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="balearic">
  <button className="mb-2 mb-md-0 badge">Balearic</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="club">
  <button className="mb-2 mb-md-0 badge">Club</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="deep">
  <button className="mb-2 mb-md-0 badge">Deep</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="downtempo">
  <button className="mb-2 mb-md-0 badge">Downtempo</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="funky">
  <button className="mb-2 mb-md-0 badge">Funky</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="fusion">
  <button className="mb-2 mb-md-0 badge">Fusion</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="latin">
  <button className="mb-2 mb-md-0 badge">Latin</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="modern">
  <button className="mb-2 mb-md-0 badge">Modern</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="progressive">
  <button className="mb-2 mb-md-0 badge">Progressive</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="psychedelic">
  <button className="mb-2 mb-md-0 badge">Psychedelic</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="retro">
  <button className="mb-2 mb-md-0 badge">Retro</button>
</li>

<li data-target="tags.item" data-action="click->filters#updateSelected" className="tag" data-group="style" data-filter="roots">
  <button className="mb-2 mb-md-0 badge">Roots</button>
</li> */}
</ul>
  )
}
