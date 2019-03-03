const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const compression = require('compression');

const { api } = require('./config');

const app = express();
const dist = path.resolve(process.cwd(), 'dist');
const { PORT = 8000 } = process.env;

app.use('/api', proxy(api.domain));
app.use(
  compression({
    filter: () => {
      return process.env.NODE_ENV === 'production';
    }
  })
);
app.use(express.static(dist));

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(`${dist}/index.html`);
  });
}

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
