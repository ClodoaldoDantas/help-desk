import { getUser } from '@/actions/get-user'
import { AddTicketForm } from '@/components/add-ticket-form'
import { Action, hasPermission } from '@/shared/permissions'

export default async function NewTicketPage() {
  const { user } = await getUser()

  const userCanCreateTicket = hasPermission(user!.role, Action.CREATE_TICKET)

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Novo Chamado</h1>
      </div>

      {userCanCreateTicket ? (
        <AddTicketForm />
      ) : (
        <p className="text-red-500">
          Você não tem permissão para criar um chamado.
        </p>
      )}
    </>
  )
}
