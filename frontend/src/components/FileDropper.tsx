import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

const FileDropper: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  
  interface DroppedItem {
    files: File[];
  }
  
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: (item, monitor) => {
      const droppedFiles: File[] = (monitor.getItem() as DroppedItem).files;
      handleFilesDrop(droppedFiles);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleFilesDrop = useCallback((droppedFiles: File[]) => {
    console.log(droppedFiles);
    setFiles(droppedFiles);
  }, []);

  return (
    <div 
      ref={drop} 
      className={`border-2 p-8 m-2 ${isOver ? 'bg-green-200' : ''} ${canDrop ? 'border-dashed' : 'border-solid'}`}
    >
      {files.length === 0 ? (
        <p>Drop files here</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileDropper;
