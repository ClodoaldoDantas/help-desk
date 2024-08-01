import { Ticket } from '@/shared/types/ticket'
import { getUser } from './get-user'
import db from '@/lib/db'

export async function findTickets(): Promise<Ticket[]> {
  const { user } = await getUser()

  const tickets = await db.ticket.findMany({
    where: {
      userId: user!.clerkUserId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return tickets
}
