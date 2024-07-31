import { Badge } from '@/components/ui/badge'
import { Status } from '@/shared/types/status'
import { CalendarClockIcon, CheckCircleIcon } from 'lucide-react'

export function TicketStatus({ status }: { status: Status }) {
  return status === 'in-progress' ? (
    <Badge variant="outline">
      <CalendarClockIcon className="mr-2 size-4" />
      Em andamento
    </Badge>
  ) : (
    <Badge variant="outline" className="border-green-600 text-green-600">
      <CheckCircleIcon className="mr-2 size-4" />
      Concluído
    </Badge>
  )
}
