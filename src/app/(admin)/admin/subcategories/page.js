import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddSubCategories } from "@/components/AddSubCategories/AddSubCategories";
import { getSubCategories } from "@/actions/subcategories";
import { getCategories } from "@/actions/categories";
import CategoryDropdown from "@/components/CategoryDropdown/CategoryDropdown";

// const subCategories = [
//   {
//     title: "Table Tennis",
//     category: "Indoor Sports",
//     thumbnail:
//       "https://png.pngtree.com/thumb_back/fh260/background/20220402/pngtree-sport-equipment-and-ballsvivid-colorful-theme-activity-game-indoor-photo-image_16886778.jpg",
//     description: "All Your Indoor Sports Events.",
//   },
//   {
//     title: "Snooker",
//     category: "Indoor Sports",
//     thumbnail:
//       "https://png.pngtree.com/thumb_back/fh260/background/20220402/pngtree-sport-equipment-and-ballsvivid-colorful-theme-activity-game-indoor-photo-image_16886778.jpg",
//     description: "All Your Indoor Sports Events.",
//   },

// ];

export default async function SubCategories({searchParams}) {
  console.log("searchParams", searchParams);
  
  const subcategories = await getSubCategories(searchParams?.category);
  const categories = (await getCategories()).categories;
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Sub Categories</h1>
        <div className="flex gap-4">
          <CategoryDropdown categories={categories} />
        <AddSubCategories categories={categories} />

        </div>
      </div>

      <Table>
        <TableCaption>A list of your subcategories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategories?.SubCategories?.map((subCat) => (
            <TableRow key={subCat.title}>
              <TableCell className="text-right">
                <Image
                  src={subCat.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={60}
                  width={60}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">
                {subCat.category?.title}
              </TableCell>
              <TableCell className="font-medium">{subCat.title}</TableCell>
              <TableCell className="font-medium">
                {subCat.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
