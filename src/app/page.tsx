import { getCompanies } from "@/services/companies";
import { redirect } from "next/navigation";

export default async function Home() {
  const companies = await getCompanies();

  if (companies.length > 0) {
    redirect(`company/${companies[0].id}`);
  }

  return;
}
