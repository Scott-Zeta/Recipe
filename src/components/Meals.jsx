import { useGlobalContext } from '../context'

const Meals = () => {
  const mealsData = useGlobalContext()
  console.log(mealsData)
  return (
    <section className='section-center'>
      {
        mealsData.map(m => {
          //deconstruct
          const { idMeal: id, strMeal: title, strMealThumb: img } = m
          return (<article className='single-meal' key={id}>
            <img src={img} className="img" style={{ width: '200px' }} />
            <footer>
              <h5>{title}</h5>
            </footer>
          </article>)
        })
      }
    </section>
  )
}

export default Meals