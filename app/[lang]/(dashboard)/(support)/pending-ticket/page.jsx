"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownFromLine } from "lucide-react"
import CouponTable from "./basic-table";

const DataTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>
            Pending Ticket
          </CardTitle>
          <div className="flex gap-1">
            <Button>
               Export <ArrowDownFromLine className="h-4 w-4 rtr:ml-1 ltl:mr-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <CouponTable />
        </CardContent>
      </Card>

    </div>
  );
};

export default DataTablePage;
