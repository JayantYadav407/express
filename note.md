# Routing in expressJS

# app.METHOD(PATH,HANDLER);

## A route in Express consists of:
## MEHOD -> HTTP method (GET,POST,PUT,DELETE)
## PATH -> URL route (e.g., /, /users)
## Handler -> Function that runs when the route is accessed 

## Express allows dynamic routing using route parameters and query strings.

# DYNAMIC ROUTES

## Dynamic Route - http://localhost:3000/user/jhon
## Used to caputer dynamic values from the URL.
# Defined using :Parameter_name

# QUERY STRINGS

# Query Strings - http://localhost:3000/search?keyword=ExpressJS
# Used to pass optional data in the URL after? 
# Extracted using req.query.