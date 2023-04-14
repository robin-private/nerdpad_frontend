import './index.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const NavLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none'
            , color: isActive ? 'white' : 'grey'
        }
    }

    return (
        <nav className="primary-nav">
            <NavLink style={NavLinkStyle} to='/'>Home</NavLink>
            <NavLink style={NavLinkStyle} to='admin/'>Profile</NavLink>
        </nav>
    )
}
