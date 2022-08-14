import users from '../model/userSchema';
import Agency from '../model/agencySchema';
import connectDB from '../auth/lib/connectDB';
import sgMail from '@sendgrid/mail';
import {getSession} from 'next-auth/react';
connectDB();

sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req,res){

  // const session=await getSession({req});
  //  if(!session || session.role!="Agency"){
  //    res.status(401).send("Unauthorized access");
  //  }
  let data=await Agency.findOne({email:req.body.email});
  data.verified="Yes";
  data.save();
  let userss=new users({
    email:req.body.email,
    role:"Agency",
  })
  userss.save().then(()=>{
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'harshme78@gmail.com', // Change to your verified sender
        subject: 'Your account has been verified !',
        text:'Now you can login to your account',
      }
      sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
  })
    res.send(users)
}