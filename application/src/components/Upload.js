import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedImgTypes = ['image/png', 'image/jpeg'];
  // 이미지를 업로드 했을 때만 이미지를 보여주고
  //   그 이외 상황에서는 null을 보여줘야 하기 때문에 초기 상태는 null

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);
    selected && allowedImgTypes.includes(selected.type)
      ? setFile(selected)
      : setFile(null),
      setError('png 혹은 jpeg 형태의 이미지파일만 업로드해주세요!');
  };

  return (
    <div>
      <input name="fileUpload" type="file" onChange={changeHandler} />
    </div>
  );
};

export default UploadForm;
