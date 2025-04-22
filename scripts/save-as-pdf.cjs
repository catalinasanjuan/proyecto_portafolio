const puppeteer = require('puppeteer-core');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'; // ajusta si es necesario

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true
  });

  const page = await browser.newPage();
  await page.goto('https://catalina-sanjuan-portafolio.netlify.app/', { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'Portafolio-Catalina-San-Juan.pdf',
    printBackground: true,
    width: '1000px',
    height: '3000px'
  });

  await browser.close();
})();
