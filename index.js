const pdf = require('html-pdf');
const fs = require('fs');

const htmlString = `
  <html>
    <head>
      <title>Sample PDF</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a sample PDF created from an HTML string using html-pdf.</p>
    </body>
  </html>
`;

pdf.create(htmlString).toFile('output.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log(res); // { filename: '/path/to/output.pdf' }
});
