import { Link } from 'react-router-dom'

const Menu = () => {

    const paddingR = {
		paddingRight: 5
    }

    const background = {
		background: '#F0F8FF',
        padding: 10
	}

    return (

        <div style={background}>
            <Link style={paddingR} to="/">Home</Link>
            <Link style={paddingR} to="/champions">Champions</Link>
            <Link style={paddingR} to="/items">Items</Link>
            <Link to="/leaderboards">Leaderboards</Link>
        </div>
    )
}
 
export default Menu