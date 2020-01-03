const models = require('../models')
const Event = models.event
const Category = models.category
const User = models.user

exports.showOne = (req, res) => {
    Event.findAll({
        include : [
            {
                model : Category,
                as : "categoryId",
            },
            {
                model : User,
                as : "userId",
            }
         ],
        where :{
            id :req.params.id
        }
    }).then(events=>res.send(events))
}

exports.showAll = (req, res) => {
    Event.findAll({}).then(events=>res.send(events))
}

exports.showPerCatagory = (req, res) => {
    Event.findAll({
        include : [
                    {
                        model : Category,
                        as : "categoryId",
                    },
                    {
                        model : User,
                        as : "userId",
                    }
                 ],
            where :{
                category_id :req.params.id
            }
        }).then(event=> res.send(event))
}

exports.insert= (req, res)=>{  
        const user_id = req.body.user_id
        const category_id = req.body.category_id
        const title = req.body.title
        const date_start = req.body.date_start
        const description = req.body.description
        const date_finish = req.body.date_finish
        const address = req.body.address
        const price = req.body.price
        const image = req.body.image

            Event.create( {user_id,category_id,title,date_start,date_finish,description,address,price,image} ).then(order=>{
                if(order){
                    res.send({
                        order
                    }) 
                }else{
                    res.send({
                        error: true
                    })
                }
            } )
}
