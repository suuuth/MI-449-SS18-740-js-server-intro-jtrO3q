// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end( 
      '<h1>Home</h1>' +
      '<h2>Welcome!</h2>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    response.end('<h1>Welcome!</h1>')
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Welcome!</h1>' +
      '<img src="https://i.imgur.com/fu6dIpB.jpg" alt="cute animal">'
    )
  } else {
    response.end(
      '<h1>Error</h1>' +
      '<p>The requested URL' + request.url + 'was not found on this server.</p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')