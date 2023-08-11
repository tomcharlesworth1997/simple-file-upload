import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

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

  const handleUpload = () => {
    if (selectedFile) {
        console.log(selectedFile)
        console.log(typeof selectedFile)
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
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
    </
    div>
  );
};

export default FileUpload;
