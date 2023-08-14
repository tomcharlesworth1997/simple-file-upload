import React, { useState } from 'react';
import { uploadFile } from '../../services/uploaderServiceS3';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContents = e.target.result;
      setFileContent(fileContents);
    };
    reader.readAsText(file); // You can use other methods like readAsDataURL or readAsArrayBuffer for different use cases
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploadStatus('Uploading...');
        const response = await uploadFile(selectedFile);
        console.log(response)
        setUploadStatus(`Upload successful...`);
      } catch (error) {
        console.error('Error:', error);
        setUploadStatus('Upload failed');
      }
    }
  };

  return (
    <div className="flex">
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      )}

      {/* {fileContent && (
        <div>
            <p>File Content: {fileContent}</p>
        </div>
      )} */}
    </
    div>
  );
};

export default FileUpload;
