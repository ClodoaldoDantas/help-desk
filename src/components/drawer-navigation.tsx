import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { menu } from '@/shared/data/menu'
import { ActiveLink } from '@/components/active-link'
import { hasPermission } from '@/shared/permissions'
import { getUser } from '@/actions/get-user'

export async function DrawerNavigation() {
  const { user } = await getUser()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Alternar menu de navegação</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Logo variant="minimal" />

          {menu.map(({ title, href, icon: Icon, permission }) => {
            if (permission && !hasPermission(user!.role, permission)) {
              return null
            }

            return (
              <ActiveLink
                key={title}
                href={href}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
              >
                <Icon className="size-5" />
                {title}
              </ActiveLink>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
