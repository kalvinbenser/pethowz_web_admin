/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import TextField from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import RadioButton from '../../Component/RadioButton';
import Table from '../../Component/Table';
import './styles.css';
import Toaster from '../../Component/Toaster/index';
import { optionalHeader } from './TableEntries';
import {
  GET_OPTIONS_APPLICABLE,
  UPDATE_OPTIONS_MASTER,
  CREATE_OPTIONS_MASTER,
  DELETE_OPTONS_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
/**
 *
 * @returns {React.ReactElement} --returns the option Applicable content
 */
const OptionalMaster = () => {
  const dispatch = useDispatch();
  const defaultValues = '';
  const [optionTable, SetOptionTable] = useState([]);
  const [toaster, setToaster] = useState(false);
  const [updatedId, setUpdatedId] = useState('');
  const [edit, setEdit] = useState(false);
  const [deleteId, setDeletedId] = useState('');
  const { getoptionlist, createoption, updatedmaster, deletedmaster, status } = useSelector((state) => state?.option);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  /**
   *
   * @param data rerturn they data
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
      dispatch({ type: CREATE_OPTIONS_MASTER, payload: { customData } });
      await dispatch({ type: GET_OPTIONS_APPLICABLE });
    } else {
      customData.options_id = updatedId;
      dispatch({ type: UPDATE_OPTIONS_MASTER, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_OPTIONS_APPLICABLE });
      reset({
        options: '',
        isActive: '',
      });
    }
    reset({
      options: '',
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
    if (status) {
      if (status.type === 'INITIAL') setToaster(false);
      else setToaster(true);
    }
  }, [status]);

  React.useEffect(() => {
    dispatch({ type: GET_OPTIONS_APPLICABLE });
  }, [dispatch]);
  /**
   *
   */
  const [tmpIdsArr, setTmpIdsArr] = useState([]);

  React.useEffect(() => {
    const tmpArr = [];
    const idsArray = [];

    getoptionlist.data?.map((value, index) => {
      idsArray.push(value.id);

      // eslint-disable-next-line no-underscore-dangle

      return tmpArr.push({
        sno: index + 1,
        data: value?.options,
        status: value?.isActive ? 'Active' : 'Inactive',
      });
    });
    setTmpIdsArr(idsArray);
    SetOptionTable(tmpArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getoptionlist]);
  /**
   * @param {*} objValues - objValues
   * @function handleEdit
   */
  const handleEdit = (objValues) => {
    setEdit(true);
    setUpdatedId(tmpIdsArr[objValues.sno - 1]);
    reset({
      options: optionTable[objValues.sno - 1].data,
      isActive: optionTable[objValues.sno - 1].status === 'Active' ? 'Active' : 'Inactive',
    });
  };
  /**
   *
   * @param {*} objValues
   * @function handleDelete
   */
  const handleDelete = async (objValues) => {
    setDeletedId(tmpIdsArr[objValues.sno - 1]);
    await dispatch({ type: DELETE_OPTONS_MASTER, payload: { tmpIdsArr, objValues } });
  };
  /**
   *
   * @param {*} e
   * @function handleCancel
   */
  const handleCancel = (e) => {
    reset({
      options: '',
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
              <TextField onChange={onChange} value={value} placeholder="Optional Applicable" label="Name" />
            )}
            name="options"
          />
          {errors.options && errors.options.type === 'required' && (
            <div style={{ color: 'red' }}>This is Field required.</div>
          )}
          {errors.options && errors.options.type === 'pattern' && (
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
          {errors.isActive && <div style={{ color: 'red' }}>This Field is required.</div>}
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
          rows={optionTable}
          optional
          edit
          deleteData
          onDeleteData={handleDelete}
          onEditData={(e) => handleEdit(e)}
        />
      </Grid>
    </Grid>
  );
};
export default OptionalMaster;
