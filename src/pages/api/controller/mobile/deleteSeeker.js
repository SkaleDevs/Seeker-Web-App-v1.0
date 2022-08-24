import users from '../../model/userSchema';
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


   let data=await users.findOneAndDelete({email:decoded.email,role:"individual",id:decoded.id});
  
        das= await Seeker.findOneAndDelete({email:decoded.email}).then(()=>{
            const msg = {
                to: req.body.email, // Change to your recipient
                from: 'harshme78@gmail.com', // Change to your verified sender
                subject: 'Your account has been removed !',
                text:'try again later',
              }
              sgMail.send(msg)
                .then(() => {
                  console.log('Email sent')
                })
          })
       
    
    res.send(das)
}
catch (error) {
    res.status(500).send(error);
}
}