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

const events = [
  {
    title: "Wedding Event",
    description: "Wedding Of H & ...",
    location: "Karachi",
    thumbnail:
      "https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg",
    date: new Date().toLocaleDateString() ,
  },

  {
    title: "Birthday Party",
    description: "Birthday Of Baby Girl",
    location: "Karachi",
    thumbnail:
      "https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg",
    date: new Date().toLocaleDateString() ,
  },


];

export default function Events() {
  return (
    <div className="min-h-screen container mx-auto">
       <div className="flex justify-between items-center my-4">
       <h1 className="font-bold text-xl">Events</h1>
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
          {events.map((events) => (
            <TableRow key={events.title}>
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
              <TableCell>{events.location}</TableCell>
              <TableCell>{events.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
