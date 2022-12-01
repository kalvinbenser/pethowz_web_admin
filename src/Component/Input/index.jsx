/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '../Typography';
/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} returns the TextInputField Component
 */
const CustomInput = (props) => {
  const {
    label,
    error,
    helperText,
    maxRows,
    onChange,
    placeholder,
    required,
    type,
    value,
    multiline,
    rows,
    fullWidth,
    inputStyles,
    inputProps,
    iconProps,
  } = props;
  console.log(value, 'sdfsdf');
  return (
    <Grid>
      <Typography text={label} type="caption" customStyle={{ color: '#8e9092' }} />
      <TextField
        error={error}
        helperText={helperText}
        maxRows={maxRows}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        multiline={multiline}
        fullWidth={fullWidth}
        rows={rows}
        color="tertiary"
        size="small"
        sx={inputStyles}
        inputProps={inputProps}
        InputProps={iconProps}
      />
    </Grid>
  );
};
export default CustomInput;
CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  maxRows: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.oneOf),
  rows: PropTypes.number,
  fullWidth: PropTypes.bool,
  inputStyles: PropTypes.oneOfType(),
  iconProps: PropTypes.objectOf(PropTypes.oneOf),
};
CustomInput.defaultProps = {
  error: false,
  helperText: '',
  maxRows: 0,
  onChange: () => null,
  placeholder: '',
  required: false,
  type: '',
  value: '',
  multiline: false,
  inputProps: {},
  rows: 0,
  fullWidth: false,
  inputStyles: {},
  iconProps: {},
};
