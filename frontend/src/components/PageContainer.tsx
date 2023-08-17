import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      {children}
    </div>
  );
}

export default PageContainer;
