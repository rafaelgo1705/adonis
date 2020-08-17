'use strict'

const TweetController = require('../app/Controllers/Http/TweetController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => 'Conectado');

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

/*Route.group(() => {
    Route.resource("tweets", "TweetController").apiOnly();
}).middleware("auth");*/

Route.group(() => {
    Route.resource("tweets", "TweetController").apiOnly();
});
