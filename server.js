const path = require("path");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: false
});

// Setup our static files
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/" // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
  }
});

// Our main GET home page route, pulls from src/pages/index.hbs
fastify.get("/", function(request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = {
    greeting: "Hello Node!"
  };
  // request.query.paramName <-- a querystring example
  reply.view("/src/pages/index.hbs", params);
});
fastify.get("/src/pages/anpi.html", function(request, reply) {
  reply.view("/src/pages/anpi.html");
});
// A POST route to handle form submissions
fastify.get("/src/pages/touroku.html",function(request,replay){
  replay.view("/src/pages/touroku.html");
});
fastify.get("/src/pages/touroku.hbs",function(request,replay){
  
  var dates = {
    query: "Hello Node!"
  };
  replay.view("/src/pages/touroku.hbs",dates);
  
  });


// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
var fs = require('fs');
fastify.post('/add', function(req, res) {
    req.on('data', function(chunk) {
      fs.writeFile('save.txt', chunk);
      
    });
});