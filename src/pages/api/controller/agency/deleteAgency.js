import users from '../../model/userSchema';
import Agency from '../../model/agencySchema';
import connectDB from '../../auth/lib/connectDB';
import sgMail from '@sendgrid/mail';
connectDB();
//does even the work of rejecting the verification stuff for agency account

sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req,res){
   let data=await users.findOneAndDelete({email:req.body.email,role:"Agency"});
   let das= await Agency.findOneAndDelete({email:req.body.email})
   .then(()=>{
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
    
    res.send(das,data)
}