import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import connectDB from "./lib/connectDB";
import users from "../model/userSchema";
import { CogSyncOutline } from "mdi-material-ui";

//import {getSession,useSession} from "next-auth/client";

connectDB();


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  
  //let {session}=UseSession();
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
      async session({session,user}){
        console.log(session)
        const data =   await users.findOneAndUpdate({email:user.email})// will use props orso depending on the client side toupdate the role
        console.log(data);
        session.user.role=data.role;
        return session
      }
    }
    // callbacks:{
    //   async signIn({  email }) {
    //   let find=await users.findOne({email:email,banned:"Yes"});
    //    if(find){
    //       throw new Error("Your account has been banned so you can't login");
    //    }
       
    //    return true
    //   },
    //   // async session({ session, user}) {
    //   //    await users.findOneAndUpdate({email:user.email},{role:"Seeker"})// will use props orso depending on the client side toupdate the role
    //   //   return session;
    //   // },
    //   // async jwt(token,user){
    //   //   if(user){
    //   //     token.id=user.id;
    //   //   }
    //   //   return token;
    //   // },

    //   // //just commented redirect because it depends on the frontend will alter accordingly
    //   // async redirect({ url, baseUrl }) {
    //   //  if(role=="Seeker"){
    //   //   return `${baseUrl}/seeker`;
    //   //  }
    //   //  else if(role=="Agency"){
    //   //   return `${baseUrl}/agency`;
    //   //  }
       
    //   //   return `${baseUrl}/institute`;
       
    //   // }
    // }
})

