import "./App.scss";
import Form from "./Form";
import { useState } from "react";
import Success from "./Success";

function App() {
  const [certName, setCertName] = useState("");
  const [issuerName, setIssuerName] = useState("");
  const [file, setFile] = useState(null);
  const [validate, setValidate] = useState({ name: true, issuer: true });
  const [success, setSuccess] = useState(false);

  let validation = () => {
    if (certName === "" && issuerName === "") {
      setValidate({ issuer: false, name: false });
    } else if (certName === "") {
      setValidate({ ...validate, name: false });
    } else if (issuerName === "") {
      setValidate({ ...validate, issuer: false });
    }
    if (certName && issuerName) {
      setValidate({ issuer: true, name: true });
      if (file !== null) {
        const objectURL = URL.createObjectURL(file);
        setFile(objectURL);
        setSuccess(true);
      }
    }
  };

  return (
    <div className="App">
      <div id="headingDiv">
        <span id="heading">
          <b>Skills-Based Certifications</b>
        </span>
        <br />
        <span id="headingHelper">(You can add upto 5 certifications)</span>
      </div>
      <br />

      {!success ? (
        <Form
          certName={certName}
          setCertName={setCertName}
          issuerName={issuerName}
          setIssuerName={setIssuerName}
          file={file}
          setFile={setFile}
          validation={validation}
          validate={validate}
        />
      ) : (
        <Success certName={certName} issuerName={issuerName} file={file} />
      )}
    </div>
  );
}

export default App;
