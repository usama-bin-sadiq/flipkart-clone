const User = require("../models/User")
exports.signup = (req, res) => {
    User.findOne({email: req.body.email})
.exec((error, user) =>{
    if(user) return res.status(400).json({
        message:"User already Existed"
    });
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;
    const _user = new User(
        {
            firstName, 
            lastName,
            email,
            password,
            username: Math.random().toString()
        });
        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                    error:error,
                    message: "Something Wrong"
                });
            }
            if (data){
                return res.status(201).json({
                    message: "User created Successfully"
                });
            }
        });
});
} 
