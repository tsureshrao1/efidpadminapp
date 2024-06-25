import React, { useState, useRef } from 'react';

import { uploadFile } from '../../services/apiService';

const FileUploader = ({ onFileSelect, showFileTypeDropdown = true }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');
    const [documentType, setDocumentType] = useState(undefined);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setDocumentType(value);
    }

    const resetFileInput = () => {
        setSelectedFile(null);
        fileInputRef.current.value = '';
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setUploadMessage('No file selected');
            return;
        }

        const obj = {};
        obj.attachmentType = documentType;
        obj.attachmentName = selectedFile.name;

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('fileVo', JSON.stringify(obj));

        try {
            const createdItem = await uploadFile(formData);
            alert("Attachment uploaded successfully");
            onFileSelect(createdItem);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    return (
        <div className="row">
            {
                showFileTypeDropdown &&

                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label" for="exampleFormControlSelect1">Upload Documents</label>
                        <select className="form-select" id="exampleFormControlSelect1" onChange={(e) => handleChange(e)} >
                            <option>registration Certificate</option>
                            <option>StateEquestrian Association NOC</option>
                            <option>Rules And Regulations</option>
                            <option>list of Office Bearers</option>
                            <option>list of Committe Members</option>
                            <option>list of Club Members</option>
                            <option>Bank Passbook</option>
                            <option>Non-Standard Document</option>
                        </select>
                    </div>
                </div>
            }
            <div className="col-md-6" className={`col-md-${showFileTypeDropdown ? '6' : '10'}`}>
                <input name="file" id="file" type="file" className="form-control mt-lbl" data-bouncer-target="#file-error-msg" required="" ref={fileInputRef} onChange={handleFileChange} />
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary mt-lbl" onClick={handleFileUpload}>Upload</button>
            </div>
        </div>
    );
};

export default FileUploader;
