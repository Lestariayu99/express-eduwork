// const express = require('express');

// const app = express();
// const router = require('/routes');
// app.use(router);
    

// app.listen(3000,() => console.log('Server: http://localhost:3000'))



const express = require('express');
const app = express();
const port = 3000;


app.get('/halaman-satu', (req, res) => {
  res.json({ message: 'Halaman satu' });
});


app.get('/halaman-dua', (req, res) => {
  res.json({ message: 'Halaman dua' });
});


app.get('/halaman-tiga', (req, res) => {
  res.json({ message: 'Halaman tiga' });
});


app.get('/halaman-empat', (req, res) => {
  res.json({ message: 'Halaman empat' });
});


app.get('/halaman-lima', (req, res) => {
  res.json({ message: 'Halaman lima' });
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
