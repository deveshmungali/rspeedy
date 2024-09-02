import { getDictionary } from "@/app/dictionaries";
import StaffPageView from "./page-view";

const StaffPage = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <StaffPageView trans={trans} />;
};

export default StaffPage;
