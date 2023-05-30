const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const checkUser = async (req, res, next) => {
    const token = req.cookies.jsonwebtoken;
    
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                const user = await User.findById(decodedToken.userId);
                res.locals.user = user;
                next();
            }
    })
}else {
    res.locals.user = null;
    next();
}
}

const authanticateToken = async (req, res, next) => {
    try {
        
        const token = req.cookies.jsonwebtoken;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err) => {
                if(err){
                    console.log(err.message);
                    res.redirect('/admin');
                }else{
                    next();
                }
            })
        }else{
            res.redirect('/admin');
        }
    } catch (error) {
        res.status(401).json({
            succeeded: false,
            error: 'no token available'
        })
    }
}

module.exports = { authanticateToken, checkUser };