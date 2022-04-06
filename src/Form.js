import React from 'react';
import Field from './Field';
import Upload from './Upload';
import { Button } from '@mui/material';

function Form(props) {

    let fetchFile = (e) => {
        props.setFile(e.target.files[0]);
    }

  return (
      <div className='form'>
          
          <div id='fieldDiv' >

              <div id='certNameField'>
                  <Field
                      value={props.certName}
                      setValue={props.setCertName} 
                      heading={'Certification name'}
                      validate={props.validate.name}
                      errMsg={'Certification name'}
                  />    
              </div>
                &nbsp;&nbsp;
              <div id='issuerNameField'>
                  <Field
                      value={props.issuerName} 
                      setValue={props.setIssuerName}
                      heading={'Issuer'}
                      validate={props.validate.issuer}
                      errMsg={'Issuer name'}
                  />    
              </div>

          </div><br/><br/><br/>
          
          <div id='uploadDiv'>
              <Upload 
                  file={props.file}
                  setFile={props.setFile}
                  fetchFile={fetchFile}
              />
              
          </div>

          <div id='submitBtnDiv'>
              <Button
                  variant="contained"
                  style={{backgroundColor:"#5c6bc0"}}
                  onClick={props.validation}
              >SAVE CERTIFICATION</Button>
          </div>
                
            </div>
  )
}

export default Form