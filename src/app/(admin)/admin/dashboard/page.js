import Image from "next/image";
import { Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { AnalyticsChart } from "@/components/BarChart/BarChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
        <AnalyticsChart />
    </div>
  );
}
