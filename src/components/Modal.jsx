import { useGlobalContext } from "../context"

const Modal = () => {
  const {} = useGlobalContext()
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
      <h1>Modal</h1>
      </div>
    </aside>
  )
}

export default Modal