import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield } from 'lucide-react'

const frameworks = [
  {
    id: "NCA-ECC",
    name: "NCA-ECC",
    domains: 5,
    controls: 114,
    progress: 85,
    color: "bg-green-500",
  },
  {
    id: "NCA-CSCC",
    name: "NCA-CSCC",
    domains: 4,
    controls: 55,
    progress: 72,
    color: "bg-yellow-500",
  },
  {
    id: "NCA-DCC",
    name: "NCA-DCC",
    domains: 3,
    controls: 15,
    progress: 90,
    color: "bg-blue-500",
  },
  {
    id: "NCA-OSMACC",
    name: "NCA-OSMACC",
    domains: 3,
    controls: 32,
    progress: 65,
    color: "bg-purple-500",
  },
  {
    id: "NCA-CCC",
    name: "NCA-CCC",
    domains: 4,
    controls: 108,
    progress: 78,
    color: "bg-indigo-500",
  },
  {
    id: "NCA-OTCC",
    name: "NCA-OTCC",
    domains: 4,
    controls: 47,
    progress: 82,
    color: "bg-red-500",
  },
]

export default function FrameworksPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Frameworks</h1>
        <Button>Add Framework</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((framework) => (
          <Card key={framework.id} className="relative overflow-hidden">
            <div
              className={`absolute right-0 top-0 h-full w-2 ${framework.color}`}
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {framework.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Domains
                    </div>
                    <div className="text-2xl font-bold">{framework.domains}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Controls
                    </div>
                    <div className="text-2xl font-bold">{framework.controls}</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    Implementation Progress
                  </div>
                  <Progress value={framework.progress} />
                  <div className="text-sm text-muted-foreground">
                    {framework.progress}% complete
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

