const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','*')
    next();
});


//controllers
CategoryController = require('./controllers/category');
EventController = require('./controllers/event');
LoginController = require('./controllers/login');
RegisterController = require('./controllers/register');
OrderController = require('./controllers/order');

app.group("/api/v1", (router) => {


     router.get('/categories', CategoryController.showAll)    

     router.get('/events', EventController.showAll)  
     router.get('/event/:id', EventController.showOne)
     router.get('/event/category/:id', EventController.showPerCatagory)

     router.post('/login', LoginController.login)

     router.post('/register', RegisterController.register)

     router.post('/order', OrderController.insert)
     


})


app.listen(port, () => console.log(`Listening on port ${port}!`))