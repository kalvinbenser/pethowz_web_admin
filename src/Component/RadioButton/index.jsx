/* eslint-disable no-unused-vars */
import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Grid } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import Typography from '../Typography';
/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} returns the radioButton Component
 */
const CustomRadioButton = (props) => {
  const { onChange, data, labelText, value, defaultValue } = props;
  return (
    <FormControl>
      <FormLabel>
        <Typography text={labelText} colorType="primary" />
      </FormLabel>
      <RadioGroup onChange={onChange} value={value} defaultValue={defaultValue} row>
        {data?.map((item, index) => {
          const key = index;
          return (
            <Grid key={key}>
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                defaultValue={defaultValue}
              />
            </Grid>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default CustomRadioButton;
CustomRadioButton.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf().isRequired,
  labelText: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
};
CustomRadioButton.defaultProps = {
  onChange: () => null,
  labelText: '',
  value: '',
  defaultValue: '',
};
