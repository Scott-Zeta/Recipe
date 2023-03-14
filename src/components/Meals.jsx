import { useGlobalContext } from '../context'

const Meals = () => {
  const landing = useGlobalContext()
  console.log(landing)
  return (
    <>
      <h1>Meals</h1>
      <div>{
        landing.map(m=><p key={m.idMeal}>{m.strMeal}</p>)
      }</div>
    </>
  )
}

export default Meals