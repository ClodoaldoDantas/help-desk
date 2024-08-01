'use server'

import db from '@/lib/db'
import { getUser } from './get-user'
import { Status } from '@/shared/types/status'

type CreateTicketResponse = {
  success: boolean
  message: string | null
}

export async function createTicket(
  _: any,
  formData: FormData
): Promise<CreateTicketResponse> {
  const assetNumber = formData.get('asset-number')?.toString()
  const priority = formData.get('priority')?.toString()
  const description = formData.get('description')?.toString()
  const status: Status = 'in-progress'

  if (!assetNumber || !priority || !description) {
    return { success: false, message: 'Todos os campos são obrigatórios.' }
  }

  const { user } = await getUser()

  if (!user) {
    return { success: false, message: 'Usuário não encontrado.' }
  }

  try {
    await db.ticket.create({
      data: {
        userId: user.clerkUserId,
        assetNumber: Number(assetNumber),
        priority,
        description,
        status,
      },
    })

    return { success: true, message: null }
  } catch (err) {
    console.log(err)
    return { success: false, message: 'Erro ao criar chamado.' }
  }
}
