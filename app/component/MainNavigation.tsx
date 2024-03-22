import { NavLink } from '@remix-run/react'
const MainNavigation = () => {
    return (
        <nav id="main-navigation">
            <ul>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/books">Add Books</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation
