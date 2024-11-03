import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/Users";
import bcrypt from 'bcrypt'

export async function GET(request) {
  await connectDB();
  const users = await UserModal.find();
  return Response.json(
    {
      msg: "Users Fetched Successfully",
      users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  //user exist or not

  const user = await UserModal.findOne({ email: obj.email });

  if (user)
    return Response.json(
      { error: true, msg: "User With This Email Already Exist" },
      { status: 403 }
    );

  const saltRounds = 10;
  const hashedPassword = bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword;
  console.log("obj ->", obj);
  

  // let newUser = new UserModal(obj);
  // await newUser.save();

  return Response.json(
    {
      msg: "Users Added Successfully",
      user: {},
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}
