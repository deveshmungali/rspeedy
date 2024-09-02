"use client";
import Card from "@/components/ui/card-snippet";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

import EnquiryForm from "./validating-multiple-rules";

const InputPage = () => {
  return (
    <div className="space-y-5">

      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem> Enquiry Form </BreadcrumbItem>
      </Breadcrumbs>
      
      <Card title="Enquiry Form">
        <EnquiryForm />
      </Card>
    </div>
  );
};

export default InputPage;
