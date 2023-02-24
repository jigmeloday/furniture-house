import Link from 'next/link'
function Navbar() {
    return(
        <div>
            <ul>
                <li>
                   <Link>
                   Home Page
                   </Link>
                </li>
                <li>
                    About Page
                </li>
            </ul>
        </div>
    )
}

export default Navbar;