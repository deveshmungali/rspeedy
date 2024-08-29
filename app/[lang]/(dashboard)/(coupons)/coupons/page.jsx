"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"
import CouponTable from "./basic-table";

const DataTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>
            Basic
            </CardTitle>
          <div>
            <Button>
              <Plus className="h-4 w-4 ltr:mr-1 rtl:ml-1" /> Create Coupons
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
