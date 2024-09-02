import { getDictionary } from "@/app/dictionaries";
import ActivityLogView from "./page-view";

const ActivityLog = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <ActivityLogView trans={trans} />;
};

export default ActivityLog;
