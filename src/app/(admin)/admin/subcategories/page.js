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
import { AddCategories } from "@/components/AddCategories/AddCategory";

const subCategories = [
  {
    title: "Table Tennis",
    category: "Indoor Sports",
    thumbnail:
      "https://png.pngtree.com/thumb_back/fh260/background/20220402/pngtree-sport-equipment-and-ballsvivid-colorful-theme-activity-game-indoor-photo-image_16886778.jpg",
    description: "All Your Indoor Sports Events.",
  },
  {
    title: "Snooker",
    category: "Indoor Sports",
    thumbnail:
      "https://png.pngtree.com/thumb_back/fh260/background/20220402/pngtree-sport-equipment-and-ballsvivid-colorful-theme-activity-game-indoor-photo-image_16886778.jpg",
    description: "All Your Indoor Sports Events.",
  },

];

export default function Category() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1>Sub Categories</h1>
        <AddCategories />

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
          {subCategories.map((categories) => (
            <TableRow key={categories.title}>
              <TableCell className="text-right">
                <Image
                  src={categories.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={60}
                  width={60}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">
                {categories.category}
              </TableCell>
              <TableCell className="font-medium">
                {categories.title}
              </TableCell>
              <TableCell className="font-medium">
                {categories.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
