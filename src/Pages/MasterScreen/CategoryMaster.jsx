/* eslint-disable require-jsdoc */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ref, uploadBytes, getStorage, getDownloadURL } from '@firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../firebase';
import TextField from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import RadioButton from '../../Component/RadioButton';
import Table from '../../Component/Table';
import Toaster from '../../Component/Toaster/index';

import './styles.css';
import { thData } from './TableEntries';
import {
  GET_ALL_PET_CATEGORY_LIST,
  UPDATE_CREATE_PET_CATEGORY,
  CREATE_PET_CATEGORY,
  DELETE_PET_CATEGORY,
} from '../../constants/actionType/index';
import FileUploader from '../../Component/FileUploader';
/**
 *
 * @returns {React.ReactElement} returns the category master screen
 */
const CategoryMaster = () => {
  const [masetertable, setMastertable] = useState([]);
  const [updatedId, setUpdatedId] = useState('');
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [Images, setImages] = useState([]);
  const [customData, setCustomData] = useState({});
  const [deleteId, setDeletedId] = useState('');
  const [upload, setUpload] = useState(null);
  const [fireBaseUrl, setFireBaseurl] = useState('');
  const [close, setClose] = useState(true);
  const [toaster, setToaster] = useState(false);

  const defaultValues = {};
  const [edit, setEdit] = useState(false);
  /**
   *
   */
  const { getcatgory, petCatgory, updatepetCatgory, deletepetCatgory, status } = useSelector(
    (state) => state?.masterDetails,
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const dispatch = useDispatch();

  const dataSubmit = useCallback(() => {
    const data = customData;

    console.log('data12334', fireBaseUrl);
    data.image = fireBaseUrl;

    if (data.isActive === 'Active') {
      data.isActive = true;
    } else {
      data.isActive = false;
    }
    if (edit === false) {
      dispatch({ type: CREATE_PET_CATEGORY, payload: { data } });
      dispatch({ type: GET_ALL_PET_CATEGORY_LIST });
    }
    // } else {
    //   console.log('data123', data);
    //   dispatch({ type: UPDATE_CREATE_PET_CATEGORY, payload: { data } });
    //   setEdit(false);
    //   dispatch({ type: GET_ALL_PET_CATEGORY_LIST });
    //   reset({
    //     category: '',
    //     isActive: '',
    //   });
    // }
    reset({
      category: '',
      isActive: '',
    });
    setClose(false);
  }, [dispatch, edit, fireBaseUrl, reset, customData]);

  // useEffect(() => {
  //   if (fireBaseUrl.length) dataSubmit();
  // }, [fireBaseUrl, dataSubmit]);
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
  // const uploadImage = () => {
  //   return new Promise((resolve) => {
  //     if (upload !== null) {
  //       const imageRef = ref(storage, `images/${upload[0].name}`);

  //       fileUpload(imageRef);
  //       resolve(true);
  //     } else {
  //       resolve(false);
  //     }
  //   });
  // };
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
  /**
   *
   * @param {*} data
   * @function onSubmit
   */
  const onSubmit = async (data) => {
    // await uploadImage();
    const url = await getImageUrl();

    data.image = url;
    // setFireBaseurl(url);
    setCustomData(data);
    await dataSubmit();
  };
  const dataEditSubmit = (data) => {
    console.log('data123', data);
    dispatch({ type: UPDATE_CREATE_PET_CATEGORY, payload: { ...data } });
    setEdit(false);
    dispatch({ type: GET_ALL_PET_CATEGORY_LIST });
    reset({
      category: '',
      isActive: '',
    });
  };
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
    data.pet_cat_id = updatedId;
    console.log('editData', data);
    // setCustomData(data);
    await dataEditSubmit(data);
  };
  useEffect(() => {
    dispatch({ type: GET_ALL_PET_CATEGORY_LIST });
  }, [dispatch]);

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
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];
    const image = [];

    getcatgory.data?.map((value, index) => {
      IdsArray.push(value.id);
      image.push(value.image);

      return tmpArr.push({
        sno: index + 1,
        data: value.category,
        status: value?.isActive ? 'Active' : 'Inactive',
      });
    });
    setMastertable(tmpArr);
    setTmpIdsArr(IdsArray);
    setImages(image);
  }, [getcatgory]);
  /**
   *
   * @param {*} objValues  returns the data
   * @function handleEdit
   */
  const handleEdit = (objValues) => {
    console.log('objValues', objValues);
    setEdit(true);
    setUpdatedId(tmpIdsArr[objValues.sno - 1]);
    // setUpdatedId(Images[objValues.sno - 1]);

    reset({
      category: masetertable[objValues.sno - 1].data,
      isActive: masetertable[objValues.sno - 1].status === 'Active' ? 'Active' : 'Inactive',
    });
  };
  /**
   *
   * @param {*} objValues returns the data
   * @function  handleDelete
   */
  const handleDelete = async (objValues) => {
    setDeletedId(tmpIdsArr[objValues.sno - 1]);
    await dispatch({ type: DELETE_PET_CATEGORY, payload: { tmpIdsArr, objValues } });
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

  React.useEffect(() => {
    if (status) {
      setToaster(true);
    }
  }, [status]);
  return (
    <Grid>
      {toaster && <Toaster open severity={status?.type} message={status?.message} close={() => setToaster(false)} />}

      <Grid item container md={12}>
        {/* <img
          alt="here"
          src="https://firebasestorage.googleapis.com/v0/b/uploader-2665a.appspot.com/o/images%2FDog1.jfif?alt=media&token=2739c642-ac64-400e-a3d5-26128cf70964"
        /> */}
        <Grid item container md={3}>
          <Controller
            control={control}
            rules={{ required: true, pattern: /[a-zA-Z]+/g }}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} placeholder="Category" label="Name" />
            )}
            name="category"
          />
          {errors.category && errors.category.type === 'required' && (
            <div style={{ color: 'red' }}>This is Field required.</div>
          )}
          {errors.category && errors.category.type === 'pattern' && (
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
                labelText="Status"
                data={radioButtonData}
                defaultValue="Active"
              />
            )}
            name="isActive"
          />
          {errors.isActive && <div style={{ color: 'red' }}>This field is required</div>}
        </Grid>
        <Grid item container md={3} style={{ display: 'flex', justifyContent: 'center' }}>
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
          header={thData}
          optional
          edit
          deleteData
          rows={masetertable}
          onEditData={(e) => handleEdit(e)}
          onDeleteData={handleDelete}
        />
      </Grid>
    </Grid>
  );
};
export default CategoryMaster;
