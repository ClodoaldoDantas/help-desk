import { Ticket } from '@/shared/types/ticket'
import db from '@/lib/db'

export async function findTicketById(id: string): Promise<Ticket | null> {
  const ticket = await db.ticket.findUnique({
    where: {
      id,
    },
  })

  return ticket
}
