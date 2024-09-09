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
            <TableHead className="font-semibold">Payment Method</TableHead>
            <TableHead className="font-semibold">Paid Amount</TableHead>
            <TableHead className="font-semibold">Start Plan Period</TableHead>
            <TableHead className="font-semibold">End Plan Period</TableHead>
            <TableHead className="text-center sticky right-0 bg-background drop-shadow-md"> Invoice </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.email} className="hover:bg-muted">
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background">
                {item.id}
              </TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (item.payment === "stripe" && "success")
                    // (item.payment === "yes" && "success") ||
                    // (item.payment === "somewhat" && "info")
                  }
                  className=" capitalize"
                >
                  {item.payment}
                </Badge>
              </TableCell>

              <TableCell>{item.amount}</TableCell>
              
              <TableCell>
                <span className="text-sm text-card-foreground whitespace-nowrap"> {item.end.date} </span>
                <br />
                <span className="text-xs text-card-foreground whitespace-nowrap"> {item.end.time} </span>
              </TableCell>

              <TableCell>
                <span className="text-sm text-card-foreground whitespace-nowrap"> {item.start.date} </span>
                <br />
                <span className="text-xs text-card-foreground whitespace-nowrap"> {item.start.time} </span>
              </TableCell>

              <TableCell className="p-6 flex gap-3 justify-end bg-background sticky right-0 drop-shadow-md">
              <a href={item.href} download>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:arrow-down" className="h-4 w-4" />
                </Button>
              </a>
                  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ColumnSticky;
