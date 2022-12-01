/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';
import { pendingHeader } from './tableData';
import { GET_PET_PENDING_LIST } from '../../constants/actionType/index';

import './styles.css';
/**
 * @param {*} props defines the prop
 * @name Pending
 * @returns {React.ReactElement} return the FileUploader component
 */
const Pending = (props) => {
  /**
   *
   */
  const { table, list } = props;
  const dispatch = useDispatch();
  /**
   *
   * @param index find they index
   * @param objValues  they object values decelare on onRowClicks
   */
  const onRowClicks1 = (index, objValues) => {
    console.log('objValues', objValues);
    console.log('list', list);
    const val = list[index - 1];
    console.log(val, 'sfsdfs');

    dispatch({ type: GET_PET_PENDING_LIST, payload: val });
  };

  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid style={{ height: '40%', overflow: 'auto' }}>
        <Table
          header={pendingHeader}
          rows={table}
          onRowClicks={onRowClicks1}
          navLink="/viewDetails"
          pendingStatus
          optional
        />
      </Grid>
    </Grid>
  );
};
export default Pending;
