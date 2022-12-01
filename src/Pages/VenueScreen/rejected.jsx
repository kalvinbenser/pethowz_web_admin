import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Table from '../../Component/Table';
import { rejectedHeader } from './tableData';

import { GET_PET_PENDING_LIST } from '../../constants/actionType/index';

import './styles.css';
/**
 *
 * @param props
 * @returns {React.ReactElement} --returns the rejected content
 */
const Rejected = (props) => {
  // eslint-disable-next-line react/prop-types
  const { table, list } = props;
  const dispatch = useDispatch();

  /**
   *
   * @param index value find on they index
   * @param objValues they object values decelare on onRowClicks
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
          header={rejectedHeader}
          rows={table}
          onRowClicks={onRowClick1}
          navLink="/viewDetails"
          optional
          rejectedStatus
        />
      </Grid>
    </Grid>
  );
};
export default Rejected;
