import { AppHeader, MobileNav } from "@/components/layout/app-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-24 sm:px-6 lg:px-8 md:pb-10">
        {children}
      </main>
      <MobileNav />
    </>
  );
}
