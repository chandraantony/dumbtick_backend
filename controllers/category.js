const models = require('../models')
const Category = models.category


exports.showAll = (req, res) => {
    Category.findAll({}).then(categories=>res.send(categories))
}
