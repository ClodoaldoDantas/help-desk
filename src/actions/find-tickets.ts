import { Ticket } from '@/shared/types/ticket'
import { getUser } from './get-user'
import { Action, hasPermission } from '@/shared/permissions'
import db from '@/lib/db'

export async function findTickets({
  query,
}: {
  query: string
}): Promise<Ticket[]> {
  const { user } = await getUser()

  const userCanViewAllTickets = hasPermission(
    user!.role,
    Action.VIEW_ALL_TICKETS
  )

  if (userCanViewAllTickets) {
    const allTickets = db.ticket.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      where: {
        assetNumber: {
          contains: query,
        },
      },
    })
    return allTickets
  }

  const userTickets = await db.ticket.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    where: {
      userId: user!.clerkUserId,
      assetNumber: {
        contains: query,
      },
    },
  })

  return userTickets
}
