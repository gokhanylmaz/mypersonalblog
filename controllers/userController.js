const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })

        let same = false;

        if(user){
            same = await bcrypt.compare(password, user.password);
        }else{
            return res.status(404).json({
                succeded: false,
                error
            })
        }
        if (same){
            const token = createWebToken(user._id);   //user idye göre web token oluştur ve bunun süresi bir gün olsun.
            res.cookie('jsonwebtoken', token, {
                httpOnly: true,
                maxAge: 1000*60*60*24
            });
            res.redirect('/users/dashboard');
        }else{
            res.status(404).json({
                succeded: false,
                error
            })
        }
    } catch (error) {
        res.status(404).json({
            succeded: false,
            error
        })
    }
} 

const createWebToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

const getDashboardPage = (req, res) => {
    res.render('dashboard', {
        link: 'dashboard'
    })
}

module.exports = { loginUser, getDashboardPage }