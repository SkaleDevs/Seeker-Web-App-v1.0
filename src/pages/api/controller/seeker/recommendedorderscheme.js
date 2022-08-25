
import connectDB from '../../auth/lib/connectDB';
import users from '../model/users';
import Scheme from '../../model/agencySchemeSchema';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        const session = await getSession({req})
        if (!session || session.user.role!=="individual") {
            return res.status(401).json({error: 'Unauthorized'})
            }
           let data1=await users.findOne({email:session.user.email})
           let data2=await Scheme.findOne({_id:req.body.scholarshipID})
           let y=["MBA","Phd","Science","Management","Engineering","Medical","Arts","Commerce","Physics","Chemistry","Biology","Mathematics","English","Hindi","Marathi","Kannada","Girl","Disable","OBC","SC/ST"]
           let x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
            y.map((item1,val)=>{
            data1.interest.map(item2=>{
                if(item1===item2){
                    x[val]=1
                }
            })    
            })
            let c=0;
            y.map((item1,val)=>{
                data2.interest.map(item2=>{
                    if(item1===item2){
                        if(x[val]==1){
                            c++
                        }
                    }
                })
            })
            res.status(200).send({message:c})

    }
   catch(error){
       res.status(500).send(error);
   }
}





