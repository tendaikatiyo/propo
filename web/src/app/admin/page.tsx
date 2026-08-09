import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Admin",
  description: "Internal Propo operations dashboard.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return <AdminDashboard />;
}
