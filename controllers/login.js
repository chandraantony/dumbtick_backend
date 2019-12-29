const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    

    const username = req.body.username
    const password = req.body.password 
            
    User.findOne(
                {
                where: {username, password},
                attributes: ['id', 'name','email','username'],    
                }).then(user=>{
                                if(user){
                                    const token = jwt.sign({ user_id: user.id }, 'my-secret-key')
                                    res.send({
                                        user,
                                        token
                                    }) 
                                }else{
                                     res.send({
                                        error: true,
                                        message: "Wrong Email or Password!"
                                    })
                                }
                           })

}