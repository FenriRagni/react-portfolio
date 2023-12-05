import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  
  const currentPage = useLocation().pathname;

  return (
    <>
    <ul className='col-6 nav-tabs pt-3 ps-5 justify-content-start'>
    <h1>Alonso Ampuero</h1>
    </ul>
    <ul className='col-6 nav nav-tabs pt-5 justify-content-end'>
      <li className='nav-item'>
        <Link
          to='/'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/Resume'
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/Projects'
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/Contact'
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </>
  )
}

export default NavTabs;