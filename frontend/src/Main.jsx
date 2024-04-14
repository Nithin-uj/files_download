import React from 'react';
import axios from 'axios';

const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt','bootstrap-5.3.3.zip'];

function Main() {
  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:5000/download/${filename}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file: ', error);
    }
  };

  return (
    <div>
      <h1>File Download App</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button onClick={() => handleDownload(file)}>Download {file}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
