import React, { useState } from 'react';

function FileDownload() {
  const [fileContent, setFileContent] = useState(null);

  const handleDownload = async () => {
    const response = await fetch("http://localhost:8000/download");
    const data = await response.json();
    if (data && data.content) {
      setFileContent(new Uint8Array(data.content));
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
      {fileContent && (
        <a
          href={`data:application/octet-stream;base64,${btoa(
            String.fromCharCode.apply(null, fileContent)
          )}`}
          download="downloaded_file"
        >
          Click to download
        </a>
      )}
    </div>
  );
}

export default FileDownload;
