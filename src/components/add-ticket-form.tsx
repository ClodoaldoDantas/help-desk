'use client'

import { Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

import { priorities } from '@/shared/data/priorities'
import { Priority } from '@/shared/types/priority'
import { createTicket } from '@/actions/create-ticket'
import { useFormState } from 'react-dom'

export function AddTicketForm() {
  const [state, formAction] = useFormState(createTicket, {
    message: null,
  })

  return (
    <form action={formAction}>
      {!!state.message && (
        <p className="text-red-500 text-sm mb-4">{state.message}</p>
      )}

      <div className="grid w-full max-w-xl items-center gap-2 mb-5">
        <Label htmlFor="asset-number">Número do Patrimônio</Label>
        <Input type="number" name="asset-number" id="asset-number" required />
      </div>

      <div className="grid w-full max-w-xl items-center gap-2 mb-5">
        <Label htmlFor="priority">Prioridade</Label>

        <Select name="priority" required>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a prioridade do chamado." />
          </SelectTrigger>

          <SelectContent>
            {Object.keys(priorities).map((priority) => (
              <SelectItem key={priority} value={priority}>
                {priorities[priority as Priority]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-xl items-center gap-2 mb-5">
        <Label htmlFor="description">Descrição</Label>

        <p className="text-sm text-muted-foreground">
          Descreva com detalhes o problema ocorrido.
        </p>

        <Textarea
          name="description"
          id="description"
          className="min-h-32"
          required
        />
      </div>

      <Button type="submit">
        <Save className="size-5 mr-2" />
        Salvar Chamado
      </Button>
    </form>
  )
}
