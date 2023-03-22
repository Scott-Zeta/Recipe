import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
  const { meals, loading, select, addToFavorites } = useGlobalContext()
  return (
    <section className='section-center'>
      {loading ? (<h4>Loading...</h4>) :
        (meals ? (meals.map(m => {
          //deconstruct
          const { idMeal: id, strMeal: title, strMealThumb: img } = m
          return (<article className='single-meal' key={id} >
            <img src={img} className="img" onClick={() => select({ idMeal: id })} />
            <footer>
              <h5>{title}</h5>
              <button className='like-btn' onClick={() => addToFavorites({ idMeal: id })}><BsHandThumbsUp /></button>
            </footer>
          </article>)
        })) : (<h1>Nothing Match!</h1>))
      }
    </section>
  )
}

export default Meals