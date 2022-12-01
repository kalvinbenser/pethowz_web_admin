/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../Component/Input';
import Button from '../../Component/CustomButton';
import CustomButton from '../../Component/CustomButton';
import Terms from '../../Component/TermsAndConditon';
import {
  GET_TERMS_AND_CONDITION,
  CREATE_TERMS_AND_CONDITIION,
  UPDATE_TERMS_AND_CONDITION,
} from '../../constants/actionType/index';

/**
 * @name TermsAndCondition
 * @returns {React.ReactElement} returns the TermsAndCondition Screens
 */
const TermsAndCondition = () => {
  /**
   *
   */
  const { getTerms, createTerms, updateTerms } = useSelector((state) => state?.termsandcondition);
  console.log(updateTerms, createTerms, 'sffsdfsdfs');
  console.log('getTerms', getTerms);

  const [defaultValues, setDefaultValues] = useState({});
  const id = getTerms?.data?.id;
  /**
   *
   */
  const [edit, setEdit] = useState(false);
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
      dispatch({ type: CREATE_TERMS_AND_CONDITIION, payload: { customData } });
      await dispatch({ type: GET_TERMS_AND_CONDITION });
    } else {
      customData.content_id = id;
      dispatch({ type: UPDATE_TERMS_AND_CONDITION, payload: { customData } });
      setEdit(false);
      dispatch({ type: GET_TERMS_AND_CONDITION });
    }
    reset({
      termsAndCondition: '',
    });
  };
  /**
   *
   */
  React.useEffect(() => {
    dispatch({ type: GET_TERMS_AND_CONDITION });
  }, [dispatch]);

  React.useEffect(() => {
    if (Object.keys(defaultValues)?.length > 0) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);
  /**
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
      content: getTerms?.data?.content,
    });
  };

  return (
    <Grid>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            placeholder=""
            label="Terms And Condition"
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
          <Terms tittle="Terms and Conditions" para={getTerms?.data?.content} />
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
export default TermsAndCondition;
