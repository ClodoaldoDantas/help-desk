import { findTicketById } from '@/actions/find-ticket-by-id'
import { TicketPriority } from '@/components/ticket-priority'
import { TicketStatus } from '@/components/ticket-status'
import { Priority } from '@/shared/types/priority'
import { Status } from '@/shared/types/status'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function TicketPage({
  params,
}: {
  params: { id: string }
}) {
  const ticket = await findTicketById(params.id)

  if (!ticket) {
    redirect('/')
  }

  const createdAt = ticket.createdAt.toLocaleDateString('pt-BR')

  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 mb-2 text-muted-foreground hover:text-primary"
      >
        <ChevronLeft className="size-5" />
        <span>Voltar para a lista de chamados</span>
      </Link>

      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Detalhes do chamado
        </h1>
      </div>

      <ul className="flex flex-col gap-3">
        <li className="flex flex-col gap-1">
          <strong className="text-base">Patrimônio</strong>
          <span className="text-muted-foreground">{ticket.assetNumber}</span>
        </li>

        <li className="flex flex-col gap-1">
          <strong className="text-base">Status</strong>
          <div className="max-w-max">
            <TicketStatus status={ticket.status as Status} />
          </div>
        </li>

        <li className="flex flex-col gap-1">
          <strong className="text-base">Prioridade</strong>

          <div className="max-w-max">
            <TicketPriority priority={ticket.priority as Priority} />
          </div>
        </li>

        <li className="flex flex-col gap-1">
          <strong className="text-base">Data de criação</strong>
          <span className="text-muted-foreground">{createdAt}</span>
        </li>

        <li className="flex flex-col gap-1">
          <strong className="text-base">Descrição</strong>
          <span className="text-muted-foreground">{ticket.description}</span>
        </li>

        <li className="flex flex-col gap-1">
          <strong className="text-base">Criado por:</strong>
          <span className="text-muted-foreground">{ticket.user.email}</span>
        </li>

        {ticket.solution !== null && (
          <li className="flex flex-col gap-1">
            <strong className="text-base">Solução</strong>
            <span className="text-muted-foreground">{ticket.solution}</span>
          </li>
        )}
      </ul>
    </>
  )
}
