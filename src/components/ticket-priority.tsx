import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsDownIcon,
  ChevronsUpIcon,
  EqualIcon,
} from 'lucide-react'

interface TicketPriorityProps {
  priority: 'lowest' | 'low' | 'medium' | 'high' | 'highest'
}

const priorities = {
  lowest: {
    label: 'Muito Baixa',
    icon: <ChevronsDownIcon className="mr-2 size-5 text-blue-500" />,
  },
  low: {
    label: 'Baixa',
    icon: <ChevronDownIcon className="mr-2 size-5 text-blue-500" />,
  },
  medium: {
    label: 'Média',
    icon: <EqualIcon className="mr-2 size-5 text-yellow-500" />,
  },
  high: {
    label: 'Alta',
    icon: <ChevronUpIcon className="mr-2 size-5 text-red-500" />,
  },
  highest: {
    label: 'Muito Alta',
    icon: <ChevronsUpIcon className="mr-2 size-5 text-red-500" />,
  },
}

export function TicketPriority({ priority }: TicketPriorityProps) {
  return (
    <div className="flex items-center gap-1">
      {priorities[priority].icon}
      <span>{priorities[priority].label}</span>
    </div>
  )
}
