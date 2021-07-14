import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ iconProp, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={iconProp}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  iconProp: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  iconProp: PropTypes.string.isRequired,
};
export default Navbar;
