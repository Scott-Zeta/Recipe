import { useGlobalContext } from "../context"

const Favorites = () => {
  const { favorites, select, removeFavorites, addToFavorites } = useGlobalContext()
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map(e => {
            const { idMeal: id, strMealThumb: image } = e;
            return (<div key={id} className="favorite-item">
              <img src={image} className="favorites-img img" />
              <button className="remove-btn" onClick={() => removeFavorites(id)}>remove</button>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Favorites