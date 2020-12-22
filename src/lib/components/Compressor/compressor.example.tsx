import React, { ChangeEvent, FC, useState } from 'react';
import Compressor from './compressor';

const App: FC = () => {
  const [imageSrc, setImageSrc] = useState();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.files && e.currentTarget.files[0]) {
      new Compressor(e.currentTarget.files[0], {
        quality: 1,
        // maxWidth: 700,
        width: 1000,
        // isAcceptBlob: true,
        success(result: any) {
          console.log(result.length);
          setImageSrc(result);
        },
        error(err: any) {
          console.log(err);
        },
      });
    }
  };

  return (
    <div>
      <div>
        <input type="file" onChange={handleChange} />
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default App;
