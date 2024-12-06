import React from 'react';

const HeaderImageUploader = ({ onUpload }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => onUpload(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="my-3">
      <label className="block">Upload Header Image:</label>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default HeaderImageUploader;
