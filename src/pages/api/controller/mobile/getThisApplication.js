import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import jwt from "jsonwebtoken"
import cookie from "cookie"
connectDB();
export default async function handler(req,res){
    try{
    var {token} =  cookie.parse(req?.headers.cookie || "");
    console.log(token)
        var decoded = jwt.verify(token,'secret');
        console.log(decoded)
        if(decoded.role!=="individual"){
            return res.status(401).json({error: 'Unauthorized'});
        }
    let data=  await ApplySeeker.find({seekerID:decoded.id,scholarshipID:req.body.scholarshipID});
    if(data){
        return res.status(200).send(data);
    }
    return res.status(404).send({message:"No application exists"})}
    catch(error){
        res.status(500).json(error);
    }
}