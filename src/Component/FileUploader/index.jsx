/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import propTypes, { func } from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies

import CustomIcons from '../../utils/Icons';
import Typography from '../Typography';
import ProgressBar from '../ProgressBar';

import './styles.css';
/**
 * @param {*} props defines the prop
 * @name CustomFileUploader
 * @returns {React.ReactElement} return the FileUploader component
 */
const CustomFileUploader = (props) => {
  const { fileType, fun, close } = props;
  const [selectedImage, setSelectedImage] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const image = 'image/png,image/jpeg/image/jpg';
  const docs = '.pdf';
  const [acceptType, setAcceptType] = useState('');
  const [imageupload, SetImageupload] = useState(close);

  React.useEffect(() => {
    if (close === false) {
      setSelectedImage(false);
      setUploadProgress(0);
    }
  }, [close]);
  /**
   * @name imageChange
   * @param {Event} e defines the event
   */
  const imageChange = async (e) => {
    const arr = [];
    arr.push(e.target.files[0]);
    e.preventDefault();
    SetImageupload(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();

    // eslint-disable-next-line no-unused-vars
    const url = reader.readAsDataURL(file);

    console.log(imageChange, 'filenadddddme');
    reader.onloadstart = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 30;
        return Math.min(prev + diff, 40);
      });
    };

    reader.onprogress = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 30;
        return Math.min(prev + diff, 65);
      });
    };
    await fun(arr);
    reader.onloadend = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 45;
        return Math.min(prev + diff, 100);
      });
      setSelectedImage([reader.result]);
    };
    setAcceptType(fileType === 'image' ? image : docs);
    console.log(docs, 'docs');
  };
  /**
   * @name onCloseHandle
   */
  const onCloseHandle = () => {
    setSelectedImage(false);
    setUploadProgress(0);
  };
  /**
   * @param {*} event defines the event that function
   * @name dragEvent
   */
  const dragEvent = (event) => {
    event.preventDefault();
  };
  /**
   * @name dropEvent
   */
  const dropEvent = () => {
    // event.preventDefault();
    console.log('dropped');
  };

  return (
    <Grid className="root">
      <Grid container direction="row" item md={12} xs={12} className="CustomFileUploader">
        <input
          type="file"
          className="fileUploader"
          onChange={imageChange}
          onDragOver={dragEvent}
          onDrop={dropEvent}
          accept={acceptType}
        />
        {selectedImage ? (
          <div className="imageViewer">
            <img src={fileType === 'image' ? selectedImage : CustomIcons.pdfIcon} alt="" className="imagePreview" />
          </div>
        ) : (
          <Grid className="uploadImageContainer">
            <Typography text="Upload Image" type="link" colorType="text" />
            <img src={CustomIcons.UploaderIcon} alt="" style={{ paddingLeft: '10px', height: '15px', width: '15px' }} />
          </Grid>
        )}
      </Grid>
      <Grid>
        <ProgressBar progress={uploadProgress} onCancel={onCloseHandle} />
      </Grid>
    </Grid>
  );
};
export default CustomFileUploader;
CustomFileUploader.propTypes = {
  fileType: propTypes.string,
  fun: propTypes.string,
  close: propTypes.string,
};
CustomFileUploader.defaultProps = {
  fileType: 'image',
  fun: 'image',
  close: '',
};
