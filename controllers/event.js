const models = require('../models')
const Event = models.event
const Category = models.category
const User = models.user

exports.showOne = (req, res) => {
    Event.findOne({
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


