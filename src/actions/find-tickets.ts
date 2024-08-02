import { Ticket } from '@/shared/types/ticket'
import { getUser } from './get-user'
import { Action, hasPermission } from '@/shared/permissions'
import db from '@/lib/db'

export async function findTickets(): Promise<Ticket[]> {
  const { user } = await getUser()

  const options: any = {
    orderBy: {
      createdAt: 'desc',
    },
  }

  if (hasPermission(user!.role, Action.VIEW_ALL_TICKETS)) {
    const allTickets = db.ticket.findMany(options)
    return allTickets
  }

  const userTickets = await db.ticket.findMany({
    ...options,
    where: {
      userId: user!.clerkUserId,
    },
  })

  return userTickets
}
