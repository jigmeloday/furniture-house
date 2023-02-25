import Link from 'next/link'
import ThemeSwitcher from '../themeSwitcher/themeSwitcher';

function Navbar() {
    return(
        <nav className='NavBar'>
            <ul>
                <li>
                   <Link href='/'>
                   Home Page
                   </Link>
                </li>
                <li>
                   <Link href='/about'>
                   About Page
                   </Link>
                </li>
                <li>
                <ThemeSwitcher />
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar;