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

const SubscriptionSticky = () => {
  return (
    <Card className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold capitalize sticky left-0 bg-background"> S.No. </TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Plan Name</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Paid Amount</TableHead>
            <TableHead className="font-semibold capitalize min-w-[160px]">Next Paid Amount</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Interval</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Site Limit</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Platform</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Site Url</TableHead>
            <TableHead className="font-semibold capitalize min-w-[180px]">Started From</TableHead>
            <TableHead className="font-semibold capitalize min-w-[180px]">Next Payment</TableHead>
            <TableHead className="font-semibold capitalize min-w-[130px]">Status</TableHead>
            <TableHead className="font-semibold capitalize text-center min-w-[200px] sticky right-0 bg-background drop-shadow-md"> Action </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.email} className="hover:bg-muted">
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background">
                {item.id}
              </TableCell>

              <TableCell className="text-m font-semibold"> {item.plan_name} </TableCell>
              <TableCell className="text-m font-semibold"> {item.paid_amount} </TableCell>
              <TableCell className="text-m font-semibold"> {item.next_amount} </TableCell>
              <TableCell className="text-m font-semibold"> {item.interval} </TableCell>
              <TableCell className="text-m font-semibold"> {item.site_limit} </TableCell>
              <TableCell className="text-m font-semibold"> {item.platform} </TableCell>
              <TableCell className="text-m font-semibold"> {item.url} </TableCell>
              
              <TableCell className=""> 
                <div className="flex flex-col">
                  <p className="text-lg text-end font-semibold"> {item.started.time} </p>
                  <p className="text-sm text-end"> {item.started.date} </p>
                </div>
              </TableCell>

              <TableCell className=""> 
                <div className="flex flex-col">
                  <p className="text-lg text-end font-semibold"> {item.next.time} </p>
                  <p className="text-sm text-end"> {item.next.date} </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (item.status === "active" && "success") ||
                    (item.status === "inactive" && "success")
                    // (item.status === "somewhat" && "info")
                  }
                  className=" capitalize"
                >
                  {item.status}
                </Badge>
              </TableCell>

              <TableCell className="p-6 flex gap-3 items-center justify-end bg-background sticky right-0 drop-shadow-md">
             
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>

                <Button> Change Plan </Button>
                  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SubscriptionSticky;
