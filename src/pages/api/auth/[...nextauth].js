import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import connectDB from "./lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email= credentials.email;
        const password= credentials.password;
        const user=await Institute.findOne({email:email});
        if(!user){
          throw new Error("Institute not found");
        }
        if (user){
          return signInUser({password,user})
        }
      }
    })
    // ...add more providers here
  ],
  // pages:{
  //   signIn:'/api/auth/signin',
  // }
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