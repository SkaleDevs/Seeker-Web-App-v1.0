import Seeker from "../model/seekerSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";
import sgMail from '@sendgrid/mail';
connectDB();
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req, res) {
  try {
    //console.log(req.body.email)
   sgMail.sendMultiple({
                            to: req.body.email, // Change to your recipient
                            from: 'harshme78@gmail.com', // Change to your verified sender
                            subject: 'Placement Offer',
                            html:`<h3>
                                  This is to inform you that you are eligible to apply</h3>`
                                
                              }).then(()=>{
                                  res.json({message:"Email Sent!"})
                              }).catch(err=>{
                                  console.log(err)})
    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
