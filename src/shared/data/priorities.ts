export type Priority = 'lowest' | 'low' | 'medium' | 'high' | 'highest'

export const priorities: Record<Priority, string> = {
  lowest: 'Muito Baixa',
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
  highest: 'Muito Alta',
}
