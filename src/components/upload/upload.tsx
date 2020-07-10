import React, { FC, useRef, ChangeEvent } from 'react';
import axios from 'axios';

import Button from '../Button/button';

export interface UploadProps {
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onChange?: (file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    onProgress,
    onError,
    onSuccess,
    beforeUpload,
    onChange,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);

    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result) {
          post(file);
        }
      }
    });
  };

  const post = (file: File) => {
    const formData = new FormData();
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          console.log(percentage);
          if (percentage < 100) {
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then((resp) => {
        console.log(resp);
        if (onSuccess) {
          onSuccess(resp.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        console.error(err);
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };

  return (
    <div className="ark-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        Upload File
      </Button>
      <input
        onChange={handleChange}
        ref={fileInput}
        className="ark-file-input"
        style={{ display: 'none' }}
        type="file"
      />
    </div>
  );
};

export default Upload;
