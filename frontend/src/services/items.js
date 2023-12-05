import axios from 'axios'
// Update this as needed
const version = '13.23.1'

const baseUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log('items', response.data)
    return response.data
}


export default { getAll }