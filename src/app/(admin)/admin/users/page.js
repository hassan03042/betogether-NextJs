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

const users = [
  {
    fullname: "Muhammad Hassan",
    email: "muhammadhassan6948@gmail.com",
    location: "Karachi",
    profileImage:
      "https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?semt=ais_hybrid",
    events: 5,
  },

  {
    fullname: "Muhammad Muzammil",
    email: "muhammadmuzammil@gmail.com",
    location: "Karachi",
    profileImage: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    events: 5,
  },

  {
    fullname: "Muhammad Ahmed",
    email: "muhammadahmed@gmail.com",
    location: "Karachi",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyafcgDTiRcj__DnW5Eicz-7wACazAluzJtWF9fLYSkcV1LRsdwp1h_0C5vcxYxqJXVuo&usqp=CAU",
    events: 5,
  },
];

export default function Users() {
  return (
    <div className="min-h-screen container mx-auto">
       <div className="flex justify-between items-center my-4">
       <h1 className="font-bold text-xl">Users</h1>
       </div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((users) => (
            <TableRow key={users.fullname}>
              <TableCell className="text-right">
                <Image
                  src={users.profileImage}
                  height={40}
                  width={40}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{users.fullname}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.location}</TableCell>
              <TableCell>{users.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
