const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);
  return <div className="progress-bar">에러 없이 잘 나옴!</div>;
};

export default Progressbar;
