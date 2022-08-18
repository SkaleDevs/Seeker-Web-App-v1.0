import Seeker from '../../model/seekerSchema';
import connectDB from '../../auth/lib/connectDB';
import cookie from 'cookie';
import jwt from "jsonwebtoken"


connectDB();
export default async function handler(req,res){
    try {
        // const cookies  = req.headers.cookie;
        // console.log(cookies);
        var {token} =  cookie.parse(req?.headers.cookie || "");
        var decoded = jwt.verify(token, 'secret');
        if(decoded.role!=="seeker"){
            return res.status(401).json({error: 'Unauthorized'});
        }


    let data=  await Seeker.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}
 catch (error) {
    res.status(401).send(error);
}
}