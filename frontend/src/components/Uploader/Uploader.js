import React, { useState } from 'react';
import { uploadFile as uploaderServiceS3 } from '../../services/uploaderServiceS3';
import { uploadFile as uploadFileLambda } from '../../services/uploaderServiceApi';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [useS3Uploader, setUseS3Uploader] = useState(true); // Set the initial uploader

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContents = e.target.result;
      setFileContent(fileContents);
    };
    reader.readAsText(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploadStatus('Uploading...');
        
        // Use the appropriate uploader based on the feature toggle
        if (useS3Uploader) {
          const response = await uploaderServiceS3(selectedFile);
          console.log(response);
        } else {
          const response = await uploadFileLambda(selectedFile);
          console.log(response);
        }
        
        setUploadStatus('Upload successful');
      } catch (error) {
        console.error('Error:', error);
        setUploadStatus('Upload failed');
      }
    }
  };

  return (
    <div className="flex">
      <h2>Simple File Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>

      {/* Feature toggle */}
      <label>
        <input
          type="checkbox"
          checked={useS3Uploader}
          onChange={() => setUseS3Uploader(!useS3Uploader)}
        />
        Use S3 Uploader
      </label>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      )}

      {fileContent && (
        <div>
          <p>File Content: {fileContent}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
