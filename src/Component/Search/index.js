/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';
import CustomIcons from '../../utils/Icons';
/**
 *
 * @param {object} props - required props in search bar component
 * @returns {React.ReactElement} - returns the search bar component
 */
const SearchBar = (props) => {
  const { handleChange, handleClear, showInput, iconClick } = props;
  const [showBox, setShowBox] = React.useState(showInput);
  const [showIcon, setShowIcon] = React.useState(false);
  /**
   *@param {event} e event
   */
  const changeIcon = (e) => {
    setShowIcon(e.target.value !== '');
  };
  /**
   *
   */
  const onCrossClick = () => {
    if (iconClick) {
      setShowIcon(false);
      setShowBox(false);
    } else setShowIcon(false);
  };
  return (
    <div className="view_search">
      <div className="searchDiv">
        {showBox && (
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              handleChange(e);
              changeIcon(e);
            }}
            className="search_input"
          />
        )}
        {!showIcon && (
          <img
            src={CustomIcons.SearchIcon}
            alt="Search"
            className="searchIcon"
            onClick={() => iconClick && setShowBox(!showBox)}
          />
        )}
        {showIcon && (
          <img
            src={CustomIcons.SearchIcon}
            alt="Search"
            className="crossIcon"
            onClick={() => {
              onCrossClick();
              handleClear();
            }}
          />
        )}
      </div>
    </div>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleClear: PropTypes.func,
  showInput: PropTypes.bool,
  iconClick: PropTypes.bool,
};
SearchBar.defaultProps = {
  handleChange: () => {},
  handleClear: () => {},
  showInput: true,
  iconClick: true,
};
