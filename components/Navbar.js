import Link from 'next/link';

function Navbar() {
  return (
    <div className='navbar'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"/>
      <div className='logo'></div>
      <nav className='nav-container'>
        <div className='bg-blur'></div>
        <ul className='nav-links'>
          <li className='navlink'>
            <Link href='/' id='home' passHref><a>
              <strong>00</strong> HOME  
            </a></Link>
          </li>
          <li className='navlink'>
            <Link href='/destination'  id='destination' passHref><a>
              <strong>01</strong> DESTINATION
            </a></Link>
          </li>
          <li className='navlink'>
            <Link href='/crew' id='crew' passHref><a>
              <strong>02</strong> CREW
            </a></Link>
          </li>
          <li className='navlink'>
            <Link href='/technology' id='technology' passHref><a>
              <strong>03</strong> TECHNOLOGY
            </a></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
