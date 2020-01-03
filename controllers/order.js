const models = require('../models')
const Order = models.order
const Event = models.event
const User = models.user

exports.insert= (req, res)=>{    

    const user_id = req.body.user_id
    const event_id = req.body.event_id
    const payment_status = req.body.payment_status
    const checking_status = req.body.checking_status
    const quantity = req.body.quantity
    
                Order.create( {user_id,event_id,payment_status,checking_status,quantity} ).then(order=>{
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

exports.showAll = (req, res) => {
    const user_id = req.body.user_id
    Order.findAll({
            include : [
                    {
                        model : Event,
                        as : "eventId",
                    },
                    {
                        model : User,
                        as : "userId",
                    }
                ],
            where :{
                checking_status : 0,
                user_id : req.params.id,
            },
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'DESC'],
            ]
    }).then(order=>res.send(order))
}

exports.showAllTicket = (req, res) => {
    const user_id = req.body.user_id
    Order.findAll({
            include : [
                    {
                        model : Event,
                        as : "eventId",
                    },
                    {
                        model : User,
                        as : "userId",
                    }
                ],
            where :{
                checking_status : 1,
                user_id : req.params.id,
            },
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'DESC'],
            ]
    }).then(order=>res.send(order))
}
