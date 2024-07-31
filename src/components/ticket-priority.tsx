import { Priority, priorities } from '@/shared/data/priorities'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsDownIcon,
  ChevronsUpIcon,
  EqualIcon,
} from 'lucide-react'

const icons: Record<Priority, JSX.Element> = {
  lowest: <ChevronsDownIcon className="mr-2 size-5 text-blue-500" />,
  low: <ChevronDownIcon className="mr-2 size-5 text-blue-500" />,
  medium: <EqualIcon className="mr-2 size-5 text-yellow-500" />,
  high: <ChevronUpIcon className="mr-2 size-5 text-red-500" />,
  highest: <ChevronsUpIcon className="mr-2 size-5 text-red-500" />,
}

export function TicketPriority({ priority }: { priority: Priority }) {
  const label = priorities[priority]
  const icon = icons[priority]

  return (
    <div className="flex items-center gap-1">
      {icon}
      <span>{label}</span>
    </div>
  )
}
