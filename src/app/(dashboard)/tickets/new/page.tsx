import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewTicketPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Novo Chamado</h1>
      </div>

      <form>
        <div className="grid w-full max-w-xl items-center gap-2">
          <Label htmlFor="patrimony">Número do Patrimônio</Label>
          <Input type="text" id="patrimony" />
        </div>
      </form>
    </>
  )
}
