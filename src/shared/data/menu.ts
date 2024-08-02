import { Home, PlusCircle } from 'lucide-react'
import { Action } from '../permissions'

export const menu = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/',
  },
  {
    title: 'Novo Chamado',
    icon: PlusCircle,
    href: '/tickets/new',
    permission: Action.CREATE_TICKET,
  },
]
