import React, {useMemo, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import uploadimage from '../assets/upload.png'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  background: 'url(${uploadimage}) no-repeat',
  borderColor: '#cfcfcf',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#a9a9a9',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};


const activeStyle = {
  borderColor: 'yellow'
};

const acceptStyle = {
  borderColor: 'green'
};

const rejectStyle = {
  borderColor: 'red'
};

//TODO Add image to upload space and store contents of file so that it can be sent to api/server for processing.
function StyledDropzone(props) {
    
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'text/plain'});


  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop Sequence Text (.txt) Files Here or Click to Browse</p>
      </div>
    </div>
  );
}

export default StyledDropzone;