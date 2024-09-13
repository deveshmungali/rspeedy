"use client";
import * as React from "react";

import { CircularProgress} from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { data } from "./data";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const columns = [

  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "coupon",
    header: "Coupon Name",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            {row?.original?.coupon.name}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "code",
    header: "Coupon Code",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            {row?.original?.code}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "stripe",
    header: "Stripe ID",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            {row?.original?.stripe}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Discount",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            {row?.original?.amount}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            {row?.original?.duration} Months
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "uses",
    header: "Used",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex flex-col space-x-3  rtl:space-x-reverse items-center">
          <span className=" text-sm   text-card-foreground whitespace-nowrap">
            <CircularProgress value={(row?.original?.uses.used / row?.original?.uses.total) * 100} showValue size="sm" />
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant="soft"
        color={
          (row.getValue("status") === "Yes" && "destructive") ||
          (row.getValue("status") === "No" && "success")
        }
        className=" capitalize"
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "enabled",
    header: "Enabled",
    cell: ({ row }) => (
      <Switch defaultChecked={row.original.enabled === "true"} />
    ),
  },
  {
    accessorKey: "start",
    header: "Start Date",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex flex-col rtl:space-x-reverse text-left">
          <span className=" text-sm text-card-foreground whitespace-nowrap">
            {row.original.start.date}
          </span>
          <span className=" text-xs text-card-foreground whitespace-nowrap">
            {row.original.start.time}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "end",
    header: "Expiry Date",
    cell: ({ row }) => (
      <div className="  font-medium  text-card-foreground/80">
        <div className="flex flex-col rtl:space-x-reverse text-left">
          <span className=" text-sm text-card-foreground whitespace-nowrap">
            {row.original.end.date}
          </span>
          <span className=" text-xs text-card-foreground whitespace-nowrap">
            {row.original.end.time}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className=" text-end">
          <div className="flex gap-3 items-center justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button">Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-base font-medium">
                    Your Details Here are Safe with Us
                  </DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="link" className="w-full">
                  <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
                  <TabsTrigger
                      className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                      before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                      value="link"
                    >
                      Details
                    </TabsTrigger>

                    <TabsTrigger
                      className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150
                      before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                      value="code"
                    >
                      Coupon Code
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="code">
                    <h2 className="my-6 text-sm font-medium text-default-700 ">
                      Your Code is safe with us here and we will never leave your code alone.
                    </h2>
                    <div className="flex justify-between py-3 border-t border-b">
                      <span className="font-medium"> Coupon Name: </span>
                      <span> RyanDiscountSuperPlan </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium"> Discount: </span>
                      <span> {row.original.amount} </span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-medium"> Duration: </span>
                      <span> {row.original.duration} Months </span>
                    </div>
                    <div className="flex flex-row gap-2 mb-2 items-center justify-between border-t border-b">
                      <span className="font-medium"> Coupon Code: </span>
                      <div className="flex gap-1 items-center">
                        <Input
                          type="text"
                          placeholder= {`#${row.original.details.code}`}
                          // value= {row.original.details.code}
                        />
                        <Button type="button">Copy</Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="link">
                    <h2 className="my-6 text-sm font-medium text-default-900 ">
                      Start using your modals components by coping the web address
                      below
                    </h2>
                    <div className="flex justify-between py-3 border-t border-b">
                      <span className="font-medium"> Coupon Name: </span>
                      <span> {row.original.coupon.name} </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium"> Stripe ID: </span>
                      <span> {row.original.stripe} </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium"> Category: </span>
                      <span> {row.original.category} </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium"> Location: </span>
                      <span> {row.original.location} </span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium"> Applies To: </span>
                      <span> {row.original.applies} </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium"> Start Date: </span>
                      <div className="flex flex-col">
                        <span className="text-sm text-card-foreground whitespace-nowrap"> {row.original.start.date} </span>
                        <span className="text-xs text-card-foreground whitespace-nowrap"> {row.original.start.time} </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium"> End  Date: </span>
                      <div className="flex flex-col">
                        <span className="text-sm text-card-foreground whitespace-nowrap"> {row.original.end.date} </span>
                        <span className="text-xs text-card-foreground whitespace-nowrap"> {row.original.end.time} </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <Button
              size="icon"
              className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
            >
              <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
            >
              <Icon icon="heroicons:trash" className="w-5 h-5" />
            </Button>

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </div>
      );
    },
  },
];

export function CouponTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="flex items-center flex-wrap gap-2 px-4 pt-3 pb-6">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm min-w-[200px] h-10"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Table >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center flex-wrap gap-4 px-4 py-4">
        <div className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="flex gap-2  items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8"
          >
            <Icon icon="heroicons:chevron-left" className="w-5 h-5 rtl:rotate-180" />
          </Button>

          {table.getPageOptions().map((page, pageIdx) => (
            <Button
              key={`basic-data-table-${pageIdx}`}
              onClick={() => table.setPageIndex(pageIdx)}
              variant={`${pageIdx === table.getState().pagination.pageIndex ? "" : "outline"}`}
              className={cn("w-8 h-8")}
            >
              {page + 1}
            </Button>

          ))}


          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            variant="outline"
            size="icon"
            className="h-8 w-8"
          >
            <Icon icon="heroicons:chevron-right" className="w-5 h-5 rtl:rotate-180" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default CouponTable;
