import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';
import { pendingHeader } from './tableData';
import { GET_PET_SERVICE_PENDING_LIST } from '../../constants/actionType/index';

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
  // eslint-disable-next-line react/prop-types
  const { table, list } = props;
  const dispatch = useDispatch();

  /**
   *
   * @param index
   * @param objValues
   */
  const onRowClick1 = (index, objValues) => {
    console.log(objValues, 'Ssdfsdf');
    const val = list[index - 1];

    dispatch({ type: GET_PET_SERVICE_PENDING_LIST, payload: val });
  };
  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={pendingHeader}
          rows={table}
          navLink="/ViewServiceDetails"
          onRowClicks={onRowClick1}
          optional
          pendingStatus
        />
      </Grid>
    </Grid>
  );
};
export default Pending;
