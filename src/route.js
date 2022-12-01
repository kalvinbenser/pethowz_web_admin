import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout';
/**
 *
 * @returns {React.ReactElement} returns the route page
 */
const RoutPage = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};
export default RoutPage;
