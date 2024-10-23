import Link from 'next/link'

import SocialToolbar from './social'

import styles from './styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className="container-fluid content content--theme-light pb-6">
    <h5>Quick Links</h5>
    <ul className={ `${ styles.footer__links } row` }>
    <li className="col-6 col-md-4"><Link href="/" className="link-secondary">Home</Link></li>
      <li className="col-6 col-md-4"><Link href="#" className="link-secondary">Events</Link></li>
      <li className="col-6 col-md-4"><Link href="#" className="link-secondary">Reviews</Link></li>
      <li className="col-6 col-md-4"><Link href="/about" className="link-secondary">About</Link></li>
      <li className="col-6 col-md-4"><Link href="/posts" className="link-secondary">Blog</Link></li>
      <li className="col-6 col-md-4"><Link href="/contact" className="link-secondary">Contact</Link></li>
    </ul>
    <div className="row">
      <div className="col-12 col-md-6">
        <SocialToolbar />
        <div>&copy; Pattern Radio 2024</div>
      </div>
    </div>
  </footer>
  )
}