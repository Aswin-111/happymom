"use client"
import React from 'react';

const ShareButton = () => {
  const isWebShareSupported = () => {
    return navigator.share !== undefined;
  };

  const shareContent = async () => {
    try {
      await navigator.share({
        title: 'Title of the shared content',
        text: 'Description of the shared content',
        url: 'https://example.com',
      });
      alert('Shared successfully');
    } catch (error) {
      alert('Error sharing:', error);
    }
  };

  const fallbackShare = () => {
    // Implement custom sharing functionality here
    // For example, opening a share dialog or redirecting to a shareable link
    alert('Fallback share');
  };

  const handleShare = () => {
    if (isWebShareSupported()) {
      shareContent();
    } else {
      fallbackShare();
    }
  };

  return (
    <button onClick={handleShare} className='flex justify-center items-center'>Share</button>
  );
};

export default ShareButton;
