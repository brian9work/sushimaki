import { notFound } from "next/navigation";
import sucursales from "@/utils/sucursales";
import BranchHome from "./BranchHome";

// Genera una URL estatica por cada sucursal: /centro, /calvario
export function generateStaticParams() {
  return sucursales.map((s) => ({ branch: s.id }));
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ branch: string }>;
}) {
  const { branch } = await params;
  const sucursal = sucursales.find((s) => s.id === branch);

  if (!sucursal) notFound();

  return <BranchHome branch={sucursal} />;
}
