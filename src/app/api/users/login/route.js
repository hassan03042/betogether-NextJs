import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();
    const obj = await request.json();

    const user = await UserModal.findOne({ email: obj.email });
    if (!user) {
      return Response.json(
        { error: true, msg: "User Not Found." },
        { status: 403 }
      );
    }

    const isPasswordValid = await bcrypt.compare(obj.password, user.password);
    if (!isPasswordValid)
      return Response.json(
        { error: true, msg: "Password you have entered is not valid." },
        { status: 403 }
      );

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY
    );


    return Response.json(
      {
        msg: "User Login Successfully",
        user,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return Response.json(
      { error: true, msg: "Failed to add user" },
      { status: 500 }
    );
  }
}
