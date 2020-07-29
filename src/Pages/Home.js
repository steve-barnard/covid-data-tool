import React from 'react'
import StyledDropzone from '../components/DropZone'
// import Dropzone from 'react-dropzone'


export const Home = () =>
    (
        <div className = "App">
           <h2>Home</h2>
           <p>The purpose of this site, which is currently a work in progress, is to provide information on Covid-19.
            The information will primarily focus on using machine learning and other biostatistical tools to allow for
            the comparrison and analysis of different viral sequences. </p> 
            <StyledDropzone/>
        </div>
        
    )

