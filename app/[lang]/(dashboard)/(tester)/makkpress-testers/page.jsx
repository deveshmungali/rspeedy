"use client";

import Card from "@/components/ui/card-snippet";
import ColumnSticky from "./column-sticky";

const TailwindUiTable = () => {
  return (
    <div className=" space-y-6">
      <Card title="MakkPress Testers">
        <ColumnSticky />
      </Card>
    </div>
  );
};

export default TailwindUiTable;
