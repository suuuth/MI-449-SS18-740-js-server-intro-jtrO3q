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
var jokes = {
  'the pencil': {
    setup: 'A broken pencil',
    punchline: 'Nevermind, it doesn\'t have a point'
  },
  'europe': {
    setup: 'Europe',
    punchline: 'No, you\'re a poo'
  },
  'theo': {
    setup: 'Theodore',
    punchline: 'Theodore wasn\'t open so I knocked'
  },
  'amos': {
    setup: 'Amos',
    punchline: 'A mosquito'
  },
  'whom': {
    setup: 'To',
    punchline: 'To whom'
  },
  'nana': {
    setup: 'Nana',
    punchline: 'Nanna your business'
  },
  'etch': {
    setup: 'Etch',
    punchline: 'Bless you'
  }
}
var setup
var punchline

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
    var thisjoke = Math.random()
    if (thisjoke <= 1.5) {
      setup = jokes['' + Object.keys(jokes)[0]].setup
      punchline = jokes['' + Object.keys(jokes)[0]].punchline
    } else if (thisjoke > 1.5 && thisjoke <= 3) {
      setup = jokes['' + Object.keys(jokes)[1]].setup
      punchline = jokes['' + Object.keys(jokes)[1]].punchline
    } else if (thisjoke > 3 && thisjoke <= 4.5) {
      setup = jokes['' + Object.keys(jokes)[2]].setup
      punchline = jokes['' + Object.keys(jokes)[2]].punchline
    } else if (thisjoke > 4.5 && thisjoke <= 6) {
      setup = jokes['' + Object.keys(jokes)[3]].setup
      punchline = jokes['' + Object.keys(jokes)[3]].punchline
    } else if (thisjoke > 6 && thisjoke <= 7.5) {
      setup = jokes['' + Object.keys(jokes)[4]].setup
      punchline = jokes['' + Object.keys(jokes)[4]].punchline
    } else if (thisjoke > 7.5 && thisjoke <= 9) {
      setup = jokes['' + Object.keys(jokes)[5]].setup
      punchline = jokes['' + Object.keys(jokes)[5]].punchline
    } else {
      setup = jokes['' + Object.keys(jokes)[6]].setup
      punchline = jokes['' + Object.keys(jokes)[6]].punchline
    }
    response.end(
      '<h1>Welcome!</h1>' +
      '<p>Knock Knock</p>' +
      '<p>Who\'s there?</p>' +
      '<p>' + setup + '</p>' + // a broken pencil
      '<p>' + setup + ' who?</p>' + // a broken pencil who?
      '<p>' + punchline + '!</p>' + // punchline
      '<p><a href="https://suuuth-js-server-intro.herokuapp.com/">Home</a></p>'
    )
  } else if (request.url === '/cuteness') {
    count = count + 1
    if (count == cute_img.length) {
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
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/WbZbLSJoqk4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
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