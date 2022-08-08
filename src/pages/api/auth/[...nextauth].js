import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import connectDB from "./lib/connectDB";
import verifyPassword from "./lib/hashed";
import CredentialsProvider from "next-auth/providers/credentials";
import instituteuser from "../model/instituteUserSchema";
import user from "../model/userSchema";
import mongoose from "mongoose";
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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
         credentials: {
        aishecode: { label: "Aishecode", type: "text" },
        password: {  label: "Password", type: "password" }
      },

      
      async authorize(credentials) {
        
        const aishecode= credentials.aishecode;
        const password= credentials.password;
        console.log("1");
        const myuser=await instituteuser.find({aishecode:aishecode});
        console.log(myuser);
        if(!myuser){
          throw new Error("Institute not found");
        }
        if (myuser){
          return myuser;
          //return signInUser({password,myuser})
        }
      }

    })
    // ...add more providers here
  ],
  // pages:{
  //   signIn:'/api/auth/signin',
  // }
})

const signInUser = async ({password,myuser}) => {
  const ans=await user.find({email:"shreyanushka02@gmail.com"});
  console.log(ans);
  if(!myuser.password){
    throw new Error("Please enter the password");}
    const isMatch=bcrypt.compare(password,myuser.password);
    if(!isMatch){
      throw new Error("Incorrect password");
    }
   return myuser;
  
}