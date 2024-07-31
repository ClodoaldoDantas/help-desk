import { Badge } from '@/components/ui/badge'
import { CalendarClockIcon, CheckCircleIcon } from 'lucide-react'

interface TicketStatusProps {
  status: 'in-progress' | 'completed'
}

export function TicketStatus({ status }: TicketStatusProps) {
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
