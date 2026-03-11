const fs = require('fs');
const https = require('https');

const icons = {
  python: 'https://img.icons8.com/color/512/python--v1.png',
  docker: 'https://img.icons8.com/color/512/docker.png',
  aws: 'https://img.icons8.com/color/512/amazon-web-services.png',
  azure: 'https://img.icons8.com/color/512/azure-1.png',
  gcp: 'https://img.icons8.com/color/512/google-cloud.png',
  cplusplus: 'https://img.icons8.com/color/512/c-plus-plus-logo.png',
  sql: 'https://img.icons8.com/color/512/sql.png',
  pytorch: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/512px-PyTorch_logo_icon.svg.png'
};

Object.entries(icons).forEach(([name, url]) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Status Code: ${res.statusCode} for ${name}`);
      return;
    }
    const file = fs.createWriteStream(`public/images/${name}.png`);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}.png`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: `, err.message);
  });
});
