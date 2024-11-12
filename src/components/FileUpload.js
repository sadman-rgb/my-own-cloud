import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const content = await file.arrayBuffer();
      await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: JSON.stringify({ content: Array.from(new Uint8Array(content)) }),
      });
      alert("File uploaded successfully!");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
