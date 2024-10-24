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

const categories = [
  {
    title: "Indoor Sports",
    thumbnail:
      "https://png.pngtree.com/thumb_back/fh260/background/20220402/pngtree-sport-equipment-and-ballsvivid-colorful-theme-activity-game-indoor-photo-image_16886778.jpg",
    description: "All Your Indoor Sports Events.",
  },

  {
    title: "Atheletes",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0RCyxMVF-GFdlxvJk9qSaGyHoJFs9QsAMw&s",
    description: "All Your Atheletes Events.",
  },

  {
    title: "Birthday",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguHLIyJFdOaR7HSxVuUnWfHP-zaz_WmXO9Q&s",
    description: "All Your Birthday Events.",
  },
];

export default function Category() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1>Categories</h1>
        <Button variant="outline">Add Category</Button>

      </div>


      <Table>
        <TableCaption>A list of your categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((categories) => (
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
