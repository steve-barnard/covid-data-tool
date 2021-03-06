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

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsText(file)
    })
    
  }, [])
  const [files, setFiles] = useState([])
    
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ 
    maxFilesize: 8, //in Mb
//     accept: function(file, done) {
//         var reader = new FileReader();
//         reader.addEventListener("loadend", function(event) { console.log(event.target.result);});
//         reader.readAsText(file);
//     }
// };
// accept: 'text/plain'
    accept: 'text/plain',
    onDrop: useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          console.log(binaryStr)
        }
        reader.readAsText(file)

        async function getData(){
          const response = await fetch('http://127.0.0.1:5000/', 
          {method: 'GET', mode: 'cors'} );
          const text = await response.text();
          console.log(text);
          console.log(text, 'Data received')
          console.log("Test");
        }

          getData().then(response => {console.log("Done")})
          .catch(function (error) {
            console.log('Request failed', error)});
        

        // console.log('about to fetch');
        // fetch( 'http://127.0.0.1:5000/', {method: 'GET', mode: 'no-cors'})
        // .then(response => response.text())
        // .then(data => console.log(data))
        // .then(console.log('done'))
      })
      
    }, [])
    
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


  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop Sequence Text (.txt) Files Here or Click to Browse</p>
        <em>(Only *.txt files will be accepted)</em>
      </div>
    </div>
  );
}

export default StyledDropzone;