import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export function EmptyTable() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Nenhum chamado aberto
        </h3>

        <p className="text-sm text-muted-foreground">
          Clique no botão abaixo para adicionar um novo chamado
        </p>

        <Button asChild className="mt-4">
          <Link href="/tickets/new">
            <PlusCircle className="size-5 mr-2" />
            Adicionar Chamado
          </Link>
        </Button>
      </div>
    </div>
  )
}
