import Link from 'next/link';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'></div>
      <nav className='nav-container'>
        <div className='bg-blur'></div>
        <ul className='nav-links'>
          <li className='navlink'>
            <Link href='/' id='home' passHref>
              <strong>00</strong> Home
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/destination' id='destination' passHref>
              <strong>01</strong> Destination
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/crew' id='crew' passHref>
              <strong>02</strong> Crew
            </Link>
          </li>
          <li className='navlink'>
            <Link href='/technology' id='technology' passHref>
              <strong>03</strong> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
