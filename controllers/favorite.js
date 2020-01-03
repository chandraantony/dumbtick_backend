const models = require('../models')
const Favorite = models.Favorite
const Event = models.event
const User = models.user

exports.showOne = (req, res) => {
     const id_user = req.body.id_user
     const id_event = req.body.id_event
    Favorite.findOne({
         where :{
             id_event : id_event,
             id_user : id_user
            }
    }).then(fav=>res.send(fav))
}
