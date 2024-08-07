import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { TicketStatus } from '@/components/ticket-status'
import { TicketPriority } from '@/components/ticket-priority'
import { RemoveTicketButton } from '@/components/remove-ticket-button'
import { Ticket } from '@/shared/types/ticket'
import { Status } from '@/shared/types/status'
import { Priority } from '@/shared/types/priority'
import { Can } from './can'
import { Action } from '@/shared/permissions'

export function TicketsTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Patrimônio</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Prioridade</TableHead>
          <TableHead>Data de criação</TableHead>
          <TableHead className="w-[150px]">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell className="font-medium">{ticket.assetNumber}</TableCell>
            <TableCell>
              <TicketStatus status={ticket.status as Status} />
            </TableCell>
            <TableCell>
              <TicketPriority priority={ticket.priority as Priority} />
            </TableCell>
            <TableCell>
              {ticket.createdAt.toLocaleDateString('pt-BR')}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/tickets/${ticket.id}`}>
                    <SearchIcon size={18} />
                    <span className="sr-only">Detalhes do chamado</span>
                  </Link>
                </Button>

                <Can action={Action.REMOVE_TICKET}>
                  <RemoveTicketButton ticketId={ticket.id} />
                </Can>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
