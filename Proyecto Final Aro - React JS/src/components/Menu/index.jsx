import { NavLink } from "react-router-dom"; 

const Menu = ({ links, className, children }) => {
  return (
    <ul className={`menu ${className}-menu`}>
      {links.map(link => (
        <li key={link.href} className={`menu-item ${className}-item`}>
          <NavLink 
            to={link.href} 
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            aria-label={`Navegar a ${link.label}`} 
          >
            {link.label}
          </NavLink>
        </li>
      ))}
      {children && <>{children}</>}
    </ul>
  );
};

export default Menu;


