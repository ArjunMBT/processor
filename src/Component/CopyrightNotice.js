import React from 'react';

const CopyrightNotice = () => {
  const creatorName = "Manish Kumar Ray";
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>&copy; {creatorName} {currentYear} All rights reserved.</p>
    </div>
  );
};

export default CopyrightNotice;