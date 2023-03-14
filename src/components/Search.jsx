import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const [text, setText] = useState('')
  const {setSearchTerm, fetchRandom} = useGlobalContext()
  
  const textChange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(text)
    setText('')
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={textChange} placeholder='What is your favorite?' className='form-input' />
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={fetchRandom}>Suprise me!</button>
      </form>
    </header>
  )
}

export default Search