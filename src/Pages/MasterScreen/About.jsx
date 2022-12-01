/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../Component/Input';
import Button from '../../Component/CustomButton';
import CustomButton from '../../Component/CustomButton';
import Terms from '../../Component/TermsAndConditon';
import { GET_ABOUT_DETAILS, CREATE_ABOUT_DETAILS, UPDATED_ABOUT } from '../../constants/actionType/index';

/**
 * @name TermsAndCondition
 * @returns {React.ReactElement} returns the TermsAndCondition Screens
 */
const About = () => {
  /**
   *
   */
  const { getabout, createabout, updateabout } = useSelector((state) => state?.about);
  const [edit, setEdit] = useState(false);
  const [defaultValues, setDefaultValues] = useState({});

  const id = getabout?.data?.id;

  console.log(getabout, updateabout, createabout, 'sdfasdf');

  const dispatch = useDispatch();

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
    if (edit === false) {
      dispatch({ type: CREATE_ABOUT_DETAILS, payload: { customData } });
      await dispatch({ type: GET_ABOUT_DETAILS });
    } else {
      customData.content_id = id;
      dispatch({ type: UPDATED_ABOUT, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_ABOUT_DETAILS });
    }
    reset({
      content: '',
    });
  };
  /**
   *
   * @param {*} e
   * @function handleCancel
   */
  const handleCancel = () => {
    reset({
      content: '',
    });
  };
  /**
   *
   * @param {handleEdit} data
   */
  const handleEdit = () => {
    setEdit(true);

    setDefaultValues({
      content: getabout?.data?.content,
    });
  };

  React.useEffect(() => {
    dispatch({ type: GET_ABOUT_DETAILS });
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
            label="About Us"
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
          <Terms tittle="About Us" para={getabout?.data?.content} />
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
export default About;
