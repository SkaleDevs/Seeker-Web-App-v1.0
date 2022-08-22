import jwt from "jsonwebtoken"
import cookie from "cookie"


export default async function handler(req, res) {
    
   try{
   
    // console.log(decoded);
    // console.log(req.headers);
    // const cookies  = req.headers.cookie;
    // console.log(cookies);
    var {token} =  cookie.parse(req?.headers.cookie || "");
    // console.log(parsed.token);
    var decoded = jwt.verify(token, 'secret');
    console.log(decoded)
        if(decoded.role!=="seeker"){
            return res.status(401).json({error: 'Unauthorized'});
        }

    
    const responseData = {
        message: "Hello, GFG Learner"
    }
    return res.send(responseData);
}   
catch(err){
        res.send(err);   
    }
}