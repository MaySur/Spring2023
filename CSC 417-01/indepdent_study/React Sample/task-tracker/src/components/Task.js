import { FaTimes } from 'react-icons/fa'


const Task = (props) => {
    
    //let name = 'Mayur Suresh'
    let deleteId = () => props.onDelete(props.task.id)
    let toggleId = () => props.onToggle(props.task.id)
  return (
    <div className={`task ${props.task.reminder ? 'reminder':''}`} onDoubleClick={toggleId}>
        <h3>{props.task.text}<FaTimes onClick={deleteId} style = {{color: 'red', cursor: 'pointer'}}/> </h3>
        <p>{props.task.day}</p>
      
    </div>
  )
}

export default Task
