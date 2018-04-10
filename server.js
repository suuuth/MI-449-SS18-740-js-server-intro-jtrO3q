// Require Node's http module and assign it to a variable
var http = require('http')
var count = 0
var cute_img = [
  'https://i.imgur.com/unQLJIb.jpg', 
  'https://i.imgur.com/fu6dIpB.jpg',
  'https://i.imgur.com/CPqbVW8.jpg',
  'https://i.imgur.com/PGJvfQs.gif',
  'https://i.imgur.com/Ckf5OeO.jpg',
  'https://i.imgur.com/3jq1bv7.jpg',
  'https://i.imgur.com/lEpj17w.gif',
  'https://i.imgur.com/CR2Ra5d.jpg'
]

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end( 
      '<h1>Home</h1>' +
      '<h2>Welcome!</h2>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">' +
      '<p>Site Navigation</p>' +
      '<ul>' +
        '<li><a href="https://suuuth-js-server-intro.herokuapp.com/random-joke">Joke Page!</a></li>' +
        '<li><a href="https://suuuth-js-server-intro.herokuapp.com/cuteness">Animal Pics!</a></li>' +
      '</ul>'
    )
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Welcome!</h1>' +
      '<p><a href="https://suuuth-js-server-intro.herokuapp.com/">Home</a></p>'
    )
  } else if (request.url === '/cuteness') {
    count = count + 1
    if (count > cute_img.length) {
      count = 0
    }
    response.end(
      '<h1>Welcome!</h1>' +
      '<img src="' + cute_img[count] + '" alt="cute animal">' +
      '<p><a href="https://suuuth-js-server-intro.herokuapp.com/">Home</a></p>'
    )
    // https://i.imgur.com/unQLJIb.jpg
    // https://i.imgur.com/fu6dIpB.jpg
    // https://i.imgur.com/CPqbVW8.jpg
    // https://i.imgur.com/PGJvfQs.gif
    // https://i.imgur.com/Ckf5OeO.jpg
    // https://i.imgur.com/3jq1bv7.jpg
    // https://i.imgur.com/lEpj17w.gif
    // https://i.imgur.com/CR2Ra5d.jpg
  } else {
    response.end(
      '<h1>Error</h1>' +
      '<p>The requested URL ' + request.url + ' was not found on this server.</p>' +
      '<p><a href="https://suuuth-js-server-intro.herokuapp.com/">Home</a></p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')