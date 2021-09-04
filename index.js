const express = require('express');
const app = express();
const path = require('path');

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

app.listen(8999, () => console.log('server running express lab on port 8999'));
