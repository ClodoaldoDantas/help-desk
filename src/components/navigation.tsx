import { menu } from '@/shared/data/menu'
import { ActiveLink } from '@/components/active-link'
import { hasPermission } from '@/shared/permissions'
import { getUser } from '@/actions/get-user'

export async function Navigation() {
  const { user } = await getUser()

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menu.map(({ title, href, icon: Icon, permission }) => {
        if (permission && !hasPermission(user!.role, permission)) {
          return null
        }

        return (
          <ActiveLink
            key={title}
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Icon className="size-4" />
            {title}
          </ActiveLink>
        )
      })}
    </nav>
  )
}
