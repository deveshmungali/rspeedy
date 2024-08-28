import { Fragment } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { data } from "./data";

export default function CriticalListTable() {
  return (
    <Fragment>
      <DataTable data={data} columns={columns} />
    </Fragment>
  );
}
