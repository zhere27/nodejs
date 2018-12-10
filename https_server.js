const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./server-key.pem'),
  cert: fs.readFileSync('./server-cert.pem'),
  passphrase: '54321',

  // This is necessary only if using the client certificate authentication.
  requestCert: true,
  rejectUnauthorized: true,

  // This is necessary only if the client uses the self-signed certificate.
  ca: [fs.readFileSync('client-cert.pem')]
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);