import { useGlobalContext } from "../context"

const Modal = () => {
  const { closeModal } = useGlobalContext()
  return (
    <aside className="modal-overlay" onClick={()=>closeModal()}>
      <div className="modal-container">
        <h1>Modal</h1>
      </div>
    </aside>
  )
}

export default Modal