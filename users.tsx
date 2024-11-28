import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal, UserPlus, Users } from 'lucide-react'

const users = [
  {
    id: 1,
    name: "CompanyAdmin",
    email: "ComplyTest@haktrak.com",
    department: "Cyber Security",
    roles: ["Super Admin", "CS Manager"],
  },
  {
    id: 2,
    name: "CS Man",
    email: "ComplyTest6@haktrak.com",
    department: "Cyber Security",
    roles: ["CS Manager"],
  },
  {
    id: 3,
    name: "CSSuper",
    email: "naderelzayed1191@gmail.com",
    department: "Cyber Security",
    roles: ["Cyber Security Supervisor"],
  },
  {
    id: 4,
    name: "csStaff",
    email: "ComplyTest7@haktrak.com",
    department: "Cyber Security",
    roles: ["CS Staff"],
  },
]

const userStats = [
  { title: "Admins", count: 1, icon: Users, color: "bg-green-500" },
  { title: "Managers", count: 4, icon: Users, color: "bg-yellow-500" },
  { title: "Supervisors", count: 5, icon: Users, color: "bg-blue-500" },
  { title: "Staff", count: 7, icon: Users, color: "bg-red-500" },
]

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {userStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 text-white rounded-full p-1 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {user.roles.map((role, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

