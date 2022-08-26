import connectDB from "../../auth/lib/connectDB";
import users from "../../model/userSchema";
import { getSession } from "next-auth/react";
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (!session || session.user.role !== "individual") {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log(req);
    let data1 = await users.findOneAndUpdate(
      { email: session?.user?.email },
      { contractID: req.body.contractID },
      { new: true }
    );
    data1.save();
    if (data1) {
        console.log(data1);
      return res
        .status(200)
        .send({ message: "Contract ID added successfully" });
    }
    res.status(200).send({ message: "Could not add your contract ID " });
  } catch (error) {
    res.status(500).send(error);
  }
}
