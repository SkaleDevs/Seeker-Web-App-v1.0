import Seeker from "../model/seekerSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";

connectDB();
export default async function handler(req, res) {
  try {
    let data=[{
        firstname:"Aniket",
        middlename:"Kumar",
        lastname:"Singh",
        email:"aniketkumar@gmail.com",
        phone:"8306066488",
        rollno:"1601010101",
    },{
        firstname:"Shreya",
        middlename:"Narayan",
        lastname:"Sharma",
        email:"shreyanushka02@gmail.com",
        phone:"6203452419",
        rollno:"7798989898",
    },{
        firstname:"Raghav",
        middlename:"Narayan",
        lastname:"Kashyap",
        email:"therealraghavkashyap26@gmail.com",
        phone:"9559111844",
        rollno:"1891010101",
    },{
        firstname:"Mehul",
        middlename:"Kumar",
        lastname:"Poddar",
        email:"mehulpoddar1310@gmail.com",
        phone:"9122039198",
        rollno:"4891010101",
    },{
        firstname:"Sudhanshu",
        middlename:"Kumar",
        lastname:"Sharma",
        email:"sudhanshuvshekhar@gmail.com",
        phone:"9334718180",
        rollno:"7874131313",
    },{
        firstname:"Kumar",
        middlename:"Harsh",
        lastname:"Dubey",
        email:"harshme78@gmail.com",
        phone:"7857870377",
        rollno:"8941610000",
    }]
   
    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
