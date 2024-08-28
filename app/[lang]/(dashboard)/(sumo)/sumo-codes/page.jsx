"use client"
import {Fragment} from "react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Icon } from "@iconify/react";
import PromotionalCard from "./promotional-card"
import CriticalStats from "./critical-requests"
import CriticalListTable from "./critical-requests-list-table"
const InvoiceListPage = () => {
  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Script Installation Requests</BreadcrumbItem>
        <BreadcrumbItem>Critical Requests</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-xl font-medium text-default-900">Critical Requests Overview</CardTitle>
          <Button
            className="flex-none border-default-300 text-default-600 h-9 text-xs font-medium"
            variant="outline"
          >
            <Icon icon="heroicons:funnel" className="w-3.5 h-3.5 ltr:mr-0.5 rtl:ml-0.5" />
            Filter
            </Button>
        </CardHeader>
        <CardContent className="pt-0 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {/* <PromotionalCard /> */}
            <CriticalStats />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardContent className="p-0">
          <CriticalListTable />
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default InvoiceListPage;