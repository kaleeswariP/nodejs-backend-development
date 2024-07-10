const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());

const downloadPdf = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    // Check if the request was successful
    if (response.statusCode !== 200) {
      cb(new Error(`Failed to get '${url}' (${response.statusCode})`));
      return;
    }

    response.pipe(file);

    file.on('finish', () => {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {}); // Delete the file async. (But we don't check the result)
    cb(err.message);
  });
};

// Example usage
const pdfUrl = 'https://getsamplefiles.com/download/pdf/sample-1.pdf';
const outputFilePath = path.join(__dirname, 'downloads', 'file.pdf');

// Ensure the downloads directory exists
if (!fs.existsSync(path.dirname(outputFilePath))) {
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
}



app.get('/file-download', (req, res)=>{
    let result;
    downloadPdf(pdfUrl, outputFilePath, (err) => {
        if (err) {
            result = `Error downloading PDF: ${err}`
          console.error(`Error downloading PDF: ${err}`);
        } else {
            result = `PDF downloaded successfully to ${outputFilePath}`;
          console.log(`PDF downloaded successfully to ${outputFilePath}`);
        }
      });
    res.json(result);
});


(function (){
    app.listen(port, ()=>{
        console.log('server started on ', port);
    });
})();
