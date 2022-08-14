import users from '../model/userSchema';
import Seeker from '../model/seekerSchema';
import connectDB from '../auth/lib/connectDB';
import sgMail from '@sendgrid/mail';
connectDB();
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req,res){
  let data=await Seeker.findOne({email:req.body.email});
  data.verified="Yes";
  data.save();
  let userss=new users({
    email:req.body.email,
    role:"Seeker",
  })
  userss.save().then(()=>{
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'harshme78@gmail.com', // Change to your verified sender
        subject: 'Your account has been verified, now you can login to your account !',
      }
      sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
  })
    res.send(users)
}