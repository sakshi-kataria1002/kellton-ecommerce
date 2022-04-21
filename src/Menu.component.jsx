import {Link} from 'react-router-dom'
const Menu = () => {
    return(
        <>
            <Link to='/'>Home</Link> <br/>
            <Link to='/about'>About Us</Link> <br/>
            <Link to='/contact'>Contact Us</Link> <br/>
        </>
    )
}

export default Menu
