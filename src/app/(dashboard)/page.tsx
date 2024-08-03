import { findTickets } from '@/actions/find-tickets'
import { TicketsTable } from '@/components/tickets-table'

type DashboardProps = {
  searchParams?: {
    q?: string
  }
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const query = searchParams?.q || ''
  const tickets = await findTickets({ query })
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
