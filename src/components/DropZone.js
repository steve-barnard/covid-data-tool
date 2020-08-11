import React, {useMemo, useCallback, useState} from 'react';
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

  const [files, setFiles] = useState([])
    
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ 
    // maxFilesize: 2, //in Mb
//     accept: function(file, done) {
//         var reader = new FileReader();
//         reader.addEventListener("loadend", function(event) { console.log(event.target.result);});
//         reader.readAsText(file);
//     }
// };
// accept: 'text/plain'
    accept: 'text/plain',
    onDrop: (acceptedFiles) => {
      setFiles(
      acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    },
    onDropAccepted: (file) => {
      fetch('localhost')
          .then(response => response.text())
          .then(text => console.log(text))
    }
  })

  


  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ])

  const filepreview = files.map((file) => (
    <div key={file.name} >
        <p>File Loaded:</p>
        <p>{file.name}</p>
    </div>
  ))

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop Sequence Text (.txt) Files Here or Click to Browse</p>
        <em>(Only *.txt and FASTA files will be accepted)</em>
      </div>
      <div>{filepreview}</div>
    </div>
  );
}

export default StyledDropzone;