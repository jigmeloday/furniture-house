import Link from 'next/link'

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
            </ul>
        </nav>
    )
}

export default Navbar;