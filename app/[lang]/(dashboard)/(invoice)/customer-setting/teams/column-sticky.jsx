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

const TeamSticky = () => {
  return (
    <Card className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold sticky left-0 bg-background"> #</TableHead>
            <TableHead className="font-semibold">Email</TableHead>
            <TableHead className="font-semibold">Website</TableHead>
            <TableHead className="text-center sticky right-0 bg-background drop-shadow-md"> Invoice </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.email} className="hover:bg-muted">
              <TableCell className="font-medium  text-card-foreground/80 sticky left-0 bg-background">
                {item.id}
              </TableCell>

              <TableCell className="text-m font-semibold"> {item.email} </TableCell>

              <TableCell className="text-m font-semibold"> {item.website} </TableCell>

              <TableCell className="p-6 flex gap-3 justify-end bg-background sticky right-0 drop-shadow-md">
             
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TeamSticky;
