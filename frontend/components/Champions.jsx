// Implement search filter
// Add link to images for individual champion views
import { Link } from 'react-router-dom'

const Champions = ({ champions }) => {

    if (!champions) {
        return <div>Loading...</div>
    }
    
    console.log('Champions', champions)

    const imgPadding = {
        paddingRight: 2
    }
    return ( 
        <div>
            {Object.values(champions).map(c => (
                <Link key={c.key} to={`/champions/${c.id}`}>
                    <img
                        style={imgPadding}
                        src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${c.image.full}`}
                        alt={c.id}
                    />
                </Link>
            ))}
        </div>
    );
}
 
export default Champions;