import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className='w-full'>
            <Link href={"/admin/dashboard"}>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href={"/admin/users"}>
              <TabsTrigger value="users">Users</TabsTrigger>
            </Link>
            <Link href={"/admin/events"}>
              <TabsTrigger value="events">Events</TabsTrigger>
            </Link>
            <Link href={"/admin/category"}>
              <TabsTrigger value="category">Category</TabsTrigger>
            </Link>
            <Link href={"/admin/subcategories"}>
              <TabsTrigger value="subcategories">SubCategories</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="dashboard">{children}</TabsContent>
          <TabsContent value="users">{children}</TabsContent>
          <TabsContent value="events">{children}</TabsContent>
          <TabsContent value="category">{children}</TabsContent>
          <TabsContent value="subcategories">{children}</TabsContent>
        </Tabs>
      </body>
    </html>
  );
}