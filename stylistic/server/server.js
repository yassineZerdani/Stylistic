const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/model', (req, res) => {
  res.render('model')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/blog-single', (req, res) => {
  res.render('blog-single')
})

app.get('/blog', (req, res) => {
  res.render('blog')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/model-single', (req, res) => {
  res.render('model-single')
})
app.get('/profile-form', (req, res) => {
  res.render('profile-form')
})

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})