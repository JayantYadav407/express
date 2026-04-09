# Routing in expressJS
# password "0vtuW92IaNnNUdyr"
# app.METHOD(PATH,HANDLER);

## A route in Express consists of:
## MEHOD -> HTTP method (GET,POST,PUT,DELETE)
## PATH -> URL route (e.g., /, /users)
## Handler -> Function that runs when the route is accessed 
## Express allows dynamic routing using route parameters and query strings.

# DYNAMIC ROUTES

## Dynamic Route - http://localhost:3000/user/jhon
## Used to caputer dynamic values from the URL.
## Defined using :Parameter_name

# QUERY STRINGS

## Query Strings - http://localhost:3000/search?keyword=ExpressJS
## Used to pass optional data in the URL after? 
## Extracted using req.query.



# HTTP Methods in ExpressJS

## ExpressJS supports various HTTP methods to handle   different types of client requests. The most commonly    used methods in RESTful APIs are:
## GET
## POST
## PUT

# Handling a GET Request

## Used to fetch data from the server.
## Parametes can be passed using route parameter or query strings 

# Handling a POST Request

## Ued to send data to the server and create a new resource
## Requires middleware (express.json()) to handle JSON input.

# Handling a PUT Request

## Used to update an existing resource
## Uses route parameters (req.params) to identify the resource

# Middleware in ExpressJS

#  Midlleware fucntion in expressJS are fucntions that execute before the final request handler. They can:
## Modify the request (req) and response (res)  objects
## End the reqest-response cycle
## Call the next middleware function in the stack

# Middleware Workflow

## Client Request -> Middleware -> Route Handler -> Response to Client 
## Middleware is essential for logging, authentication, request parsing, error handling, etc.

# Types if Middleware in ExpressJS

# 1. Application Level Middleware 2. Router-Level Middleware 3. Built-in Middleware 4. Third-Party Middleware 5. Error-Handling Middleware

## 1. Application Level Middleware Applies to all routes in an app eg. app.use(loggerMiddleware)
## 2. Router-Level Middleware Applies to specific route groups eg. router.use(authMiddleware)
## 3 Built-in Middleware Comes with Express (e.g express.json()) eg.  app.use(express.json())
## 4. Third-Party Middleware External libraries for addtional functionality app.use(cors())
## 5. Error-Handling Middleware Handles errors in the request lifecycle eg.  app.use(errorHandler)

# BODY-PARSER
## This module provides the following parsers:
## JSON body Parser
## Raw body parser
## Text body parser
## URL - encoded from body parser

# COOKIE-PARSER
## Parser Cookie header and populate req.cookie with an object keyed by the cookie names. Optionally may enable signed cookie support by passing secret string assings req.secret so it may be used by other middleware

# Templating Engine in ExpressJS

## A templating engine generates dynamic HTML by embedding JavaScript- like logic within an HTML file.
## KEY Benefits:
## Keeps logic separate from presentation (HTML).
## Uses variable, loops , conditionals, and functions to generate content.
## In ExpressJS, templating engins are used to render views dynamically by intergrating them into the application.
## Example EJS, Pug, Handlebars

# We can use our file and folder to expose to server by express.static method like :-app.use('/images',express.static('images'))

# Handling FORM Data

# ExpressJS - Database

## (MongoDB & Mongoose)

## MongoDB - MongoDB is a popular, open-source, NoSQL database that stores data in flexible, JSON-like format called BSON (Binary JSON)

## Documnet-Oriented
## High Performance
## Flexible Schema

## Mongoose, is an Object Data Modeling (ODM) library for MongoDB and Node.js. It makes easier to interact with ans manipulate MongoDB documents in a more strcutured way

## Schema-Based
## Validation
## Middleware
## Built-In Methods 


# EXPRESSJS - COOKIES

## Cokkies are small data files sent from the server to the client, stored on the client's browser, They are sent back with every request to the server

## Uses of Cookies

## Session Management - Maintaining user login sessions.
## Personalisation - Enhancing user exprience with recommendations.
## User Tracking - Monitoring userr behavior on the website.
## npm i cookie-parser



# EXPRESSJS -SESSIONS

## HTTP is stateless, meaning each request is independent and does not retain user data.

## TO persist data between requests, we can use:
## Cookies - Stored on the client, visible to users.
## URL Parameters - Can be manipulated and exposed.
## Session


# AUTHENTICATION IN EXPRESSJS

## Authentication is the process of verifying the identity of a user. In ExpressJS, authentication ensure thet only authorized users can access certain resoures.

#  Implementing User Authentication in ExpressJS
## There are two main ways to implement authentication in an expressJS application:

## 1. Session-Based Authentication (Uses cookie and session)
## 2. Token-Based Authentication (Uses JWT or OAuth tokens)

## basic authentication flow:
## 1. The user sends login credentials (email/password).
## 2. The server verifies the credentials against a database.
## 3. If valid, the server responds with a session (cookie) or a JWT token
## 4 The client stores this session or token for subsequent requests
## 5 For each request, the client sends the session/token for verification.


# JWT - Based Authentication

## JWT (Json Web Token) is a stateless authentication method that sends a token instead of storing on the server.

## How JWT Works:
## 1. The user logs in and recives a JWT token.
## 2. The client stores the token (in localStorage or Authorization Header).
## 3 The token is sent with every request.
## 4 The server verifies the token and allows acces

##  npm i jsonwebtoken
##  npm i bcryptjs

## npm -g express-generator  