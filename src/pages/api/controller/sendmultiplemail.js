import Seeker from "../model/seekerSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";
import sgMail from '@sendgrid/mail';
import news from "../model/newSchema";
connectDB();
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD);
export default async function handler(req, res) {
  try {
   
   
   sgMail.sendMultiple({
                            to: ['shreyanushka02@gmail.com','sudhanshuvshekhar@gmail.com','pixelsspeaking@gmail.com'], // Change to your recipient
                            from: 'harshme78@gmail.com', // Change to your verified sender
                            subject: 'Scheme Suggestion',
                            html:`<h3>
                                  As per your field of interest, You have been suggested to apply for this Scheme that is just posted now!</h3>`
                                
                              }).then(()=>{
                                  return res.json({message:"Email Sent!"})})
                              
   //return res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ err });
  }
}
