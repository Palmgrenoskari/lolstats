import { useEffect, useState } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import championService from './services/champions'
import itemService from './services/items'

import Menu from '../components/Menu'
import Champions from '../components/Champions'
import Champion from '../components/Champion'
import Main from '../components/Main'
import Leaderboards from '../components/Leaderboards'
import Items from '../components/Items'

const App = () => {
  const [champions, setChampions] = useState(null)
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetchChampions()
    fetchItems()
  }, [])

  const fetchChampions = async () => {
    const data = await championService.getAll()
    setChampions(data)
  }

  const fetchItems = async () => {
    const data = await itemService.getAll()
    setItems(data)
  }

  const match = useMatch('/champions/:id')
  const champion = match && champions ? Object.values(champions.data).find(a => a.id === match.params.id) : null

  return (
    <div>
      <Menu/>
      <h1>LEAGUE RULES</h1>
      <Routes>
        <Route path='/' element= {<Main />} />
        <Route path='/champions' element= {<Champions champions={champions?.data} />} />
        <Route path='/champions/:id' element= {<Champion champion={champion}/>} />
        <Route path='/items' element= {<Items items={items?.data} />} />
        <Route path='/leaderboards' element = {<Leaderboards />} />
      </Routes>
    </div>
  )
}

export default App
