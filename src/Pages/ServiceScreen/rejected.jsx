/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';
import { GET_PET_SERVICE_PENDING_LIST } from '../../constants/actionType/index';
import { rejectedHeader } from './tableData';
import './styles.css';
/**
 *
 * @param props
 * @returns {React.ReactElement} returns the rejected
 */
const Rejected = (props) => {
  const { table, list } = props;
  const dispatch = useDispatch();

  /**
   *
   * @param index
   * @param objValues
   */
  const onRowClick1 = (index, objValues) => {
    // const val = list[objValues];
    console.log(objValues, 'asdasdas');
    const val = list[index - 1];
    dispatch({ type: GET_PET_SERVICE_PENDING_LIST, payload: val });
  };

  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={rejectedHeader}
          rows={table}
          // navLink="/ServiceView"
          navLink="/ViewServiceDetails"
          optional
          rejectedStatus
          onRowClicks={onRowClick1}
        />
      </Grid>
    </Grid>
  );
};
export default Rejected;
