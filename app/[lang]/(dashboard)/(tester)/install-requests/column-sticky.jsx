import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { users } from "./data";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ColumnSticky = () => {
  return (
    <Card className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold sticky left-0 bg-background"> #</TableHead>
            <TableHead className="font-semibold sticky left-0 bg-background drop-shadow-md">Profile</TableHead>
            <TableHead className="font-semibold">Website Url</TableHead>
            <TableHead className="font-semibold">Plan Name</TableHead>
            <TableHead className="font-semibold">Request Type</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Created At</TableHead>
            <TableHead className="text-center sticky right-0 bg-background drop-shadow-md">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.email} className="hover:bg-muted">
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background">
                {item.id}
              </TableCell>
              <TableCell className="font-medium text-card-foreground/80 sticky left-0 bg-background drop-shadow-md">
                <div className="flex gap-2 items-center">
                  <Avatar className="rounded-full">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm text-card-foreground whitespace-nowrap"> {item.name} </span>
                    <span className="text-xs text-card-foreground whitespace-nowrap"> {item.email} </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <Link href={item.url} target="_blank"> {item.url} </Link>
              </TableCell>

              <TableCell className="capitalize">{item.plan}</TableCell>

              <TableCell className="flex gap-2 items-center">
                {item.request}
              </TableCell>

              <TableCell>
                <span className="text-sm text-card-foreground whitespace-nowrap">
                  {item.status}
                </span>
              </TableCell>
              
              <TableCell>
                <span className="text-sm text-card-foreground whitespace-nowrap"> {item.req.date} </span>
                <br />
                <span className="text-xs text-card-foreground whitespace-nowrap"> {item.req.time} </span>
              </TableCell>

              <TableCell className="p-6 flex gap-3 justify-end right-0 sticky bg-background items-center drop-shadow-md">
                <Button
                    size="icon"
                    variant="outline"
                    className=" h-9 w-9"
                    color="secondary"
                  >
                    <Icon icon="heroicons:eye" className=" h-4 w-4  " />
                </Button>

                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-9 w-9"
                    color="secondary"
                  >
                    <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                  </Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ColumnSticky;
