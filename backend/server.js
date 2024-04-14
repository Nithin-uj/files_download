const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  const file = path.join(__dirname, 'files', filename);
  res.download(file);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
