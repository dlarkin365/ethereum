/*the pacjage.json file is configured to look at this on startup
this enables the next-routes module which allows next.js do dynamic routing
*/
const { createServer } = require ('http');
const next = require ('next');

//this tells the application to look at a global env varialbe
const app = next ({
  dev: process.env.NODE_ENV != 'production'
})


const routes = require ('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, err => {
    if (err) throw err;
    console.log ('Ready on localhost:3000')
});
});
