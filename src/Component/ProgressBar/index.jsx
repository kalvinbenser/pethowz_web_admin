/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './styles.css';
import CustomIcons from '../../utils/Icons';
/**
 *
 * @param {object} props - required props in Linear progress bar component
 * @returns {React.ReactElement} - returns the linear progress  component
 */
const ProgressBar = (props) => {
  const {
    onCancel,
    progress,
    file: { type, name },
  } = props;
  return (
    <Box className="box">
      <Grid className="pdfView">
        <img src={CustomIcons.DefaultPic} alt="" style={{ height: '15px', width: '15px' }} />
      </Grid>
      {/* <Typography type="link" customStyle="fileName" text="FileName" /> */}
      <Grid className="progressSet">
        <LinearProgress variant="determinate" value={progress} />
      </Grid>

      <Grid className="crossIcon" onClick={onCancel}>
        {progress !== 0 && (
          <img src={CustomIcons.CrossIcon} alt="" style={{ paddingLeft: '10px', height: '12px', width: '12px' }} />
        )}
      </Grid>
    </Box>
  );
};

export default ProgressBar;
ProgressBar.propTypes = {
  file: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};
ProgressBar.defaultProps = {
  file: '',
};
