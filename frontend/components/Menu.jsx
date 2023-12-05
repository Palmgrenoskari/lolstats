import { Link } from 'react-router-dom'

const Menu = () => {

    const titleStyle = {
        color: '#F2BF43',
        paddingRight: 20,
        fontSize: 24
    }
    const linkStyle = {
		paddingRight: 5,
        color: '#A9A9A9'
    }

    const background = {
		background: '#000000',
        padding: 10
	}

    return (

        <div style={background}>
            <span style={titleStyle}>LoLStats</span>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/champions">Champions</Link>
            <Link style={linkStyle} to="/items">Items</Link>
            <Link style={linkStyle} to="/leaderboards">Leaderboards</Link>
        </div>
    )
}
 
export default Menu