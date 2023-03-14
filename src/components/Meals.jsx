import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

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
            <img src={img} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className='like-btn'><BsHandThumbsUp /></button>
            </footer>
          </article>)
        })
      }
    </section>
  )
}

export default Meals