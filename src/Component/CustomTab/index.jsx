/* eslint-disable import/no-unresolved */
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/styles';

import Tabs from '@mui/material/Tabs';
/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns CustomTab
 */
const CustomTab = (props) => {
  const { handleChange, value, tabDetails, tabContent, tab, color } = props;

  console.log(color, 'color');

  // const useStyles = makeStyles({
  //   tabs: {
  //     '& .MuiTabs-indicator': {
  //       backgroundColor: 'orange',
  //       height: 3,
  //     },
  //     '& .MuiTab-root.Mui-selected': {
  //       color: 'red',
  //     },
  //   },
  // });

  // const classes = useStyles();

  // const customTheme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       light: '#42c2f5',
  //       main: 'rgba(0,0,0,0.5)',
  //       dark: '#778899',
  //       contrastText: 'red',
  //     },
  //   },
  // });

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  //   tabs: {
  //     '& .MuiButtonBase-root.MuiTab-root': {
  //       Color: red,
  //     },
  //     '& .MuiTabs-indicator': {
  //       backgroundColor: color,
  //     },
  //     '& .Mui-selected': {
  //       color: ,
  //     },
  //   },
  // }));

  return (
    // <ThemeProvider theme={customTheme}>
    <Box sx={{ p: 1 }}>
      <TabContext value={value}>
        <Box>
          <Tabs
            // className={classes.tabs}
            onChange={handleChange}
            value={value}
            textColor="secondary"
            TabIndicatorProps={{
              style: {
                backgroundColor: tab,
                // fontWeight: 'bolder',
              },
            }}
          >
            {tabDetails?.map((item, index) => {
              const key = index;
              return (
                <Tab label={item.label} value={key} sx={{ textTransform: 'none', fontSize: 18, paddingLeft: 3 }} />
              );
            })}
          </Tabs>
        </Box>
        {tabContent?.map((item, index) => {
          const key = index;
          return <TabPanel value={key}>{item.content}</TabPanel>;
        })}
      </TabContext>
    </Box>
    // </ThemeProvider>
  );
};
export default CustomTab;
CustomTab.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.string,
  tabDetails: PropTypes.arrayOf.isRequired,
  tabContent: PropTypes.arrayOf.isRequired,
  tab: PropTypes.string,
};
CustomTab.defaultProps = {
  handleChange: () => null,
  value: '',
  color: '',
  tab: '',
};
