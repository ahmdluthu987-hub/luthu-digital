import AdminLayoutShell from "@/components/admin/AdminLayoutShell";

/**
 * Admin Layout (Server Component)
 * No Auth Logic - Handled in middleware.ts
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
