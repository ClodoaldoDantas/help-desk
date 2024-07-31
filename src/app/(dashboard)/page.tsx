// import { EmptyTable } from '@/components/empty-table'

import { TicketsTable } from '@/components/tickets-table'

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Chamados</h1>
      </div>

      <TicketsTable />

      {/* <EmptyTable /> */}
    </>
  )
}
