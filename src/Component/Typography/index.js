import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import colors from '../../utils/Colors';

/**
 *
 * @param {object} props - required props
 * @returns {React.ReactElement} - returns the typography component
 */
const CustomTypography = (props) => {
  const { type, text, colorType, customClass, customStyle } = props;
  /**
   * @name getFontType
   * @returns {React.ReactElement}  - returns the required  font type of text
   */
  const getFontType = () => {
    switch (type) {
      case 'header':
        return 'h5';
      case 'subHeading':
        return 'h6';
      case 'caption':
        return 'subtitle1';
      case 'title':
        return 'subtitle2';
      case 'link':
        return 'caption';
      default:
        return 'subtitle1';
    }
  };
  /**
   *@name getColorType
   *@returns {React.ReactElement}- returns the required type of text  colors
   */
  const getColorType = () => {
    switch (colorType) {
      case 'primary':
        return colors.blue.secondary;
      case 'secondary':
        return colors.white.primary;
      case 'tertiary':
        return colors.yellow.primary;
      case 'quaternary':
        return colors.blue.tertiary;
      case 'quinary':
        return colors.gray.quinary;
      case 'senary':
        return colors.gray.primary;
      case 'text':
        return colors.orange.primary;
      default:
        return colors.blue.secondary;
    }
  };
  return (
    <Typography variant={getFontType(type)} color={getColorType(colorType)} sx={customStyle} className={customClass}>
      {text}
    </Typography>
  );
};

export default CustomTypography;
CustomTypography.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorType: PropTypes.string,
  customClass: PropTypes.string,
  customStyle: PropTypes.objectOf(PropTypes.oneOfType),
};
CustomTypography.defaultProps = {
  colorType: '',
  customClass: '',
  customStyle: {},
};
