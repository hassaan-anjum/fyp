import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "ECC Sample",
    description: "ECC Sample Project",
    framework: "NCA-ECC",
    endDate: "31-Dec-2024",
    supervisor: "csSuper",
    compliance: "Comp",
    escalation: 1,
  },
  {
    id: 2,
    title: "CSCC Sample",
    description: "Sample Project",
    framework: "NCA-CSCC",
    endDate: "31-Dec-2024",
    supervisor: "csSuper2",
    compliance: "Comp",
    escalation: 1,
  },
  {
    id: 3,
    title: "DCC Sample",
    description: "DCC Sample",
    framework: "NCA-DCC",
    endDate: "31-Dec-2024",
    supervisor: "csSuper2",
    compliance: "Comp",
    escalation: 1,
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button>New Project</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Framework</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Compliance</TableHead>
            <TableHead>Escalation</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.framework}</TableCell>
              <TableCell>{project.endDate}</TableCell>
              <TableCell>{project.supervisor}</TableCell>
              <TableCell>{project.compliance}</TableCell>
              <TableCell>{project.escalation}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

