'use server'

import db from '@/lib/db'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

type CreateTicketResponse = {
  message: string | null
}

export async function updateTicket(
  prevState: any,
  formData: FormData
): Promise<CreateTicketResponse> {
  const solution = formData.get('solution')?.toString()
  const ticketId = formData.get('ticket-id')?.toString()

  if (!solution || !ticketId) {
    return { message: 'Todos os campos são obrigatórios.' }
  }

  const { userId } = auth()

  if (!userId) {
    return { message: 'Usuário não encontrado.' }
  }

  try {
    await db.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        solution,
        status: 'completed',
      },
    })
  } catch (err) {
    console.error(err)
    return { message: 'Erro ao atualizar chamado. Tente novamente mais tarde!' }
  }

  redirect('/')
}
