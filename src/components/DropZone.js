import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#cfcfcf',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#000',
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
        <p>Drag 'n' drop Nucleotide Sequences Here or Click to Browse</p>
      </div>
    </div>
  );
}

export default StyledDropzone;