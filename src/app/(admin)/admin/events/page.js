import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEvents } from "@/actions/events";
import AddEventForm from "@/components/AddEventSheet/AddEventSheet";



export default async function Events() {
  const events = await getEvents();
  return (
    <div className="min-h-screen container mx-auto">
       <div className="flex justify-between items-center my-4">
       <h1 className="font-bold text-xl">Events</h1>
       <AddEventForm />
       </div>
      <Table>
        <TableCaption>A list of your recent events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.events?.map((events) => (
            <TableRow key={events._id}>
              <TableCell className="text-right">
                <Image
                  src={events.thumbnail}
                  style={{objectFit:"cover"}}
                  height={60}
                  width={60}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{events.title}</TableCell>
              <TableCell>{events.description}</TableCell>
              <TableCell>{events.address}</TableCell>
              <TableCell>{events.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
