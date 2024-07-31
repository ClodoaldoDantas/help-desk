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

export function TicketsTable() {
  const tickets = [
    {
      id: 1,
      patrimony: '256789',
      status: 'in-progress',
      priority: 'highest',
      createdAt: '30/07/2024',
    },
    {
      id: 2,
      patrimony: '345678',
      status: 'in-progress',
      priority: 'high',
      createdAt: '30/07/2024',
    },
    {
      id: 3,
      patrimony: '453212',
      status: 'completed',
      priority: 'medium',
      createdAt: '29/07/2024',
    },
    {
      id: 4,
      patrimony: '234567',
      status: 'completed',
      priority: 'low',
      createdAt: '29/07/2024',
    },
    {
      id: 5,
      patrimony: '123987',
      status: 'completed',
      priority: 'lowest',
      createdAt: '28/07/2024',
    },
  ]

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
            <TableCell className="font-medium">{ticket.patrimony}</TableCell>
            <TableCell>
              <TicketStatus status={ticket.status as any} />
            </TableCell>
            <TableCell>
              <TicketPriority priority={ticket.priority as any} />
            </TableCell>
            <TableCell>{ticket.createdAt}</TableCell>
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
