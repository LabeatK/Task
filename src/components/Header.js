import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = {showAdd ? '#E27D60' : '#41B3A3'} 
            text = {showAdd ? 'Close' : 'Add'} 
            onClick = {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
//Only String title
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header
