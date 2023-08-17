import React from 'react';

const FileUploader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white-300">
        <input type="file" className="file-input file-input-bordered w-full max-w-xs text-white" />
      </div>
    </div>
  );
};

export default FileUploader;
