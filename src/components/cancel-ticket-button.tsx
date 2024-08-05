import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Action, hasPermission } from '@/shared/permissions'
import { getUser } from '@/actions/get-user'

export async function CancelTicketButton() {
  const { user } = await getUser()

  const userCanCancelTicket = hasPermission(user!.role, Action.CANCEL_TICKET)

  if (!userCanCancelTicket) {
    return null
  }

  return (
    <Button variant="outline" size="icon">
      <XIcon size={18} />
      <span className="sr-only">Excluir chamado</span>
    </Button>
  )
}
