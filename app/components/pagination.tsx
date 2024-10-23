import styles from './styles/pagination.module.scss';

import Link from 'next/link'

export default function Pagination() {

  return (
    <div className={ `${styles.pagination} row d-flex` }>
            <div className= "col-12 col-md-6 text-start">
        <ul>
        <li><Link href="#">&lt;&lt;</Link></li>
        <li><Link href="#">&lt;</Link></li>
        <li className={ styles.page }><Link href="#">1</Link></li>
        <li className={ styles.page }><Link href="#">2</Link></li>
        <li className={ styles.page }><Link href="#">3</Link></li>
        <li><Link href="#">&gt;</Link></li>
        <li><Link href="#">&gt;&gt;</Link></li>
      </ul>
      </div>
      <span className={ `${styles.pagination__status} col-12 col-md-6 text-start text-md-end` }><span>Showing 7-12 of 120 results</span></span>

    </div>
  )
  
}// import { Controller } from '@hotwired/stimulus';

// const PaginationController = class extends Controller {
//   static targets = ['stats', 'control'];

//   current = 1;

//   connect() {}

//   update({detail: { limit, offset, total }}) {

//     const to = (parseInt(offset, 10) + parseInt(limit, 10)) > total ? total : parseInt(offset, 10) + parseInt(limit, 10);
    
//     this.statsTarget.innerHTML = `<p>Showing ${parseInt(offset, 10) + 1} to ${to} results of ${total}</p>`;
//     const operand = total % limit;
//     const complete = total - operand;
//     const numberLinks = (complete/limit) + (operand > 0 ? 1 : 0);
//     this.total = total;

//     this.controlTarget.innerHTML = '';

//     if (total > limit) {
//       const control = document.createElement('ul');

//       for (let step = 1; step < numberLinks + 1; step++) {
//         let page = document.createElement('li');
//         let link = document.createElement('button');
//         link.dataset.limit = limit;
//         link.dataset.offset = limit * (step - 1);
//         link.dataset.page = step;
//         link.innerHTML = step;
//         page.appendChild(link);
//         control.appendChild(page);
//       }

//       this.controlTarget.appendChild(control);
//     }

//     const current = document.querySelector(`button[data-page="${this.current}"]`);

//     if (current) {
//       current.classList.add('current');
//     }
//   }

//   paginate(e) {
//     this.current = e.target.dataset.page;
//     this.dispatch('paginate', { detail: { limit: e.target.dataset.limit, offset: e.target.dataset.offset } });
//   }
// };

// export default PaginationController;
