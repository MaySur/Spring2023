import Button from './Button'
//import Tasks from './Tasks'
import { useLocation } from 'react-router-dom'


const Header = (props) => {
    const location = useLocation()
    return (
    <header className='header'>

        <h1 className="First_Head">{props.title}</h1>
        {location.pathname=== '/' &&<Button 
            color = {props.showAdd ? 'red':'blue'} 
            text = {props.showAdd ? 'Close':'Add'} 
            onClick = {props.onAdd} 
        />     } 

    </header>
  )
}

Header.defaultProps = {head: 'Owner Mayur' }
export default Header
