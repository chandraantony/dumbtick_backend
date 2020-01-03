const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 5000

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
UserController = require('./controllers/user');
FavController = require('./controllers/favorite')

app.group("/api/v1", (router) => {


     router.get('/categories', CategoryController.showAll)    

     //event
     router.get('/events', EventController.showAll)  
     router.get('/event/:id', EventController.showOne)
     router.get('/event/category/:id', EventController.showPerCatagory)
     router.post('/addEvent', EventController.insert)
    
     //login & regis
     router.post('/login', LoginController.login)  
     router.post('/register', RegisterController.register)
    
     //order
     router.post('/order', OrderController.insert)
     router.get('/orderlist/:id', OrderController.showAll)
     router.get('/myTicket/:id', OrderController.showAllTicket)

     //user
     router.get('/user/:id', UserController.showOne);
     router.patch('/update/:id', UserController.update)
     
     //fav
     router.post('/favorite', FavController.showOne )


})


app.listen(port, () => console.log(`Listening on port ${port}!`))