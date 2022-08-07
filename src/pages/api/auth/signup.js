import { hashPassword } from './lib/hashed';
import { connectDB } from './lib/connectDB';
import instituteuser from "../model/instituteUserSchema";
connectDB();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { aishecode, password } = data;

  if (
    !aishecode ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }



  const existingUser = await instituteuser.findOne({ aishecode: aishecode });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await instituteuser.insertOne({
    aishecode: aishecode,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;