import Link from 'next/link'
function Navbar() {
    return(
        <>
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
        </>
    )
}

export default Navbar;