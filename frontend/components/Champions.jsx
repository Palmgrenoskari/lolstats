// Implement search filter
// Add link to images for individual champion views

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
                <img
                    style={imgPadding}
                    src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${c.image.full}`}
                    alt={c.id}
                    key={c.key}
                />
            ))}
        </div>
    );
}
 
export default Champions;