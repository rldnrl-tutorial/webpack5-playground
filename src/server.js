const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

  res.send(contentFromHtmlFile)
})

app.listen(3000, () => {
  console.log('application is running on http://localhost:3000');
})