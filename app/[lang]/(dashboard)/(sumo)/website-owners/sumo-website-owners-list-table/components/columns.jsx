"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";


export const columns = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: "Customer Details",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <Avatar className=" rounded-full">
          <AvatarImage src={row?.original?.customer.avatar.src} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className=" text-sm font-medium text-default-600 whitespace-nowrap"> {row?.original?.customer.name} </span>
          <span className=" text-xs text-default-500 whitespace-nowrap"> {row?.original?.customer.email} </span>
          <Link className="text-xs text-default-500 whitespace-nowrap" 
            href={`tel:${row?.original?.customer.number}`} target="_blank">
              {row?.original?.customer.number}
          </Link>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "url",
    header: "Website URL's",
    cell: ({ row }) => (
      <div className="flex gap-2 justify-left">
        <div className="flex flex-col">
          <Link className=" text-sm font-medium text-default-600 whitespace-nowrap" 
            href={row?.original?.url.main} target="_blank">
              {row?.original?.url.main}
          </Link>
          <span className=" text-sm font-medium text-default-600 whitespace-nowrap"> {row?.original?.url.other} </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "sumocodes",
    header: "Sumo Codes",
    cell: ({ row }) => (
      <div className="flex gap-2 justify-left">
        <div className="flex flex-col">
          <span className=" text-sm font-medium text-default-600 whitespace-nowrap text-primary-500"> {row?.original?.sumocodes} </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className="py-3 px-8 rounded capitalize whitespace-nowrap"
        variant="soft"
        color={row.getValue("status") === "Completed" ? "success" : row.getValue("status") === "closed" ? "warning" : ""}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-3 items-center justify-end">
        <Button
          asChild
          size="icon"
          className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
        >
          <Link href="/invoice-details">
            <Icon icon="heroicons:eye" className="w-5 h-5" />
          </Link>
        </Button>
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
      </div>
    ),
  },


];
