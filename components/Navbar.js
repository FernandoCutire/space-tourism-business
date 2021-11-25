import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/shared/logo.svg';

function Navbar() {
  return (
    <header className='navbar' role='navigation'>
      <div className='logo' aria-label='homepage'>
        <Image src={logo} alt='Logo' />
      </div>
      <button
        className='hamburger mobile'
        onClick={() => hamburger()}
        aria-expanded='false'
        aria-label='navigation dropdown menu'
      >
        <div className='stick stick1'></div>
        <div className='stick stick2'></div>
        <div className='stick stick3'></div>
      </button>
      <nav className='nav-container'>
        <div className='bg-blur'></div>
        <ul className='nav-links'>
          <li className='navlink'>
            <Link href='/' id='home' passHref>
              <span className='nav-btn'>
                <strong>00</strong> HOME
              </span>
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/destination' id='destination' passHref>
              <span className='nav-btn'>
                <strong>01</strong> DESTINATION
              </span>
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/crew' id='crew' passHref>
              <span className='nav-btn'>
                <strong>02</strong> CREW
              </span>
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/technology' id='technology' passHref>
              <span className='nav-btn'>
                <strong>03</strong> TECHNOLOGY
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
