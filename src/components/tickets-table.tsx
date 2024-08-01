import { SearchIcon, XIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from './ui/table'
import { TicketStatus } from './ticket-status'
import { TicketPriority } from './ticket-priority'
import { Ticket } from '@/shared/types/ticket'
import { Status } from '@/shared/types/status'
import { Priority } from '@/shared/types/priority'

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
                <Button variant="outline" size="icon">
                  <SearchIcon size={18} />
                </Button>

                <Button variant="outline" size="icon">
                  <XIcon size={18} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
