
import Seeker from '../../model/seekerSchema';
import connectDB from '../../auth/lib/connectDB';
import sgMail from '@sendgrid/mail';
import cookie from 'cookie';
import jwt from "jsonwebtoken"

connectDB();
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req,res){
  try {
    // const cookies  = req.headers.cookie;
    // console.log(cookies);
    var {token} =  cookie.parse(req?.headers.cookie || "");
    var decoded = jwt.verify(token, 'secret');
    if(decoded.role!=="individual"){
        return res.status(401).json({error: 'Unauthorized'});
    }
let data=await Seeker.findOne({email:decoded.email});
if(data){
  return res.send(data);
}    
    return res.send({message:"No profile exists"})
}
catch (error) {
    res.status(500).send(error);
}
}