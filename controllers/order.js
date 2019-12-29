const models = require('../models')
const Order = models.order

exports.insert= (req, res)=>{    

    const user_id = req.body.user_id
    const event_id = req.body.event_id
    const payment_status = req.body.email
    const checking_status = req.body.email
    
                Order.create( {user_id,event_id,payment_status,checking_status} ).then(order=>{
                    if(order){
                        res.send({
                            order
                        }) 
                    }else{
                        res.send({
                            error: true,
                            message: "Wrong Email or Password!"
                        })
                    }
                } )


}