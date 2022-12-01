/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import RadioButton from '../../Component/RadioButton';
import Table from '../../Component/Table';
import Toaster from '../../Component/Toaster/index';

import './styles.css';
import { venueHeader } from './TableEntries';
import {
  CREATE_VENUE_MASTER,
  GET_VENUE_MASTER,
  UPDATE_VENUE_MASTER,
  DELETE_VENUE_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
/**
 *
 * @returns {React.ReactElement} returns the venueCategory content
 */
const VenueCategory = () => {
  const [venueTable, setVenueTable] = useState([]);
  const [updatedId, setUpdatedId] = useState('');
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [edit, setEdit] = useState(false);
  const [deleteId, setDeletedId] = useState('');
  const [toaster, setToaster] = useState(false);

  const dispatch = useDispatch();
  const defaultValues = {};
  /**
   *
   */
  const { getmasterlist, deleteCatgory, status } = useSelector((state) => state?.venueMaster);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const radioButtonData = [
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Inactive',
      value: 'Inactive',
    },
  ];
  /**
   *
   */
  useEffect(() => {
    dispatch({ type: GET_VENUE_MASTER });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];

    getmasterlist.data?.map((value, index) => {
      // eslint-disable-next-line no-underscore-dangle
      IdsArray.push(value.id);
      return tmpArr.push({
        sno: index + 1,
        data: value.venue,
        status: value?.isActive ? 'Active' : 'Inactive',
      });
    });
    setVenueTable(tmpArr);
    setTmpIdsArr(IdsArray);
  }, [getmasterlist]);
  /**
   *
   * @param data returns the data from an masters
   * @function onSubmit
   */
  const onSubmit = async (data) => {
    const customData = data;
    if (data.isActive === 'Active') {
      customData.isActive = true;
    } else {
      customData.isActive = false;
    }

    if (edit === false) {
      dispatch({ type: CREATE_VENUE_MASTER, payload: { customData } });
      dispatch({ type: GET_VENUE_MASTER });
    } else {
      customData.venue_id = updatedId;
      dispatch({ type: UPDATE_VENUE_MASTER, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_VENUE_MASTER });
      reset({
        venue: '',
        isActive: '',
      });
    }
    // reset(defaultValues);
    reset({
      venue: '',
      isActive: '',
    });
  };
  /**
   * @param {*} objValues - objValues
   * @function handleEdit
   */
  const handleEdit = (objValues) => {
    setEdit(true);
    setUpdatedId(tmpIdsArr[objValues.sno - 1]);
    reset({
      venue: venueTable[objValues.sno - 1].data,
      isActive: venueTable[objValues.sno - 1].status === 'Active' ? 'Active' : 'Inactive',
    });
  };
  /**
   *
   * @param {*} objValues return they data
   * @function handleDelete
   */
  const handleDelete = async (objValues) => {
    setDeletedId(tmpIdsArr[objValues.sno - 1]);
    await dispatch({ type: DELETE_VENUE_MASTER, payload: { tmpIdsArr, objValues } });
  };
  /**
   *
   */
  const handleCancel = (e) => {
    reset({
      venue: '',
      isActive: '',
    });
  };
  /**
   *  onToasterClose used for toaser close func
   */
  const onToasterClose = () => {
    setToaster(false);
  };
  React.useEffect(() => {
    if (status) {
      if (status.type === 'INITIAL') setToaster(false);
      else setToaster(true);
    }
  }, [status]);
  React.useEffect(() => {
    dispatch({ type: INSERT_STAUS_MESSEAGE });
  }, [dispatch]);
  return (
    <Grid>
      {toaster && <Toaster open severity={status?.type} message={status?.message} close={onToasterClose} />}

      <Grid item container md={12}>
        <Grid item container md={3}>
          <Controller
            control={control}
            rules={{ required: true, pattern: /[a-zA-Z]+/g }}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} placeholder="Venue Category" label="Name" />
            )}
            name="venue"
          />
          {errors.venue && errors.venue.type === 'required' && (
            <div style={{ color: 'red' }}>This is Field required.</div>
          )}
          {errors.venue && errors.venue.type === 'pattern' && (
            <p style={{ color: 'red' }}>Enter alphabet Character Only</p>
          )}{' '}
        </Grid>
        <Grid item container md={3}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioButton onChange={onChange} value={value} labelText="Status" data={radioButtonData} />
            )}
            name="isActive"
          />
          {errors.isActive && <div style={{ color: 'red' }}>This is required.</div>}
        </Grid>
        <Grid item container md={3}>
          <Grid item container direction="row" sx={{ pt: 2, justifyContent: 'center' }} columnGap={2}>
            <CustomButton
              btnTitle={edit === false ? 'SUBMIT' : 'UPDATE'}
              variant="contained"
              color="primary"
              btnStyles={{ color: '#fff' }}
              onClickHandle={handleSubmit(onSubmit)}
            />
            <CustomButton btnTitle="CANCEL" variant="outlined" color="primary" onClickHandle={handleCancel} />
          </Grid>
        </Grid>
      </Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={venueHeader}
          rows={venueTable}
          optional
          edit
          deleteData
          onEditData={(e) => handleEdit(e)}
          onDeleteData={handleDelete}
        />
      </Grid>
    </Grid>
  );
};
export default VenueCategory;
