import { connectDB } from "@/lib/db/connectDB";
import { SubCategoriesModal } from "@/lib/models/SubCategories";
import { CategoryModal } from "@/lib/models/Category";
import { EventModal } from "@/lib/models/Events";
import { UserModal } from "@/lib/models/Users";

export async function GET(request) {
  await connectDB();

  const reqUrl = request.url;
  const { searchParams } = new URL(reqUrl);
  const query = {};
  const events = await EventModal.find(query)
    .populate("category", "title")
    .populate("createdBy", "fullname email profileImg")
    .populate("subcategory", "title");

  return Response.json(
    {
      msg: "Events Fetched Successfully",
      events,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();

  const obj = await request.json();
  const user = await UserModal.findOne({ _id: obj.createdBy });
  if (!user)
    return Response.json(
      {
        error: true,
        msg: "User Not Found",
        data:null,
      },
      { status: 403 }
    );

  let newEvent = new EventModal(obj);
  await newEvent.save();

  return Response.json(
    {
      msg: "Event Added Successfully",
      events: newEvent,
    },
    { status: 201 }
  );
}
