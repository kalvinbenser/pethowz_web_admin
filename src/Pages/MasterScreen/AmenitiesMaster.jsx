/* eslint-disable import/named */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import TextField from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import RadioButton from '../../Component/RadioButton';
import Table from '../../Component/Table';
import './styles.css';
import { optionalHeader } from './TableEntries';
import Toaster from '../../Component/Toaster/index';
import {
  GET_MASTER_LIST_ADMIN,
  AMENTIES_MASTER,
  UPDATE_AMENTIES_MASTER,
  DELETE_AMENTIES_MASTER,
  INSERT_AMENETIES_CHECK,
} from '../../constants/actionType/index';
/**
 *
 * @returns {React.ReactElement} returns the amenities master
 */
const AmenitiesMaster = () => {
  const [table, setTable] = useState([]);
  const [updatedId, setUpdatedId] = useState('');
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [deleteId, setDeletedId] = useState('');
  const [edit, setEdit] = useState(false);
  const [toaster, setToaster] = useState(false);

  const { getListAdmin, createAmenties, updateAmenties, deleteAmenties, status } = useSelector(
    (state) => state?.aminties,
  );
  const defaultValues = {};
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  /**
   *
   * @param {*} data  returns the data
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
      dispatch({ type: AMENTIES_MASTER, payload: { customData } });
      dispatch({ type: GET_MASTER_LIST_ADMIN });
    } else {
      customData.amenity_id = updatedId;
      dispatch({ type: UPDATE_AMENTIES_MASTER, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_MASTER_LIST_ADMIN });
      reset({
        amenity: '',
        isActive: '',
      });
    }
    reset({
      amenity: '',
      isActive: '',
    });
  };

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

  React.useEffect(() => {
    dispatch({ type: GET_MASTER_LIST_ADMIN });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];

    getListAdmin.data?.map((value, index) => {
      IdsArray.push(value.id);
      return tmpArr.push({
        sno: index + 1,
        data: value.amenity,
        status: value?.isActive ? 'Active' : 'Inactive',
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
  }, [getListAdmin]);
  /**
   *
   * @param {*} objValues  returns the data
   * @function  handleEdit
   */
  const handleEdit = (objValues) => {
    setEdit(true);
    setUpdatedId(tmpIdsArr[objValues.sno - 1]);
    reset({
      amenity: table[objValues.sno - 1].data,
      isActive: table[objValues.sno - 1].status === 'Active' ? 'Active' : 'Inactive',
    });
  };
  /**
   *
   * @param {*} objValues  returns the data
   * @function handleEdit
   */
  const handleDelete = async (objValues) => {
    setDeletedId(tmpIdsArr[objValues.sno - 1]);
    await dispatch({ type: DELETE_AMENTIES_MASTER, payload: { tmpIdsArr, objValues } });
  };
  /**
   *
   * @param {*} e
   *@function handleCancel
   */
  const handleCancel = (e) => {
    reset({
      amenity: '',
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
    dispatch({ type: INSERT_AMENETIES_CHECK });
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
              <TextField onChange={onChange} value={value} placeholder="Amenities" label="Name" />
            )}
            name="amenity"
          />
          {errors.amenity && errors.amenity.type === 'required' && (
            <div style={{ color: 'red' }}>This is Field required.</div>
          )}
          {errors.amenity && errors.amenity.type === 'pattern' && (
            <p style={{ color: 'red' }}>Enter alphabet Character Only</p>
          )}
        </Grid>
        <Grid item container md={3}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioButton
                onChange={onChange}
                value={value}
                defaultValue="Active"
                labelText="Status"
                data={radioButtonData}
              />
            )}
            name="isActive"
          />
          {errors.isActive && <div style={{ color: 'red' }}>This field is required.</div>}
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
          header={optionalHeader}
          rows={table}
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
export default AmenitiesMaster;
