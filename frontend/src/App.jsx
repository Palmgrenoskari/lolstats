import { useEffect, useState } from 'react'
import championService from './services/champions'

const App = () => {
  const [champions, setChampions] = useState(null)

  useEffect(() => {
    fetchChampions()
  }, [])

  const fetchChampions = async () => {
    const data = await championService.getAll()
    setChampions(data)
  }

  if (!champions) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <h1>LEAGUE RULES</h1>
    </div>
  )
}

export default App
