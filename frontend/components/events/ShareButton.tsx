import React from 'react';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';

const ShareButton = () => {
  const copyUrlToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    alert('Copied to clipboard');
  };

  return (
    <div>
      <span onClick={(e) => copyUrlToClipboard(e)}>
        <ArrowUpOnSquareIcon className='w-6 h-6' />
      </span>
    </div>
  );
};

export default ShareButton;
