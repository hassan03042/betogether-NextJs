import { connectDB } from "@/lib/db/connectDB";
import { SubCategoriesModal } from "@/lib/models/SubCategories";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  await connectDB();

  const reqUrl = request.url;
  const { searchParams } = new URL(reqUrl);
  const query = {};
  if (searchParams.get("category")) {
    query.category = searchParams.get("category");
  }

  const SubCategories = await SubCategoriesModal.find(query).populate(
    "category",
    "title"
  );

  return Response.json(
    {
      msg: "Subcategories Fetched Successfully",
      SubCategories,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();

  const obj = await request.json();
  let newSubCategories = new SubCategoriesModal(obj);
  await newSubCategories.save();

  return Response.json(
    {
      msg: "SubCategories Added Successfully",
      newSubCategories,
    },
    { status: 201 }
  );
}
