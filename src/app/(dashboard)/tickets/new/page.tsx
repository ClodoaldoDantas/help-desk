import { AddTicketForm } from '@/components/add-ticket-form'
import { Action } from '@/shared/permissions'
import { Can } from '@/components/can'

export default async function NewTicketPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Novo Chamado</h1>
      </div>

      <Can action={Action.CREATE_TICKET}>
        <AddTicketForm />
      </Can>
    </>
  )
}
