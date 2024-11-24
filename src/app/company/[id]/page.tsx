import AssetsView from "./AssetsView";
import NotFound from "@/components/NotFound";
import { getCompanies } from "@/services/companies";

interface AssetsPageProps {
  params: Promise<{ id: string }>;
}

export default async function AssetsPage({ params }: AssetsPageProps) {
  const { id } = await params;

  const companies = await getCompanies();
  const currentCompany = companies.find((company) => company.id === id);

  return currentCompany ? (
    <AssetsView company={currentCompany} />
  ) : (
    <NotFound message="No company was found with the provided ID" />
  );
}
