import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';

const Button = ({color, text, onClick}) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color}} 
    className='btn'>
    {text} 
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue'
}

Button.proptype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button
