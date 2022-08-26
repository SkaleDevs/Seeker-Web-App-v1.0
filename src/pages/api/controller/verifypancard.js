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
        pan: "ASDFJHGK16"
    },{
        firstname:"Shreya",
        middlename:"Narayan",
        lastname:"Sharma",
        email:"shreyanushka02@gmail.com",
        phone:"6203452419",
        pan: "QEWRTRRY14"
    },{
        firstname:"Raghav",
        middlename:"Narayan",
        lastname:"Kashyap",
        email:"therealraghavkashyap26@gmail.com",
        phone:"9559111844",
        pan: "BFBDFSBD78"
    },{
        firstname:"Mehul",
        middlename:"Kumar",
        lastname:"Poddar",
        email:"mehulpoddar1310@gmail.com",
        phone:"9122039198",
        pan: "BDSBVVFB84"
    },{
        firstname:"Sudhanshu",
        middlename:"Kumar",
        lastname:"Sharma",
        email:"sudhanshuvshekhar@gmail.com",
        phone:"9334718180",
        pan: "NGHNGFNB56"
    },{
        firstname:"Kumar",
        middlename:"Harsh",
        lastname:"Dubey",
        email:"harshme78@gmail.com",
        phone:"7857870377",
        pan: "VFDSVSVF56"
    }]

    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
