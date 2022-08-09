import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import connectDB from "./lib/connectDB";
import user from "../model/userSchema";
import bannedUser from "../model/bannedUserSchema";
connectDB();


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  
  
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    })
  ],
    session:{
      jwt:true,
    },
    jwt:{
      secret:process.env.JWT_SECRET,
    },
    callbacks:{
      async signIn({  email }) {
       let find=await bannedUser.findOne({email:email});
       if(find){
          throw new Error("Your account has been banned so you can't login");
       }
       return true
      },
      async jwt(token,us){
        if(us){
          token.id=us.id;
        }
        return token;
      }
    }
})

const signInUser = async ({password,user}) => {
  if(!user.password){
    throw new Error("Please enter the password");}
    const isMatch=bcrypt.compare(password,user.password);
    if(!isMatch){
      throw new Error("Incorrect password");
    }
   return user;
  
}