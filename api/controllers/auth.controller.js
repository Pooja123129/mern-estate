import user from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorhandler } from '../utils/error.js';
export const signup = async (req,res,next) => {

const{ username,email,password } = req.body;
const hashedpassword = bcryptjs.hashSync(password,10);
const newuser = new user({ username,email,password: hashedpassword});
try { 
    await newuser.save();
    res.status(201).json("user created successfully");
}
catch(error){
    next(error);
}
};
export const signin = async { req,res,next } => {
   const { email,password } = req.body;
   try{
     const validuser = await user.findOne({ email : email });
     if (!validuser) return next(errorhandler(404,'user not found'));
     const validpassword = bcryptjs.compareSync(password,validuser.password);
     if (!validpassword) return next(errorhandler(401,'wrong credentials!'));
   }catch(error) {
    next(error);
} 
}