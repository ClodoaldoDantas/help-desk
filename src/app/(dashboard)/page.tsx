// import { EmptyTable } from '@/components/empty-table'

import { findTickets } from '@/actions/find-tickets'
import { TicketsTable } from '@/components/tickets-table'

export default async function Dashboard() {
  const tickets = await findTickets()

  const isEmpty = tickets.length === 0

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Chamados</h1>
      </div>

      {isEmpty ? (
        <p className="text-muted-foreground">Nenhum chamado encontrado</p>
      ) : (
        <TicketsTable tickets={tickets} />
      )}
    </>
  )
}
