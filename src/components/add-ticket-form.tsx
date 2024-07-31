'use client'

import { CheckCircle, Save } from 'lucide-react'
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

export function AddTicketForm() {
  return (
    <form>
      <div className="grid w-full max-w-xl items-center gap-2 mb-5">
        <Label htmlFor="patrimony">Número do Patrimônio</Label>
        <Input type="number" id="patrimony" />
      </div>

      <div className="grid w-full max-w-xl items-center gap-2 mb-5">
        <Label htmlFor="description">Prioridade</Label>

        <Select>
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

        <Textarea id="description" className="min-h-32" />
      </div>

      <Button type="submit">
        <Save className="size-5 mr-2" />
        Salvar Chamado
      </Button>
    </form>
  )
}
