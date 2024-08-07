import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteTicket } from '@/actions/delete-ticket'

export async function RemoveTicketButton({ ticketId }: { ticketId: string }) {
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
