import { useEffect, useState } from 'react'
import championService from './services/champions'

const App = () => {
  const [a, setA] = useState(null)

  useEffect(() => {
    fetchChampion('Aatrox')
  }, [])

  const fetchChampion = async (champion) => {
    const data = await championService.getChampion(champion)
    setA(data)
  }

  if (!a) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <h1>LEAGUE RULES</h1>
      <div>
        Type: {a.type} <br/>
        Name: {a.data.Aatrox.name} <br/>
        Title: {a.data.Aatrox.title} <br/>
      </div>
      {}
    </div>
  )
}

export default App
