
const User = require('../models/User')

async function setUser(req, res) {
    try {
        if(!req.body){
            return res.json({'status':false,'message':'Please enter details'});
        } 
        console.log("body :",req.body);
        const { name, latitude, longitude } =req.body;
        if(!name){
            res.json({'status':false,'message':'Latitude is required'}); 
        } else if(!latitude){
            res.json({'status':false,'message':'Latitude is required'}); 
        } else if(!longitude){
            res.json({'status':false,'message':'Longitude is required'}); 
        } else {
            const user = new User({ name, latitude, longitude });
            await user.save();
            res.json({'status':true,'message':'User saved successfully'}); 
        }
    } catch (err) {
        console.log("failed ")
        res.json({'status':false,'message':'Failed to save user','error':err});
    }
}

async function getUsers(req,res){
    try{
        const users = await User.find();
        if(!users){
            res.json({'status':false,'message':'No users found'}); 
        } else {
            res.json({'status':true,'message':'Users retrieved successfully','users':users}); 
        }
    } catch (err){
        res.json({'status':false,'message':'Failed to retrieve users','error':err});
    }
}

module.exports = {setUser,getUsers}
