import Image from "next/image";
import { Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { AnalyticsChart } from "@/components/BarChart/BarChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen container mx-auto">
       <div className="flex justify-between items-center my-4">
       <h1 className="font-bold text-xl">Dashboard</h1>
       </div>
        <AnalyticsChart />
    </div>
  );
}
