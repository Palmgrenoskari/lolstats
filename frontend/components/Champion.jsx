const Champion = ({ champion }) => {

    if (!champion) {
        return <div>Loading...</div>
    }
    
    console.log('Champion', champion)

    return (
        <div>
            {champion.id}
        </div>
    )
}
 
export default Champion;