import { AppHeader, MobileNav } from "@/components/layout/app-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 pb-20 sm:px-6 lg:px-8 md:pb-6">
        {children}
      </main>
      <MobileNav />
    </>
  );
}
