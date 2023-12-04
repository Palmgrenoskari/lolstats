import axios from 'axios'
// Update this as needed
const version = '13.23.1'
const baseUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US`

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/champion.json`)
    return response.data
}

const getChampion = async (champion) => {
    const response = await axios.get(`${baseUrl}/champion/${champion}.json`)
    console.log(response.data)
    return response.data
}

export default { getAll, getChampion }