import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom';


const Header = ({ tittle, onAdd, showAdd }) => {
 const location = useLocation()

  return (
    <header className='header'>
      <h1>{tittle}</h1>
      {location.pathname === '/' && (
        <Button 
          color={showAdd ? 'red':'green'} 
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd} 
        />
    )}
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
