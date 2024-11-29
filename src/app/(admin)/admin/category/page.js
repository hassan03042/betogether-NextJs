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
import { getCategories } from "@/actions/categories";

export default async function Category() {
  const categories = await getCategories();
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Category</h1>
        <AddCategories />
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
          {categories?.categories?.map((categories) => (
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
              <TableCell className="font-medium">{categories.title}</TableCell>
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
