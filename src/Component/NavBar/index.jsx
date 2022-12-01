/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomIcon from '../../utils/Icons';
import CustomImages from '../../utils/Images';
import line from '../../assets/images/line.svg';
/**
 *
 * @returns {React.ReactElement} returns the NavBar component
 */
const Navbar = () => {
  const navigate = useNavigate();

  /**
   *
   */
  function handleLogout() {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }
  return (
    <div className="col-md-1 col-xs-12 nav_bar">
      <div className="navbar_arrange">
        <div className="line_align">
          <img src={line} alt="line" />
        </div>
        <div>
          <img className="customImg logo" src={CustomImages.PetHowzLogo} alt="" style={{ height: '100%' }} />
        </div>
        <div className="nav_list">
          <ul>
            <li>
              <div className="tooltip_div">
                <NavLink to="/dashboard">
                  <div className="icon_navLink">
                    <img src={CustomIcon.DashboardIcon} alt="" />
                  </div>
                  <span className="tooltip_text">Dashboard</span>
                </NavLink>
              </div>
            </li>

            <li>
              <div className="tooltip_div">
                <NavLink to="/master">
                  <div className="icon_navLink">
                    <img src={CustomIcon.MasterIcon} className="user_create" alt="" />
                  </div>
                  <span className="tooltip_text"> Master</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="tooltip_div">
                <NavLink to="/venues">
                  <div>
                    <img src={CustomIcon.VenuesIcon} alt="" />
                  </div>
                  <span className="tooltip_text">Venues</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="tooltip_div">
                <NavLink to="/service">
                  <div className="icon_navLink">
                    <img src={CustomIcon.ServiceIcon} alt="" className="serviceIconStyle" />
                  </div>
                  <span className="tooltip_text">Services</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="tooltip_div">
                <NavLink to="/booking">
                  <div className="icon_navLink">
                    <img src={CustomIcon.BookingsIcon} className="user_create" alt="" />
                  </div>
                  <span className="tooltip_text">Bookings</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="logout">
                {/* <NavLink to="/login"> */}
                <div className="icon_navLink" onClick={handleLogout}>
                  <img src={CustomIcon.LogoutIcon} className="user_create" alt="" />
                </div>
                <span className="tooltip_text">Logout</span>
                {/* </NavLink> */}
              </div>
            </li>
          </ul>
        </div>
        <div className="nav_footer">
          <p className="version">Version 0.0.1</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// Navbar.propTypes = {
//   handleLogout: PropTypes.func,
// };
// Navbar.defaultProps = {
//   handleLogout: () => null,
// };
