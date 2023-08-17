import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24);  // Update once every day

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="bg-teal text-black text-center py-4">
      <div>
        <p>Copyright © {currentYear} - All right reserved by Company Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
