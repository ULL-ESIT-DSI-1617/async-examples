var fs = require('fs');

fs.readFile('README.md', function (data) {
  fs.writeFile('borrame1.md', data, function () {
    fs.writeFile('borrame2.md', data, function () {
      fs.unlink('borrame1.md', function () {
        fs.unlink('borrame2.md', function () {
          console.log('Hecho')
        })
      })
    })
  })
})
