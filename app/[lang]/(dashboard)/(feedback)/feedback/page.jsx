"use client";

import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button"
import ColumnSticky from "./column-sticky";

const TailwindUiTable = () => {
  return (
    <div className=" space-y-6">
      <Card title="Sticky Column">
        <ColumnSticky />
      </Card>
    </div>
  );
};

export default TailwindUiTable;
