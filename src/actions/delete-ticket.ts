'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function deleteTicket(formData: FormData) {
  const ticketId = formData.get('id')?.toString()

  try {
    await db.ticket.delete({
      where: {
        id: ticketId,
      },
    })
  } catch (err) {
    console.error(err)
  }

  revalidatePath('/')
}
