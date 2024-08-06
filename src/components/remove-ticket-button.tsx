import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Action, hasPermission } from '@/shared/permissions'
import { getUser } from '@/actions/get-user'
import { deleteTicket } from '@/actions/delete-ticket'

export async function RemoveTicketButton({ ticketId }: { ticketId: string }) {
  const { user } = await getUser()
  const userCanRemoveTicket = hasPermission(user!.role, Action.REMOVE_TICKET)

  if (!userCanRemoveTicket) {
    return null
  }

  return (
    <form action={deleteTicket}>
      <input name="id" type="hidden" value={ticketId} />

      <Button type="submit" variant="outline" size="icon">
        <XIcon size={18} />
        <span className="sr-only">Excluir chamado</span>
      </Button>
    </form>
  )
}
