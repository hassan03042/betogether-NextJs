import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    await connectDB();
    const users = await UserModal.find();
    return Response.json(
      {
        msg: "Users Fetched Successfully",
        users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET Error:", error);
    return Response.json(
      { error: true, msg: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const obj = await request.json();

    const user = await UserModal.findOne({ email: obj.email });
    if (user) {
      return Response.json(
        { error: true, msg: "User With This Email Already Exists" },
        { status: 403 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
    obj.password = hashedPassword;

    let newUser = new UserModal(obj);
    await newUser.save();

    const token = jwt.sign(
      { _id: newUser._id, role: newUser.role },
      process.env.JWT_KEY
    );

    console.log("obj ->", obj);

    return Response.json(
      {
        msg: "User Added Successfully",
        user: newUser,
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return Response.json(
      { error: true, msg: "Failed to add user" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
}

export async function DELETE(request) {
}
