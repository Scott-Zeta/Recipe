import { useGlobalContext } from "../context"

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext()
  const { idMeal, strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal
  return (
    <aside className="modal-overlay" onClick={() => closeModal()}>
      <div className="modal-container">
        <img src={image} className="img modal-img" />
        <div className='modal-content'>
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank">Origninal Source</a>
        </div>
      </div>
    </aside>
  )
}

export default Modal