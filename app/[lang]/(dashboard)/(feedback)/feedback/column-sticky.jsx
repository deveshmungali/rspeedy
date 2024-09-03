import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
            <TableHead className="font-semibold sticky left-0 bg-background drop-shadow-md"> Avatar</TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Website Url</TableHead>
            <TableHead className="font-semibold">Satisfied</TableHead>
            <TableHead className="font-semibold">Rating</TableHead>
            <TableHead className="font-semibold">Feedback</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
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
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background drop-shadow-md">
                <Avatar className="rounded-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.url}</TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (item.satisfied === "no" && "default") ||
                    (item.satisfied === "yes" && "success") ||
                    (item.satisfied === "somewhat" && "info")
                  }
                  className=" capitalize"
                >
                  {item.satisfied}
                </Badge>
              </TableCell>

              <TableCell>{item.rating}</TableCell>

              <TableCell>{item.feedback}</TableCell>
              
              <TableCell>
                <span className="text-sm text-card-foreground whitespace-nowrap"> {item.submit.date} </span>
                <br />
                <span className="text-xs text-card-foreground whitespace-nowrap"> {item.submit.time} </span>
              </TableCell>

              <TableCell className="p-6 flex gap-3 justify-end bg-background  drop-shadow-md">
                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-7 w-7"
                    color="secondary"
                  >
                    <Icon icon="heroicons:eye" className=" h-4 w-4  " />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-7 w-7"
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
