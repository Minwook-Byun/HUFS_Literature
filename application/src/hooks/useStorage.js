import React, { useState, useEffect } from 'react';
import { myProjectStorage, myProjectFirestore } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(myProjectStorage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        console.log(percentage);
      },
      (err) => {
        setError(err);
        console.log(err.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => (setUrl(downloadURL), console.log(downloadURL))
        );
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
