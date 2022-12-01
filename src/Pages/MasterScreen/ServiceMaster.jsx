/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../firebase';
import TextField from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import RadioButton from '../../Component/RadioButton';
import Table from '../../Component/Table';
import Toaster from '../../Component/Toaster/index';
import './styles.css';
import { serviceMaster } from './TableEntries';
import {
  GET_SERVICE_MASTER,
  DELETE_SERVICE_MASTER,
  CREATE_SERVICE_MASTER,
  UPDATED_SERVICE_MASTER,
  INSERT_STAUS_MESSEAGE,
} from '../../constants/actionType/index';
import FileUploader from '../../Component/FileUploader';
/**
 *
 * @returns {React.ReactElement} returns the service master content
 */
const ServiceMaster = () => {
  const [table, setTable] = useState([]);

  const [upload, setUpload] = useState(null);
  const [fireBaseUrl, setFireBaseurl] = useState('');
  // const [customData, setCustomData] = useState({});
  const [toaster, setToaster] = useState(false);

  const [edit, setEdit] = useState(false);
  const [updatedId, setUpdatedId] = useState('');

  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [deleteId, setDeletedId] = useState('');

  const [close, setClose] = useState(true);

  const dispatch = useDispatch();
  const { getmasterlist, createservice, updatedservice, deletedservice, status } = useSelector(
    (state) => state?.serviceMasterList,
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  /**
   *
   */

  // eslint-disable-next-line require-jsdoc
  const getFireBaseUrl = () => {
    return new Promise((resolve) => {
      getDownloadURL(ref(storage, `images/${upload[0].name}`))
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          resolve('image.png');
          alert(error);
        });
    });
  };
  /**
   *
   * @param {*} data  returns the data
   * @function onSubmit
   */
  const onSubmit = async (data) => {
    const imageUrl = await getFireBaseUrl();
    const customData = data;
    customData.service_name = data.name;
    customData.image = imageUrl;

    if (data.isActive === 'Active') {
      customData.isActive = true;
    } else {
      customData.isActive = false;
    }
    if (edit === false) {
      dispatch({ type: CREATE_SERVICE_MASTER, payload: { data } });
      dispatch({ type: GET_SERVICE_MASTER });
    }
    // } else {
    //   customData.service_id = updatedId;
    //   dispatch({ type: UPDATED_SERVICE_MASTER, payload: { data } });
    //   setEdit(false);
    //   dispatch({ type: GET_SERVICE_MASTER });
    //   reset({
    //     name: '',
    //     isActive: '',
    //   });
    // }
    reset({
      name: '',
      isActive: '',
    });
  };
  // eslint-disable-next-line require-jsdoc
  const getImageUrl = async () => {
    return new Promise((resolve) => {
      getDownloadURL(ref(storage, `images/${upload[0].name}`))
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          console.log('url', url);
          setFireBaseurl(url);
          resolve(url);
        })
        .catch((error) => {
          alert(error);
          resolve('image.png');
        });
    });
  };
  // eslint-disable-next-line require-jsdoc
  const dataEditSubmit = (data) => {
    dispatch({ type: UPDATED_SERVICE_MASTER, payload: { ...data } });
    setEdit(false);
    dispatch({ type: GET_SERVICE_MASTER });
    reset({
      name: '',
      isActive: '',
    });
  };
  // eslint-disable-next-line require-jsdoc
  const onEditSubmit = async (data) => {
    if (upload !== null) {
      const url = await getImageUrl();

      data.image = url;
    }
    if (data.isActive === 'Active') {
      data.isActive = true;
    } else {
      data.isActive = false;
    }
    data.service_id = updatedId;
    console.log('editData', data);
    // setCustomData(data);
    await dataEditSubmit(data);
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
    dispatch({ type: GET_SERVICE_MASTER });
  }, [dispatch]);

  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];

    getmasterlist?.data?.map((value, index) => {
      console.log('value123', value);
      IdsArray.push(value.id);
      return tmpArr.push({
        sno: index + 1,
        name: value?.service_name,
        status: value?.isActive ? 'Active' : 'Inactive',
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
  }, [getmasterlist]);

  /**
   *
   * @param {*} objValues return they data
   * @function handleDelete
   */
  const handleDelete = async (objValues) => {
    setDeletedId(tmpIdsArr[objValues.sno - 1]);
    await dispatch({ type: DELETE_SERVICE_MASTER, payload: { tmpIdsArr, objValues } });
  };
  /**
   *
   * @param {*} objValues returns the data
   * @function handleEdit
   */
  const handleEdit = (objValues) => {
    console.log('objValues', objValues);
    setEdit(true);
    setUpdatedId(tmpIdsArr[objValues.sno - 1]);

    reset({
      name: table[objValues.sno - 1].name,
      isActive: table[objValues.sno - 1].status === 'Active' ? 'Active' : 'Inactive',
    });
  };

  /**
   *
   */
  const handleCancel = (e) => {
    reset({
      name: '',
      isActive: '',
    });
  };
  /**
   *
   * @param {*} value returns the data
   * @function fun
   */
  const fun = (value) => {
    setUpload(value);
  };

  const fileUpload = useCallback(
    async (val) => {
      // You can await here
      await uploadBytes(val, upload[0]).then(() => {});
      // ...
    },
    [upload],
  );
  /**
   *
   */

  useEffect(() => {
    if (upload !== null) {
      const imageRef = ref(storage, `images/${upload[0].name}`);

      fileUpload(imageRef);
    }
  }, [upload, fileUpload]);

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
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} placeholder="Service" label="Name" />
            )}
            name="name"
          />
          {errors.name && <div style={{ color: 'red' }}>This is required.</div>}
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
          <FileUploader fun={fun} close={close} />
        </Grid>
        <Grid item container md={3}>
          <Grid item container direction="row" sx={{ pt: 2, justifyContent: 'center' }} columnGap={2}>
            <CustomButton
              btnTitle={edit === false ? 'SUBMIT' : 'UPDATE'}
              variant="contained"
              color="primary"
              btnStyles={{ color: '#fff' }}
              onClickHandle={edit === false ? handleSubmit(onSubmit) : handleSubmit(onEditSubmit)}
            />
            <CustomButton btnTitle="CANCEL" variant="outlined" color="primary" onClickHandle={handleCancel} />
          </Grid>
        </Grid>
      </Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table
          header={serviceMaster}
          rows={table}
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
export default ServiceMaster;
