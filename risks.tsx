import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const riskStats = [
  {
    title: "Total Risks",
    value: "100",
    description: "Across all frameworks",
  },
  {
    title: "Unmitigated",
    value: "20",
    description: "Require attention",
    color: "text-red-500",
  },
  {
    title: "Mitigated",
    value: "80",
    description: "Successfully addressed",
    color: "text-green-500",
  },
  {
    title: "ALE",
    value: "$2.5m",
    description: "Annual Loss Expectancy",
    color: "text-yellow-500",
  },
]

const riskMatrix = [
  ["Critical", "yellow", "orange", "red", "red", "red"],
  ["High", "green", "yellow", "orange", "red", "red"],
  ["Medium", "green", "yellow", "orange", "orange", "red"],
  ["Low", "green", "green", "yellow", "orange", "orange"],
  ["Very Low", "green", "green", "green", "yellow", "orange"],
]

export default function RisksPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Risk Management</h1>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Frameworks</SelectItem>
            <SelectItem value="nca-ecc">NCA-ECC</SelectItem>
            <SelectItem value="nca-cscc">NCA-CSCC</SelectItem>
            <SelectItem value="nca-dcc">NCA-DCC</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {riskStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <Progress
                value={
                  stat.title === "Mitigated"
                    ? 80
                    : stat.title === "Unmitigated"
                    ? 20
                    : 100
                }
                className="mt-2"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Risk Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-1">
            <div className="font-medium" />
            {["Very Low", "Low", "Medium", "High", "Critical"].map(
              (header, index) => (
                <div
                  key={index}
                  className="text-center text-sm font-medium"
                >
                  {header}
                </div>
              )
            )}
            {riskMatrix.map((row, i) => (
              <React.Fragment key={i}>
                <div className="text-sm font-medium">{row[0]}</div>
                {row.slice(1).map((color, j) => (
                  <div
                    key={j}
                    className={`aspect-square rounded-sm ${
                      color === "green"
                        ? "bg-green-500"
                        : color === "yellow"
                        ? "bg-yellow-500"
                        : color === "orange"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

