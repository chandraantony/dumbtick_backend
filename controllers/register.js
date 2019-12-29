const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.register = (req, res)=>{    

    const name = req.body.name
    const username = req.body.name
    const email = req.body.email
    const password = req.body.password 
    
        User.findOne({where: {email}}).then(user=>{
            if(user){
                res.send({
                    error :true,
                    massage : "error bray email sudah terdaftar"
                }) 
            }else{
            
                User.create( {name,username ,email, password,} ).then(user=>{
                    if(user){
                        const token = jwt.sign({ userId: user.id }, 'my-secret-key')
                        res.send({
                            token,
                            user
                        }) 
                    }else{
                        res.send({
                            error: true,
                            message: "Wrong Email or Password!"
                        })
                    }
                } )
                
            }
        }
    )

}