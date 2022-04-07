import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './linkTab.scss';

const LinkTab = ({ placeholder, path }) => (
  <NavLink to={path} className="linkTab">
    {placeholder}
  </NavLink>
);

export default LinkTab;

LinkTab.propTypes = {
  placeholder: PropTypes.string,
  path: PropTypes.string,
};

LinkTab.defaultProps = {
  placeholder: '',
  path: '',
};
