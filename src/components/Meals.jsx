import {useContext} from 'react'
import {AppContext} from '../context'

const Meals = () => {
  const landing = useContext(AppContext)
  return (
    <>
      <h1>Meals</h1>
      <h5>landing</h5>
    </>
  )
}

export default Meals