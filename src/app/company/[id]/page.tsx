import AssetsView from "./AssetsView";
import NotFound from "@/components/NotFound";
import { getAssets, getCompanies, getLocations } from "@/services/companies";

interface AssetsPageProps {
  params: Promise<{ id: string }>;
}

export default async function AssetsPage({ params }: AssetsPageProps) {
  const { id } = await params;

  const companies = await getCompanies();
  const locations = await getLocations(id);
  const assets = await getAssets(id);

  const currentCompany = companies.find((company) => company.id === id);

  return currentCompany ? (
    <AssetsView
      company={currentCompany}
      locations={locations}
      assets={assets}
    />
  ) : (
    <NotFound message="Não uma empresa foi encontrada a partir do id fornecido." />
  );
}
