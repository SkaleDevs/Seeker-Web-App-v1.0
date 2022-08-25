import users from '../../model/userSchema';
import Seeker from '../../model/seekerSchema';
import {getSession} from 'next-auth/react';
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN; 


export default async function handler(req,res){

    const session = await getSession({req})
    if (!session || session.user.role!=="individual") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data = await Seeker.findOne({email:session.user.email});
    //console.log("sendotp",data.phNo);
    // let otp=Math.floor(Math.random() * 10000) + 1;
    let otp=Math.floor(Math.random() * (10000 - 1000)) + 1000;
     let aadharNo=data.aadharNo;
     let data1=await fetch(`https://api-generator.retool.com/k4krFf/data?Aadhar-no=${aadharNo}`).then(res=>res.json())
     console.log(data1)
    console.log(otp)
    let time=Date.now();
    time=time+180;
    try{
        const client = require('twilio')(accountSid, authToken);
        console.log(session.user.email)
        client.messages
          .create({
             body: `Your OTP is ${otp}`,
             from: '+18304064314',
             to: `+91${data1[0].phone}`
           })
          .then(async(message) =>await users.findOneAndUpdate({email:session.user.email,role:session.user.role},{otp:otp,expire:time}));
        }
        catch(error){
            console.log(error)
        }

        res.send("otp send")
    }