'use server'

import db from '@/lib/db'
import { Status } from '@/shared/types/status'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

type CreateTicketResponse = {
  message: string | null
}

export async function createTicket(
  prevState: any,
  formData: FormData
): Promise<CreateTicketResponse> {
  const assetNumber = formData.get('asset-number')?.toString()
  const priority = formData.get('priority')?.toString()
  const description = formData.get('description')?.toString()
  const status: Status = 'in-progress'

  if (!assetNumber || !priority || !description) {
    return { message: 'Todos os campos são obrigatórios.' }
  }

  const { userId } = auth()

  if (!userId) {
    return { message: 'Usuário não encontrado.' }
  }

  try {
    await db.ticket.create({
      data: {
        userId,
        assetNumber,
        priority,
        description,
        status,
      },
    })
  } catch (err) {
    console.error(err)
    return { message: 'Erro ao criar chamado. Tente novamente mais tarde!' }
  }

  redirect('/')
}
