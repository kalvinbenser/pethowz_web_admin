/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';

import { approvedHeader } from './tableData';
import { GET_PET_SERVICE_PENDING_LIST } from '../../constants/actionType/index';
import './styles.css';
/**
 *@param {*} props defines the prop
 * @returns {React.ReactElement} returns the approved content
 */
const Approved = (props) => {
  const { table, list } = props;
  const dispatch = useDispatch();

  /**
   *
   * @param index
   * @param objValues
   */
  const onRowClick1 = (index, objValues) => {
    // const val = list[objValues];
    console.log(objValues, 'sfsdf');
    const val = list[index - 1];
    console.log('valId', val);
    dispatch({ type: GET_PET_SERVICE_PENDING_LIST, payload: val });
  };
  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={approvedHeader}
          rows={table}
          navLink="/ViewServiceDetails"
          optional
          approvedStatus
          onRowClicks={onRowClick1}
        />
      </Grid>
    </Grid>
  );
};
export default Approved;
