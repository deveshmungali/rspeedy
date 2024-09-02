import { getDictionary } from "@/app/dictionaries";
import RolePageView from "./page-view";

const RolePage = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <RolePageView trans={trans} />;
};

export default RolePage;
