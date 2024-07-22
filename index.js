const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML string to convert to PDF
  const htmlString = `
    <html>
      <head>
        <title>Sample PDF</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>This is a sample PDF created from an HTML string using Puppeteer.</p>
      </body>
    </html>
  `;

  // Set the HTML content
  await page.setContent(htmlString, { waitUntil: 'networkidle0' });

  // Generate PDF
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

  // Save PDF to a file
  fs.writeFileSync('output.pdf', pdfBuffer);

  console.log('PDF created successfully');
  await browser.close();
})();
