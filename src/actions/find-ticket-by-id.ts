import { Ticket } from '@/shared/types/ticket'
import db from '@/lib/db'

type FindTicketResponse = Ticket & {
  user: {
    email: string
  }
}

export async function findTicketById(
  id: string
): Promise<FindTicketResponse | null> {
  const ticket = await db.ticket.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  })

  return ticket
}
