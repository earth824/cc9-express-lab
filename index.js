const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const axios = require('axios');

// Lab2.1
// app.get('/', (req, res) => {
//   // res.send('<h2>My First Web App using Express</h2>');
//   res.json({ title: 'My First Web App', message: 'Our Web App API' });
// });

// Lab2.2
// app.get('/todos', (req, res) => {
//   res.json({ message: 'GET todos' });
// });
// app.post('/todos', (req, res) => {
//   res.json({ message: 'POST todos' });
// });
// app.put('/todos', (req, res) => {
//   res.json({ message: 'PUT todos' });
// });
// app.patch('/todos', (req, res) => {
//   res.json({ message: 'PATCH todos' });
// });
// app.delete('/todos', (req, res) => {
//   res.json({ message: 'DELETE todos' });
// });

// Lab2.3
// app.get('/redirect', (req, res) => {
//   res.redirect('https://google.com');
// });

// Lab2.4
// app.get('/404', (req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

// Lab2.5
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome To My Website</h1>');
// });

// app.get('/home', (req, res) => {
//   res.send('<h1>This is home page</h1>');
// });

// app.get('*', (req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

// app.use((req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

// Lab2.6
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/index.html'));
// });

// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/home.html'));
// });

// app.get('*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'pages/notfound.html'));
// });

// Lab2.7
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/main.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/login.html'));
// });

// app.get('/register', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/register.html'));
// });

// app.post('/submit-login', (req, res) => {
//   res.redirect('/');
// });

// app.post('/submit-register', (req, res) => {
//   res.redirect('/');
// });

// Lab 3.1
// app.use('/', (req, res, next) => {
//   res.send('Hello')
// }); //

// app.use(express.json()); // (req,res, next) => {next()}
// app.use(cors());

// Lab 3.2
// app.get('/', (req, res, next) => {
//   res.json({ message: 'This is GET root path' });
// });

// app.get('/about', (req, res, next) => {
//   res.json({ message: 'This is About path' });
// });

// app.use((req, res, next) => {
//   res.status(404).json({ message: 'path not found on this server' });
// });

// Lab 3.3
// app.get('/todos', (req, res, next) => {
//   res.json({ message: 'GET todos' });
// });
// app.post('/todos', (req, res, next) => {
//   res.json({ message: 'POST todos' });
// });
// app.put('/todos', (req, res, next) => {
//   res.json({ message: 'PUT todos' });
// });
// app.patch('/todos', (req, res, next) => {
//   res.json({ message: 'PATCH todos' });
// });
// app.delete('/todos', (req, res, next) => {
//   res.json({ message: 'DELETE todos' });
// });

// const router = express.Router();
// router.get('/', (req, res, next) => {
//   res.json({ message: 'GET todos' });
// });
// router.post('/', (req, res, next) => {
//   res.json({ message: 'POST todos' });
// });
// router.put('/', (req, res, next) => {
//   res.json({ message: 'PUT todos' });
// });
// router.patch('/', (req, res, next) => {
//   res.json({ message: 'PATCH todos' });
// });
// router.delete('/', (req, res, next) => {
//   res.json({ message: 'DELETE todos' });
// });

// app.use('/todos', router);

// Lab 3.4
// app.get('/dog', async (req, res, next) => {
//   try {
//     const result = await axios.get('https://dog.ceo/api/breeds/image/random');
//     res.json({ pic: result.data.message });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

// Lab 4.1
// app.use(express.static('public'));
// app.use('/static', express.static('public'));

// Lab 5.1
// app.get('/sum', (req, res, next) => {
// 5.1.1
// const { a, b } = req.query;
// res.json({ sum: +a + +b });
// 5.1.2
// const query = req.query;
// const sum = Object.values(query).reduce((acc, item) => acc + +item, 0);
// console.log(sum);
// res.json({ sum });
// 5.1.3
// const { arr } = req.query;
// const sum = JSON.parse(arr).reduce((acc, item) => acc + +item, 0);
// const query = req.query;
// const sum = JSON.parse(query.arr).reduce((acc, item) => acc + +item, 0);
// res.json({ sum });
// });

// Lab 5.2
app.get('/sum/:a/:b', (req, res, next) => {
  const { a, b } = req.params;
});

app.post('/products/:id', (req, res, next) => {
  const { id } = req.params;
});

app.get('/users/:id/bookings/:bId', (req, res, next) => {
  const { id, bId } = req.params;
});

app.listen(8999, () => console.log('server running express lab on port 8999'));
