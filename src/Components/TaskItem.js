import Modal from "./Modal";
import "../CSS/taskItem.css";
function TaskItem({ onClose, open, title, description }) {
  return (
    <Modal modalLable="Task Item" onClose={onClose} open={open}>

      <div className="taskItem">

        <h2>{title}</h2>
        <span className="description_display">{description}</span>
        <button onClick={onClose}>Close</button>

      </div>

    </Modal>
  );
}

export default TaskItem;