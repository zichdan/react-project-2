import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ tittle, onAdd, showAdd }) => {
 
  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'}
       onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = { 
    tittle : 'Task Tracker'
}

Header.prototype = {
    tittle: PropTypes.string.isRequired,  // string type is required and default value will be "Task Tracker"
}

export default Header
