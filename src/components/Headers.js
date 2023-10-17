import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ tittle }) => {
  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button color ='green' text='Hello' />
      
    </header>
  );
};

Header.defaultProps = { 
    tittle : 'Task Tracker',
}

Header.prototype = {
    tittle: PropTypes.string.isRequired,  // string type is required and default value will be "Task Tracker"
}

export default Header
