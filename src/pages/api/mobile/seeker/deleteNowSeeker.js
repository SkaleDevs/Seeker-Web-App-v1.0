import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
import cookie from 'cookie';

connectDB();
export default async function handler(req,res){
    try {
      const cookies  = req.headers.cookie;
      console.log(cookies);
      var {token} =  cookie.parse(req?.headers.cookie || "");
      var decoded = jwt.verify(token, 'secret');
      if(decoded.role!=="seeker"){
          return res.status(401).json({error: 'Unauthorized'});
      }
   let details=await ApplySeeker.findOneAndDelete({email:req.body.email, seekerID:req.body.seekerID});
    res.send(details)
    } catch (error) {
       res.status(401).send(error);
    }
}