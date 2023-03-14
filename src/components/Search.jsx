import {useState} from 'react'
import {useGlobalContext} from '../context'

const Search = () => {
  return (
    <header className='search-container'>
      <form>
        <input type='text' placeholder='What is your favorite?' className='form-input'/>
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster'>Suprise me!</button>
      </form>
    </header>
  )
}

export default Search