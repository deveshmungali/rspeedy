import { getDictionary } from "@/app/dictionaries";
import PermissionPageView from "./page-view";

const PermissionPage = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <PermissionPageView trans={trans} />;
};

export default PermissionPage;
