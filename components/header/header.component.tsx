import Link from 'next/link'
function Navbar() {
    return(
        <div>
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
        </div>
    )
}

export default Navbar;