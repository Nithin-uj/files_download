import React from 'react';
import axios from 'axios';

const files = ['7z2404-x64.exe', 'kali-linux-2024.1-virtualbox-amd64.7z', 'metasploitable-linux-2.0.0.zip', 'VirtualBox-7.0.12-159484-Win.exe',];

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
