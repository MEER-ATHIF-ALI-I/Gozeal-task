import React from 'react'

function Success(props) {
  return (
      <div id='successDiv' data-testid='success_testid'>
          <div>
              <span id='number'>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span id='name'><b>{ props.certName}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span id='issuer'>{ props.issuerName }</span>
        </div><br/>
            {props.file && <a href={props.file} target={"_empty"}>View Certification</a>}
        </div>
  )
}

export default Success