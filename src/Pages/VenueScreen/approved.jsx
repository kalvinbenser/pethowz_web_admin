/* eslint-disable no-alert */
import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';

import { approvedHeader } from './tableData';
import { GET_PET_PENDING_LIST } from '../../constants/actionType/index';

import './styles.css';
/**
 *
 * @param props
 * @returns {React.ReactElement} returns the approved content
 */
const Approved = (props) => {
  // eslint-disable-next-line react/prop-types
  const { table, list } = props;
  const dispatch = useDispatch();

  /**
   *
   * @param index
   * @param objValues
   */
  const onRowClick1 = (index, objValues) => {
    console.log(objValues, 'Sdfs');
    const val = list[index - 1];
    dispatch({ type: GET_PET_PENDING_LIST, payload: val });
  };

  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={approvedHeader}
          rows={table}
          navLink="/viewDetails"
          optional
          approvedStatus
          onRowClicks={onRowClick1}
        />
      </Grid>
    </Grid>
  );
};
export default Approved;
