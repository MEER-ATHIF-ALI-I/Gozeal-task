import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FiUpload } from "react-icons/fi";

const Input = styled("input")({
  display: "none",
});

function Upload(props) {
  const inputFile = useRef(null);

  const onUploadClick = () => {
    inputFile.current.click();
  };

  const upload = (e) => {
    props.fetchFile(e);
  };

  return (
    <div data-testid="upload_testid">
      <div id="uploadBtnDiv" onClick={onUploadClick}>
        <div id="uploadText">
          <span>
            {!props.file
              ? "Upload a file showing your certification"
              : props.file.name}
          </span>
        </div>

        <div id="uploadBtn">
          <label htmlFor="contained-button-file">
            <Input
              accept="image/pdf/*"
              id="contained-button-file"
              multiple
              type="file"
              ref={inputFile}
              onChange={(e) => upload(e)}
            />
            <Button
              variant="contained"
              component="span"
              id="btn"
              style={{ backgroundColor: "#5c6bc0" }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Upload &nbsp; <FiUpload id="uploadIcon" />
            </Button>
          </label>
        </div>
      </div>
      <h4>(File format should be only jpg and pdf)</h4>
    </div>
  );
}

export default Upload;
