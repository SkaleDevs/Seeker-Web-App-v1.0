import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import cookie from 'cookie';
import jwt from "jsonwebtoken"

connectDB();
export default async function handler(req,res){
    try {
    //   const cookies  = req.headers.cookie;
    //   console.log(cookies);
      var {token} =  cookie.parse(req?.headers.cookie || "");
      var decoded = jwt.verify(token, 'secret');
      if(decoded.role!=="individual"){
          return res.status(401).json({error: 'Unauthorized'});
      }
   let details=await ApplySeeker.findOneAndDelete({email:decoded.email, seekerID:decoded.id,scholarshipID:req.body.scholarshipID});
    res.send(details)
    } catch (error) {
       res.status(500).send(error);
    }
}