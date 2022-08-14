import users from '../../model/userSchema';
import Institute from '../../model/instituteSchema';
import connectDB from '../../auth/lib/connectDB';
import sgMail from '@sendgrid/mail';
connectDB();
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req,res){

  // const session=await getSession({req});
  //  if(!session || session.role!="Institute"){
  //    res.status(401).send("Unauthorized access");
  //  }
  let data=await Institute.findOne({email:req.body.email});
  data.verified="Yes";
  data.save();
  let userss=new users({
    email:req.body.email,
    role:"Institute",
    banned:"No",
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