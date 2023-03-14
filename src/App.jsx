import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Search from './components/Search'
import Modal from './components/Modal'

import './App.css'

export default function App() {
  return (
    <main>
      <Search/>
      <Favorites/>
      <Meals />
      <Modal/>
    </main>
  )
}
