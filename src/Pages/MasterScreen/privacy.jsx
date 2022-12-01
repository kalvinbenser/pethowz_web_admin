/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../Component/Input';
import Button from '../../Component/CustomButton';
import CustomButton from '../../Component/CustomButton';
import Terms from '../../Component/TermsAndConditon';
import { GET_PRIVACY_POLICY, CREATE_PRIVACY_POLICY, UPDATE_PRIVCACY_POLICY } from '../../constants/actionType/index';
/**
 * @name Privacy
 * @returns {React.ReactElement} returns the TermsAndCondition Screens
 */
const Privacy = () => {
  /**
   *
   */
  const { getprivacy, createprivacy, updateabout } = useSelector((state) => state?.privacy);
  console.log(getprivacy, createprivacy, updateabout, 'asdfsdf');
  const [edit, setEdit] = useState(false);
  const [defaultValues, setDefaultValues] = useState({});
  const [updatedId, setUpdatedId] = useState('');
  console.log(setUpdatedId, 'asdfsdfsdf');

  const dispatch = useDispatch();

  const id = getprivacy?.data?.id;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues });
  /**
   *
   */
  const onSubmit = async (data) => {
    const customData = data;
    console.log(updatedId, 'sdfsadf');
    if (edit === false) {
      dispatch({ type: CREATE_PRIVACY_POLICY, payload: { customData } });
      await dispatch({ type: GET_PRIVACY_POLICY });
    } else {
      customData.content_id = id;
      dispatch({ type: UPDATE_PRIVCACY_POLICY, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_PRIVACY_POLICY });
    }
    reset({
      content: '',
    });
  };

  /**
   *
   *
   * @param {*} e
   * @function handleCancel
   */
  const handleCancel = () => {
    reset({
      termsAndCondition: '',
    });
  };
  /**
   *
   * @param {handleEdit} data
   */
  const handleEdit = () => {
    setEdit(true);
    setDefaultValues({
      content: getprivacy?.data?.content,
    });
  };

  React.useEffect(() => {
    dispatch({ type: GET_PRIVACY_POLICY });
  }, [dispatch]);

  React.useEffect(() => {
    if (Object.keys(defaultValues)?.length > 0) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <Grid>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            placeholder=""
            label="Privacy Policy"
            fullWidth
            multiline
            rows={5}
          />
        )}
        name="content"
      />
      {errors.content && <div>This is required.</div>}
      <Grid item container sx={{ p: 3 }} style={{ justifyContent: 'flex-end' }} columnGap={2}>
        <Button
          variant="contained"
          btnTitle={edit === false ? 'CREATE' : 'UPDATE'}
          color="primary"
          onClickHandle={handleSubmit(onSubmit)}
          btnStyles={{ color: '#fff' }}
        />
        <Button
          variant="outlined"
          btnTitle="CANCEL"
          color="primary"
          onClickHandle={handleSubmit(handleCancel)}
          btnStyles={{ backgroundColor: '#FEE9DC' }}
        />
      </Grid>
      <Grid>
        <Grid>
          <Terms tittle="Privacy Policy" para={getprivacy?.data?.content} />
        </Grid>
        <Grid style={{ position: 'absolute', right: 20 }}>
          <CustomButton
            btnTitle="EDIT"
            variant="contained"
            color="primary"
            btnStyles={{ color: 'white', display: 'flex', backgroundColor: 'green' }}
            onClickHandle={handleSubmit(handleEdit)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Privacy;
