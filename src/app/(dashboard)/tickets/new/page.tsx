import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Save } from 'lucide-react'

export default function NewTicketPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Novo Chamado</h1>
      </div>

      <form>
        <div className="grid w-full max-w-xl items-center gap-2 mb-5">
          <Label htmlFor="patrimony">Número do Patrimônio</Label>
          <Input type="text" id="patrimony" />
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
    </>
  )
}
