import React, { useState, useRef, useMemo } from "react";

import { uploadFile } from "../../services/apiService";
import { Toast } from 'primereact/toast';
const generalOptions = [
  "registration Certificate",
  "Rules And Regulations",
  "list of Office Bearers",
  "list of Committe Members",
  "list of Club Members",
  "Bank Passbook",
  "Other"
]

const eventOptions = [
  "Rules And Regulations",
  "Brochure",
  "Prospectus",
  "Other"
]

const riderOptions = [
  "DOB document",
  "EFI Registration Document",
  "Club Registration Document",
  "Other"
];

const horseOptions = [
  "Passport",
  "EFI Registration Document",
  "Other"
];

const userOptions = [
  "Proof of DOB",
  "Proof of Address",
  "Other"
]

const horseAdmin = [
    "Horse Passport Form",
    "Other"
  ]

const FileUploader = ({ onFileSelect, showFileTypeDropdown = true, doc, fileAttachment = [], isEvent = false, attachType='default' }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  let options = isEvent ? eventOptions : generalOptions;
  if(isEvent) {
    options = eventOptions
  } else if(attachType === 'rider') {
    options = riderOptions
  } else if(attachType === 'horse') {
    options = horseOptions
  } else if (attachType === 'user') {
    options = userOptions
  } else if(attachType === 'horseAdmin') {
    options = horseAdmin;
  }
  const [documentType, setDocumentType] = useState(options[0]);
  const fileInputRef = useRef(null);
  const [otherFileType, setOtherFileType] = useState(undefined);
  const toast = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const remainOptions = useMemo(() => {
    if (fileAttachment) {
      return options.filter((option) => {
        return !fileAttachment.some((item) => item.attachmentType === option);
      })
    } else {
      return options;
    }
  }, [fileAttachment, options]);
  const handleOtherFileUploadName = (event) => {
    const { value } = event.target;
    setOtherFileType(value);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setDocumentType(value);
  };

  const resetFileInput = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadMessage("No file selected");
      return;
    }

    const obj = {};
    obj.attachmentType = doc ? doc : documentType == "Other" ? otherFileType : documentType;
    obj.attachmentName = selectedFile.name;
    let index = fileAttachment.findIndex((item) => item.attachmentType === obj.attachmentType);
    if (index > -1) {
      toast.current.show({
        severity: "warn",
        summary: "File upload",
        detail: "Attachment Name already exist in below list",
      });
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("fileVo", JSON.stringify(obj));

    try {
      const createdItem = await uploadFile(formData);
      // alert("Attachment uploaded successfully");
      toast.current.show({
        severity: "success",
        summary: "File upload",
        detail: "Attachment uploaded successfully",
      });
      resetFileInput();
      createdItem.attachmentType = doc ? doc : documentType == "Other" ? otherFileType : documentType;
      onFileSelect(createdItem);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="row">

      {showFileTypeDropdown && (
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label" for="exampleFormControlSelect1">
              Upload Documents
            </label>
            <select
              className="form-select"
              id="exampleFormControlSelect1"
              onChange={(e) => handleChange(e)}
            >
              {
                remainOptions.map((option, index) => (
                  <option key={index} >{option}</option>
                ))
              }
            </select>
          </div>
        </div>
      )}
      {documentType == "Other" && (
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label" for="">
              Attachement Name
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              name="other"
              aria-describedby=""
              placeholder=""
              value={otherFileType}
              onChange={(e) => handleOtherFileUploadName(e)}
            />
          </div>
        </div>
      )}
      <div
        className={`col-md-5 col-md-${showFileTypeDropdown ? documentType == "Other" ? '5' : "6" : "10"}`}
      >
        <Toast ref={toast} position="bottom-center" />
        <input
          name="file"
          id="file"
          type="file"
          className={`form-control ${showFileTypeDropdown ? 'mt-4' : ''}`}
          data-bouncer-target="#file-error-msg"
          required=""
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <div className="col-md-1">
        <button className={`btn btn-primary ${showFileTypeDropdown ? 'mt-4' : ''}`} onClick={handleFileUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
