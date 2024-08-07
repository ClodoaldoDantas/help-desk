'use client'

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SubmitButton } from './submit-button'
import { updateTicket } from '@/actions/update-ticket'
import { useFormState } from 'react-dom'

export function UpdateTicketForm({ ticketId }: { ticketId: string }) {
  const [state, formAction] = useFormState(updateTicket, {
    message: null,
  })

  return (
    <form action={formAction}>
      <input type="hidden" name="ticket-id" value={ticketId} />

      <div className="grid w-full max-w-xl items-center">
        <Label className="text-base text-primary font-bold" htmlFor="solution">
          Solução
        </Label>

        {!!state.message ? (
          <p className="text-red-500 mb-2">{state.message}</p>
        ) : (
          <p className="text-muted-foreground mb-2">
            Descreva com detalhes a solução do problema.
          </p>
        )}

        <Textarea
          className="min-h-32 mb-2"
          name="solution"
          id="solution"
          required
        />

        <SubmitButton label="Atualizar Chamado" />
      </div>
    </form>
  )
}
