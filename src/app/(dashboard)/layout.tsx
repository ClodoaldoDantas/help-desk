import { Logo } from '@/components/logo'
import { Navigation } from '@/components/navigation'
import { DrawerNavigation } from '@/components/drawer-navigation'
import { UserButton, SignedIn } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'
import { SearchForm } from '@/components/search-form'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Logo />
          </div>

          <div className="flex-1">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-2 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <DrawerNavigation />
          <SearchForm />

          <div className="ml-auto flex items-center gap-3">
            <ModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
