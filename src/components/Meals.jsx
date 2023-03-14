import { useGlobalContext } from '../context'

const Meals = () => {
  const landing = useGlobalContext()
  return (
    <>
      <h1>Meals</h1>
      <h5>{landing}</h5>
    </>
  )
}

export default Meals